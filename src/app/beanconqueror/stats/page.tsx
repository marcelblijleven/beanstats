"use client"

import {StatsContainer} from "@/components/beanconqueror/stats/StatsContainer";

export default function BeanconquerorPage() {
    return (
        <div className={"flex flex-col items-center w-full max-w-5xl space-y-4"}>
            <h1 className={"text-4xl md:text-6xl font-bold text-center"}>
                <span className={"gradient-text"}>Upload</span> a Beanconqueror file to view your data
            </h1>
            <p className={"text-lg text-center max-w-2xl"}>
                Use the select file button below and search for your Beanconqueror.json file.
            </p>
            <StatsContainer />
        </div>
    )
}
