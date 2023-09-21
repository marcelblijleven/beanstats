import {db} from "@/db";
import {roasters, beans} from "@/db/schema";
import {eq, sql} from "drizzle-orm";

type Metrics = {
    roasterCount: number;
    beansCount: number;
}

export async function calculateMetrics(userId: number | unknown) {
    if (!userId) return {
        roasterCount: 0,
        beansCount: 0,
    }

    const roasterCount = await db
        .select({ count: sql<number>`count(*)`})
        .from(roasters)
        .where(eq(roasters.userId, userId as number));
    const beansCount = await db
        .select({count: sql<number>`count(*)`})
        .from(beans)
        .where(eq(beans.userId, userId as number));

    const metrics: Metrics = {
        roasterCount: roasterCount[0].count,
        beansCount: beansCount[0].count,
    }

    return metrics;
}