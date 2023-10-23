import Link from "next/link";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";

type StatsCardProps = {
    title: string;
    subtitle: string;
    value: string | number;
    href?: string;
}

export function StatsCardSkeleton() {
    return (
        <Card>
            <CardHeader className={"space-y-0 pb-2"}>
                <CardTitle className={"text-sm font-medium"}>
                    <Skeleton className={"h-4 my-1 w-3/4"} />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Skeleton className={"h-6 w-1/2"} />
                <Skeleton className={"h-3 mt-2"} />
            </CardContent>
        </Card>
    )
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
    )
}
