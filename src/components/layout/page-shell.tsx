import {HTMLAttributes} from "react";
import {cn} from "@/lib/utils";

export default function PageShell(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("flex flex-col items-center w-full max-w-5xl space-y-4 mb-12", props.className)}>
            {props.children}
        </div>
    )
}