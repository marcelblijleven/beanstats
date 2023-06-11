import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    prefix: string;
}

const InputWithPrefix = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <div className={cn(
                "relative",
                className
            )}>
                <span className={"absolute left-3 leading-10"}>{props.prefix}</span>
                <input
                    type={type}
                    className={"flex h-10 pl-7 rounded-md border border-input bg-transparent px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)
InputWithPrefix.displayName = "InputWithPrefix"

export { InputWithPrefix }
