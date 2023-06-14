"use client"

import FileUpload from "@/app/beanconqueror/stats/components/upload";
import {useState} from "react";
import {processBCFile, Statistics as BrewStatistics} from "@/lib/beanconqueror/statistics";
import Statistics from "@/app/beanconqueror/stats/components/statistics";
import {Button} from "@/components/ui/button";

export default function BeanconquerorPage() {
    const [data, setData] = useState<BrewStatistics>();

    const retrieveData = (data: BrewStatistics) => {
        setData(data);
    }

    return (
        <div className={"flex flex-col items-center w-full max-w-5xl space-y-4"}>
            <h1 className={"text-4xl md:text-6xl font-bold text-center"}>
                <span className={"gradient-text"}>Upload</span> a Beanconqueror file to view your data
            </h1>
            <p className={"text-lg text-center max-w-2xl"}>
                Use the select file button below and search for your Beanconqueror.json file.
            </p>

            {!data && <FileUpload callback={(contents) => processBCFile(contents, retrieveData)}/>}
            {!!data && (
                <>
                    <Button onClick={() => setData(undefined)}>Upload another file</Button>
                    <Statistics {...data} />
                </>
            )}
        </div>
    )
}
