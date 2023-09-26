import { cache } from "react";
import {eq, sql} from "drizzle-orm";

import {db} from "@/db";
import {roasters, beans} from "@/db/schema";

export const revalidate = 900; // Revalidate every 15 minutes at most

export const getRoasters = cache(async (userId: number | unknown)=> {
    if (!userId) return

    const result = await db
        .select({ id: roasters.id, name: roasters.name })
        .from(roasters)
        .where(eq(roasters.userId, userId as number));

    return result || [];
});
