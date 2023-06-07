"use client"

import * as Progress from "@radix-ui/react-progress";
import {useEffect, useState} from "react";

interface Props {
    progress: number;
    total: number;
}

export default function ProgressBar(props: Props) {
    const progressPercentage = (props.progress / props.total) * 100;
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            setProgress(progressPercentage)
        }, 300);
    }, [progressPercentage]);


    return (
        <Progress.Root
            className={"relative overflow-hidden bg-slate-300 rounded-full w-full h-2 translate-z-0"}
            value={progress}
        >
            <Progress.Indicator
                className={"bg-sky-600 w-full h-full transition duration-400 ease-in"}
                style={{transform: `translateX(-${100 - progress}%)`}}
            />
        </Progress.Root>
    )
}