"use client"

import ProgressBar from "@/components/progress-bar";
import {useState} from "react";
import {Preparation, Mill} from "@/types/beanconqueror";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Mapping} from "@/types";
import {Button} from "@/components/ui/button";

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
    const items = entries.map(([key, value]) => {
        const name = props.mapping?.[key].name || key;

        return (
            <>
                <div
                    className={"flex gap-2 justify-between items-center"}>
                    <p className={"truncate capitalize"}>{name}</p>
                    <p>{value}</p>
                </div>
                <div className={"my-auto"}>
                    <ProgressBar total={total} progress={(value as number)}/>
                </div>

            </>
        )
    });

    const showAll = totalEntries > slicedLength;

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {props.label}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className={"grid grid-cols-2 gap-x-2 gap-y-1"}>
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
