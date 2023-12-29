"use client";

import {useState} from "react";

import {SharedBean} from "@/components/beanconqueror/share/view";
import {ViewLinkForm} from "@/components/forms/view-link-form";

export function ViewLinkContainer() {
    const [data, setData] = useState<string | null>(null);

    return (
        <div className={"w-full space-y-4"}>
            <ViewLinkForm callback={setData} />
            {data && (
                <SharedBean url={data}/>
            )}
        </div>
    );
}