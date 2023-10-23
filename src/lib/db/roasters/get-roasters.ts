import { cache } from "react";
import {eq} from "drizzle-orm";

import {db} from "@/db";
import {roasters} from "@/db/schema";

export const revalidate = 900; // Revalidate every 15 minutes at most

export const getRoasters = cache(async (userId: number)=> {
    if (!userId) return

    const result = await db
        .select({ id: roasters.id, name: roasters.name })
        .from(roasters)
        .where(eq(roasters.userId, userId));

    return result || [];
});
