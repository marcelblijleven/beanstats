"use client"

import {useState} from "react";
import {Preparation, Mill} from "@/types/beanconqueror";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Mapping} from "@/types";
import {Button} from "@/components/ui/button";
import ProgressComponent from "@/components/ui/progress-bar";

interface Props {
    label: string;
    countable: [string, number][];
    mapping?: Mapping<Preparation | Mill>;
}

export default function CountableStats(props: Props) {
    const [slice, setSlice] = useState<boolean>(true);
    const slicedLength = 10;
    const totalEntries = Object.keys(props.countable).length;

    const entries = slice ? props.countable.slice(0, slicedLength) : props.countable;
    const total = entries.reduce((prev, [_, value]) => prev + (value as number), 0);
    const items = entries.map(([key, value]) => (
        <ProgressComponent key={key} value={value} label={props.mapping?.[key].name || key} total={total}/>
    ));

    const showAll = totalEntries > slicedLength;

    return (
        <Card className={"w-full lg:w-[calc(50%-0.5rem)]"}>
            <CardHeader>
                <CardTitle>
                    {props.label}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className={"space-y"}>
                    {items}
                </div>
                {showAll && (
                    <div className={"flex justify-end"}>
                        <Button variant={"link"} onClick={() => setSlice(!slice)}>{slice ? "Show all" : "Collapse"}</Button>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
