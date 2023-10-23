import {db} from "@/db";
import {beans, freezeEntries} from "@/db/schema";
import {and, eq, or} from "drizzle-orm";

export async function getFreezeEntry(publicId: string, userId: number | undefined) {
    if (!publicId) return null;

    const result = await db
        .select({
            publicId: freezeEntries.publicId,
            label: freezeEntries.label,
            weight: freezeEntries.weight,
            freezeDate: freezeEntries.freezeDate,
            frozen: freezeEntries.frozen,
            notes: freezeEntries.notes,
            isPublic: beans.isPublic,
            beanName: beans.name,
            beanPublicId: beans.publicId,
            userId: freezeEntries.userId,
        })
        .from(freezeEntries)
        .innerJoin(beans, eq(freezeEntries.beanId, beans.id))
        .where(
            userId ? and(
                eq(freezeEntries.publicId, publicId),
                or(eq(freezeEntries.userId, userId), eq(beans.isPublic, true))
            ) : and(
                eq(freezeEntries.publicId, publicId),
                eq(beans.isPublic, true)
            )
        )
        .limit(1);

    if (!result.length) return null;

    return result[0];
}