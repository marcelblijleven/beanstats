"use client"

import {Check, Copy, type LucideIcon} from "lucide-react";
import {createElement, useState} from "react";

import {Button} from "@/components/ui/button";

const CopyContainer = ({value, displayValue}: {value: string, displayValue?: string}) => {
    const [icon, setIcon] = useState<LucideIcon>(Copy);

    const onClick = () => {
        const writeToClipboard = async () => {
            await navigator.clipboard.writeText(value);
            setIcon(Check);
            setTimeout(() => setIcon(Copy), 5000);
        }

        void writeToClipboard();
    }

    return (
        <div className={"flex items-center justify-between rounded-lg border bg-card text-card-foreground shadow-sm"}>
            <div className={"text-sm p-2 truncate text-ellipsis"}>{displayValue ?? value}</div>
            <Button variant={"ghost"} onClick={onClick}>
                {createElement(icon)}
            </Button>
        </div>
    )
}

export default CopyContainer