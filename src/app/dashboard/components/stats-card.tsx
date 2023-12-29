import Link from "next/link";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";
import {type FavoritesResult} from "@/lib/db/get-metrics";

type StatsCardProps = {
    title: string;
    subtitle: string;
    value: string | number;
    href?: string;
}

type FavoriteStatsCardProps = {
    title: string;
    subtitle: string;
    values: FavoritesResult;
}

export function StatsCardSkeleton() {
    return (
        <Card>
            <CardHeader className={"space-y-0 pb-2"}>
                <CardTitle className={"text-sm font-medium"}>
                    <Skeleton className={"h-4 my-1 w-3/4"}/>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Skeleton className={"h-6 w-1/2"}/>
                <Skeleton className={"h-3 mt-2"}/>
            </CardContent>
        </Card>
    );
}

export function FavoriteStatsCardSkeleton() {
    return (
        <Card className={"col-span-2"}>
            <CardHeader className={"space-y-0 pb-2"}>
                <CardTitle className={"text-sm font-medium"}>
                    <Skeleton className={"h-4 my-1 w-3/4"}/>
                    <Skeleton className={"h-3 mt-2"}/>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className={"text-base font-medium space-y-1"}>
                    <Skeleton className={"h-6 w-full"}/>
                    <Skeleton className={"h-6 w-full"}/>
                    <Skeleton className={"h-6 w-full"}/>
                    <Skeleton className={"h-6 w-full"}/>
                    <Skeleton className={"h-6 w-full"}/>
                    <Skeleton className={"h-6 w-full"}/>
                    <Skeleton className={"h-6 w-full"}/>
                    <Skeleton className={"h-6 w-full"}/>
                    <Skeleton className={"h-6 w-full"}/>
                    <Skeleton className={"h-6 w-full"}/>
                </div>
            </CardContent>
        </Card>
    );
}

export function StatsCard(props: StatsCardProps) {
    return (
        <Card>
            <CardHeader className={"space-y-0 pb-2"}>
                <CardTitle className={"text-sm font-medium"}>
                    {!props.href && props.title}
                    {!!props.href && <Link className={"hover:underline"} href={props.href}>{props.title}</Link>}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className={"text-2xl font-bold"}>{props.value}</div>
                <p className={"text-xs text-muted-foreground"}>{props.subtitle}</p>
            </CardContent>
        </Card>
    );
}

function FavoriteRow(props: { name: string, total: string }) {
    return (
        <div className={"flex justify-between items-center hover:bg-primary/20 p-1 px-1.5 cursor-default rounded-sm overflow-hidden"}>
            <div className={"flex-1 grow shrink-0 truncate"}>{props.name}</div>
            <div className={"ml-4"}>{props.total}</div>
        </div>
    );
}

export function FavoriteStatsCard(props: FavoriteStatsCardProps) {
    return (
        <Card className={"col-span-2"}>
            <CardHeader className={"space-y-0 pb-2"}>
                <CardTitle className={"text-base font-medium"}>
                    {props.title}
                    <p className={"text-sm text-muted-foreground"}>{props.subtitle}</p>
                </CardTitle>
            </CardHeader>
            <CardContent className={"h-full"}>
                {!!props.values.length && (
                    <div className={"text-base font-medium space-y-1"}>
                        {props.values.map(value => (
                            <FavoriteRow key={`${props.title}-${props.subtitle}-${value.name}`} {...value} />
                        ))}
                    </div>
                )}
                {!props.values.length && (
                    <div className={"flex flex-col text-base justify-center items-center h-full text-muted-foreground"}>
                        {`No ${props.title.toLowerCase()} yet`}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
