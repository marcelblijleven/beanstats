"use client"

import {Button} from "@/components/ui/button";
import {Check, Copy, LucideIcon} from "lucide-react";
import {createElement, useState} from "react";

const CopyContainer = ({value}: {value: string}) => {
    const [icon, setIcon] = useState<LucideIcon>(Copy);

    const onClick = () => {
        const writeToClipboard = async () => {
            await navigator.clipboard.writeText(value);
            setIcon(Check);
            setTimeout(() => setIcon(Copy), 5000);
        }

        writeToClipboard();
    }

    return (
        <div className={"flex items-center justify-between rounded-lg border bg-card text-card-foreground shadow-sm"}>
            <div className={"text-sm p-2"}>{value}</div>
            <Button variant={"ghost"} onClick={onClick}>
                {createElement(icon)}
            </Button>
        </div>
    )
}

export default CopyContainer