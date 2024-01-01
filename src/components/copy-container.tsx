"use client";

import {Check, Copy, type LucideIcon} from "lucide-react";
import {createElement, useState, type HTMLAttributes} from "react";

import {Button} from "@/components/ui/button";

interface CopyContainerProps extends HTMLAttributes<HTMLButtonElement> {
    value: string;
    displayValue?: string;
}

const CopyContainer = ({value, displayValue, ...props}: CopyContainerProps) => {
    const [icon, setIcon] = useState<LucideIcon>(Copy);

    const onClick = () => {
        const writeToClipboard = async () => {
            await navigator.clipboard.writeText(value);
            setIcon(Check);
            setTimeout(() => setIcon(Copy), 5000);
        };

        void writeToClipboard();
    };

    return (
        <Button onClick={onClick} {...props} variant={"outline"}>
            <div className={"text-sm p-2 truncate text-ellipsis"}>{displayValue ?? value}</div>
            {createElement(icon, {size: 20})}
        </Button>
    );
};

export default CopyContainer;