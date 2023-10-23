import {type ReactNode} from "react";

import {FormItem, FormControl, FormLabel, FormMessage, FormDescription} from "@/components/ui/form";
import {cn} from "@/lib/utils";

export interface FormItemProps {
    label: string;
    description?: string;
    className?: string;
    children: ReactNode
}

export function FormItemWrapper(props: FormItemProps) {
    return (
        <FormItem className={cn(props.className)}>
            <FormLabel>{props.label}</FormLabel>
            <FormControl>
                {props.children}
            </FormControl>
            {!!props.description && (
                <FormDescription>
                    {props.description}
                </FormDescription>
            )}
            <FormMessage/>
        </FormItem>
    )
}