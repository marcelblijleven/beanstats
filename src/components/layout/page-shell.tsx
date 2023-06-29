import {HTMLAttributes} from "react";

export default function PageShell(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={"flex flex-col items-center w-full max-w-5xl space-y-4"}>
            {props.children}
        </div>
    )
}