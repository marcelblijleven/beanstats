"use client"

import FileUpload from "@/app/upload/components/upload";
import {useState} from "react";
import {processBCFile, Statistics as BrewStatistics} from "@/lib/beanconqueror/statistics";
import Statistics from "@/app/upload/components/statistics";
import Link from "next/link";

export default function Home() {
    const [data, setData] = useState<BrewStatistics>();
    const retrieveData = (data: BrewStatistics) => {
        setData(data);
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className={"flex flex-col items-center w-full max-w-3xl space-y-4 text-center"}>
                <h1 className={"text-4xl md:text-6xl font-bold text-center"}>
                    Upload
                </h1>
                <h2>Upload a <Link target={"_blank"} className={"underline"} href={"https://beanconqueror.com"}>Beanconqueror</Link> json file to view your brew data</h2>
                <div className={"flex align-middle gap-2"}>
                    {!data && <FileUpload callback={(contents) => processBCFile(contents, retrieveData)}/>}
                    {!!data && <Statistics {...data} />}
                </div>
            </div>
        </main>
    )
}
