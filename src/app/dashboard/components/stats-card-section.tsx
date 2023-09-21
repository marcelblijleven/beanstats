import {currentUser} from "@clerk/nextjs";
import {cache, ReactNode} from "react";
import {calculateMetrics} from "@/lib/dashboard";
import { StatsCard, StatsCardSkeleton } from "./stats-card";


const getMetrics = cache(calculateMetrics);

function Layout({children}: {children: ReactNode}) {
    return (
        <section>
            <h2 className={"text-xl font-bold"}>Stats</h2>
            <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4"}>
                {children}
            </div>
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

    const metrics = await getMetrics(userId)

    return (
        <Layout>
            <StatsCard
                title={"Coffee"}
                subtitle={"Bags of coffee"}
                value={metrics.beansCount}
            />
            <StatsCard
                title={"Roasters"}
                subtitle={"Unique roasters"}
                value={metrics.roasterCount}
            />
            <StatsCard
                title={"Brews"}
                subtitle={"brews logged"}
                value={"Coming soon"}
            />
            <StatsCard
                title={"Cafe brews"}
                subtitle={"cafe brews logged"}
                value={"Coming soon"}
            />
        </Layout>
    )
}

export function StatsCardSectionSkeleton() {
    return (
        <Layout>
            <StatsCardSkeleton />
            <StatsCardSkeleton />
            <StatsCardSkeleton />
            <StatsCardSkeleton />
        </Layout>
    )
}
