"use server"

import {type FreezeEntryInput} from "@/components/forms/freeze-entries/schema";
import {db} from "@/db";
import {type User} from "@clerk/nextjs/api";
import {currentUser} from "@clerk/nextjs";
import {and, eq} from "drizzle-orm";
import {beans, freezeEntries} from "@/db/schema";
import {createInsertSchema} from "drizzle-zod";
import {type z} from "zod";
import {revalidatePath} from "next/cache";

const freezeEntrySchema = createInsertSchema(freezeEntries);

export async function saveFreezeEntry(data: Partial<FreezeEntryInput>) {
    const user: User | null = await currentUser();

    if (!user) return {success: false, publicId: data.publicId ?? null, detail: "not authenticated"};
    if (!data.beanPublicId) return {success: false, publicId: null, detail: "no bean public id provided"};

    const bean = await db.query.beans.findFirst({
        where: and(
            eq(beans.publicId, data.beanPublicId),
            eq(beans.userId, user.publicMetadata.databaseId as number)
        )
    });

    if (!bean) return {success: false, publicId: data.publicId ?? null, detail: "bean not found"}

    const beanId = bean.id;

    delete data.beanPublicId // delete this here, otherwise drizzle will throw an error when inserting/updating
    const values = {...data, beanId: beanId, userId: user.publicMetadata.databaseId} as z.infer<typeof freezeEntrySchema>

    if (!!data.publicId) {
        // Update existing entry
        await db
            .update(freezeEntries)
            .set(values)
            .where(
                and(
                    eq(freezeEntries.publicId, data.publicId),
                    eq(freezeEntries.userId, user.publicMetadata.databaseId as number)
                )
            );

        // Revalidate path since we've modified the content
        revalidatePath(`/coffee/freeze/${data.publicId}`, "page")
        return {success: true, publicId: data.publicId, detail: "successfully updated entry"}
    }

    // New entry
    const result = await db.insert(freezeEntries).values(values);
    const [dbData] = await db.select({publicId: freezeEntries.publicId}).from(freezeEntries).where(
        eq(freezeEntries.id, parseInt(result.insertId))
    )

    return {success: true, publicId: dbData.publicId, detail: "successfully created entry"}

}