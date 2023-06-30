"use client"


import FileUpload from "@/app/beanconqueror/stats/components/upload";
import {processBCFile, Statistics as BrewStatistics} from "@/lib/beanconqueror/statistics";
import {Button} from "@/components/ui/button";
import Statistics from "@/app/beanconqueror/stats/components/statistics";
import {useState} from "react";
import {AlertCircle} from "lucide-react";
import {AlertRoot as Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

export function StatsContainer() {
    const [data, setData] = useState<BrewStatistics>();

    const retrieveData = (data: BrewStatistics) => {
        setData(data);
    }

    return (
        <>
            <div className={"space-y-4"}>
                {!data && <FileUpload callback={(contents) => processBCFile(contents, retrieveData)}/>}
                <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        The new Beanconqueror zip file is not working in some cases. A fix will be out soon
                    </AlertDescription>
                </Alert>

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