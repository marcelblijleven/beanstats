import {eq, sql} from "drizzle-orm";
import {cache} from "react";

import {db} from "@/db";
import {beans, beanVarieties, cafeBrews, freezeEntries, roasters} from "@/db/schema";

export type FavoritesResult = {name: string, total: string}[];

type Metrics = {
    roasterCount: number;
    beansCount: number;
    freezerCount: number;
    cafeBrewsCount: number;
    favoriteRoastersByBag: FavoritesResult
    favoriteRoastersByWeight: FavoritesResult,
    favoriteVarieties: FavoritesResult,
    favoriteOrigins: FavoritesResult,
}

export const revalidate = 900; // Revalidate every 15 minutes at most

export const getMetrics = cache(async (userId: number): Promise<Metrics> => {
    if (!userId) return {
        roasterCount: 0,
        beansCount: 0,
        freezerCount: 0,
        cafeBrewsCount: 0,
        favoriteRoastersByBag: [],
        favoriteRoastersByWeight: [],
        favoriteVarieties: [],
        favoriteOrigins: [],
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
        .where(eq(freezeEntries.userId, userId));

    const favoriteRoasters = await db
        .execute(sql`
            SELECT ${roasters.name} name, count(*) total, sum(${beans.weight}) as total_weight
            FROM ${roasters}
            INNER JOIN ${beans} ON ${roasters.id} = ${beans.roasterId}
            WHERE ${roasters.userId} = ${userId}
            GROUP BY ${roasters.name} 
            ORDER BY total DESC
            LIMIT 10;
        `);

    const favoriteVarieties = await db
        .execute(sql`
            SELECT ${beanVarieties.name} name, count(*) as total
            FROM ${beanVarieties}
            INNER JOIN ${beans} ON ${beanVarieties.beanId} = ${beans.id}
            WHERE ${beans.userId} = ${userId} AND ${beanVarieties.name} IS NOT NULL 
            GROUP BY ${beanVarieties.name}
            ORDER BY total DESC
            LIMIT 10;
        `);

    const favoriteOrigins = await db
        .execute(sql`
            SELECT ${beanVarieties.country} name, count(*) as total
            FROM ${beanVarieties}
            INNER JOIN ${beans} ON ${beanVarieties.beanId} = ${beans.id}
            WHERE ${beans.userId} = ${userId} AND ${beanVarieties.country} IS NOT NULL 
            GROUP BY ${beanVarieties.country}
            ORDER BY total DESC
            LIMIT 10;
        `);

    const favoriteRoastersByBag: FavoritesResult = [];
    const favoriteRoastersByWeight: FavoritesResult = [];

    for (const row of favoriteRoasters.rows as {name: string, total: string, total_weight: string}[]) {
        favoriteRoastersByBag.push({name: row.name, total: row.total})
        favoriteRoastersByWeight.push({name: row.name, total: row.total_weight})
    }

    return {
        roasterCount: roaster.count,
        beansCount: bean.count,
        freezerCount: freezer.count,
        cafeBrewsCount: cafeBrew.count,
        favoriteRoastersByBag,
        favoriteRoastersByWeight,
        favoriteVarieties: favoriteVarieties.rows as FavoritesResult,
        favoriteOrigins: favoriteOrigins.rows as FavoritesResult,
    };
});
