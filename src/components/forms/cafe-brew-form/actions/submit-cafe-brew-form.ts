"use server";

import {currentUser} from "@clerk/nextjs";
import {type User} from "@clerk/nextjs/api";
import {eq} from "drizzle-orm";
import {createInsertSchema} from "drizzle-zod";

import {db} from "@/db";
import {cafeBrews} from "@/db/schema";
import {type CafeBrewInputs} from "@/components/forms/cafe-brew-form/schema";


const insertSchema = createInsertSchema(cafeBrews);

export async function submitCafeBrewForm(values: Partial<CafeBrewInputs>) {
    const user: User | null = await currentUser();

    if (!user) {
        return {success: false, error: "Not authenticated"};
    }

    const userId = user.publicMetadata.databaseId as number;

    const rating = values.rating !== null && typeof values.rating === "object" ? values.rating[0] : null;

    try {
        const data = insertSchema.parse({...values, userId, rating});
        let publicId: string;

        if (data.publicId) {
            // Update
            await db.update(cafeBrews).set(data).where(eq(cafeBrews.publicId, data.publicId));
            publicId = data.publicId;
        } else {
            // Insert
            const result = await db.insert(cafeBrews).values(data);
            const id = parseInt(result.insertId);
            const [brew] = await db.select({publicId: cafeBrews.publicId}).from(cafeBrews).where(eq(cafeBrews.id, id)).limit(1);
            publicId = brew.publicId!;
        }

        return {success: true, error: null, publicId: publicId};
    } catch (e) {
        if (e instanceof Error) {
            return {success: false, error: e.stack};
        }

        return {success: false, error: "Could not complete brew submit"};
    }
}