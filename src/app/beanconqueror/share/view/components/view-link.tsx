"use client"

import {Input} from "@/components/ui/input";
import {ChangeEvent, useState} from "react";
import {Button} from "@/components/ui/button";
import SharedBean from "@/app/beanconqueror/share/view/components/shared-bean";

const LINK_RE = /^https:\/\/(?:www\.)?beanconqueror.com\/?\?.*$/;
const BEANLINK_RE = /^https:\/\/beanl.ink\/l\/.*$/;

const ViewLink = () => {
    const [url, setUrl] = useState<string>("");
    const [err, setErr] = useState<boolean>(false);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();
        setErr(value === "" || (!value.match(LINK_RE) && !value.match(BEANLINK_RE)));
        setUrl(value);
    }

    const ringColor = err ? "ring-red-500 focus-visible:ring-red-500" : "ring-green-500 focus-visible:ring-green-500";

    return (
        <div className={"w-full space-y-4"}>
            <div className={"flex gap-2"}>
                <Input
                    type={"text"}
                    className={url === "" ? "" : ringColor}
                    onChange={onChange}
                    value={url}
                    placeholder={"Paste Beanconqueror share url here"}
                />
                <Button onClick={() => setUrl("")}>Clear</Button>
            </div>
            <SharedBean url={url} validUrl={!err} isBeanLink={!!url.match(BEANLINK_RE)} />
        </div>
    )
}

export default ViewLink;