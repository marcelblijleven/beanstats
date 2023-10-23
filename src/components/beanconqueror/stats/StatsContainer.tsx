"use client"


import {useState} from "react";

import Statistics from "@/app/beanconqueror/stats/components/statistics";
import FileUpload from "@/app/beanconqueror/stats/components/upload";
import {Button} from "@/components/ui/button";
import {processBCFile, type Statistics as BrewStatistics} from "@/lib/beanconqueror/statistics";

export function StatsContainer() {
    const [data, setData] = useState<BrewStatistics>();

    const retrieveData = (data: BrewStatistics) => {
        setData(data);
    }

    return (
        <>
            <div className={"space-y-4"}>
                {!data && <FileUpload callback={(contents) => processBCFile(contents, retrieveData)}/>}
            </div>
            {!!data && (
                <>
                    <Button onClick={() => setData(undefined)}>Upload another file</Button>
                    <Statistics {...data} />
                </>
            )}
        </>
    )
}