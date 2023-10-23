import {currentUser} from "@clerk/nextjs";
import {type ReactNode} from "react";

import {getMetrics} from "@/lib/db/get-metrics";

import {FavoriteStatsCard, FavoriteStatsCardSkeleton, StatsCard, StatsCardSkeleton} from "./stats-card";


function Layout({children}: { children: ReactNode }) {
    return (
        <section className={"mt-12"}>
            <h2 className={"text-xl font-bold"}>Stats</h2>
            {children}
        </section>
    )
}

export async function StatsCardSection() {
    const user = await currentUser();
    const userId = user?.publicMetadata.databaseId;

    if (!userId) {
        return (
            <Layout><span>No database user found</span></Layout>
        )
    }

    const metrics = await getMetrics(userId as number)

    return (
        <Layout>
            <div className={"space-y-2 md:space-y-4"}>
                <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4"}>
                    <StatsCard
                        title={"Coffee"}
                        subtitle={"Bags of coffee"}
                        value={metrics.beansCount}
                        href={"/coffee"}
                    />
                    <StatsCard
                        title={"Freezer"}
                        subtitle={"Frozen entries"}
                        value={metrics.freezerCount}
                        href={"/coffee/freeze"}
                    />
                    <StatsCard
                        title={"Roasters"}
                        subtitle={"Unique roasters"}
                        value={metrics.roasterCount}
                    />
                    <StatsCard
                        title={"Cafe brews"}
                        subtitle={"cafe brews logged"}
                        value={metrics.cafeBrewsCount}
                        href={"/brews/cafe"}
                    />
                    <StatsCard
                        title={"Brews"}
                        subtitle={"brews logged"}
                        value={"Coming soon"}
                    />
                </div>
                <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4"}>
                    <FavoriteStatsCard title={"Roasters"}
                                       subtitle={"By bags"}
                                       values={metrics.favoriteRoastersByBag}
                    />
                    <FavoriteStatsCard title={"Roasters"}
                                       subtitle={"By weight"}
                                       values={metrics.favoriteRoastersByWeight}
                    />
                    <FavoriteStatsCard title={"Varieties"}
                                       subtitle={"By occurrence"}
                                       values={metrics.favoriteVarieties}
                    />
                    <FavoriteStatsCard title={"Origins"}
                                       subtitle={"By occurrence"}
                                       values={metrics.favoriteOrigins}
                    />
                </div>
            </div>
        </Layout>
    )
}

export function StatsCardSectionSkeleton() {
    return (
        <Layout>
            <div className={"space-y-2 md:space-y-4"}>
                <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4"}>
                    <StatsCardSkeleton/>
                    <StatsCardSkeleton/>
                    <StatsCardSkeleton/>
                    <StatsCardSkeleton/>
                    <StatsCardSkeleton/>
                </div>
                <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4"}>
                    <FavoriteStatsCardSkeleton />
                    <FavoriteStatsCardSkeleton />
                    <FavoriteStatsCardSkeleton />
                    <FavoriteStatsCardSkeleton />
                </div>
            </div>
        </Layout>
    )
}
