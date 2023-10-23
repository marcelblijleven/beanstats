import {eq, sql} from "drizzle-orm";
import {cache} from "react";

import {db} from "@/db";
import {beans, cafeBrews, freezeEntries, roasters} from "@/db/schema";

type Metrics = {
    roasterCount: number;
    beansCount: number;
    freezerCount: number;
    cafeBrewsCount: number;
}

export const revalidate = 900; // Revalidate every 15 minutes at most

export const getMetrics = cache(async (userId: number): Promise<Metrics> => {
    if (!userId) return {
        roasterCount: 0,
        beansCount: 0,
        freezerCount: 0,
        cafeBrewsCount: 0,
    }

    const [roaster] = await db
        .select({ count: sql<number>`count(*)`})
        .from(roasters)
        .where(eq(roasters.userId, userId));
    const [bean] = await db
        .select({count: sql<number>`count(*)`})
        .from(beans)
        .where(eq(beans.userId, userId));
    const [cafeBrew] = await db
        .select({count: sql<number>`count(*)`})
        .from(cafeBrews)
        .where(eq(cafeBrews.userId, userId))
    const [freezer] = await db
        .select({count: sql<number>`count(*)`})
        .from(freezeEntries)
        .where(eq(freezeEntries.userId, userId))

    return {
        roasterCount: roaster.count,
        beansCount: bean.count,
        freezerCount: freezer.count,
        cafeBrewsCount: cafeBrew.count,
    };
});
