import {AlertCircle} from "lucide-react";
import {Alert as AlertComponent, AlertDescription, AlertTitle} from "@/components/ui/alert";

export interface AlertProps {
    title?: string;
    description: string;
}

export function Alert(props: AlertProps) {
    return (
        <AlertComponent variant="destructive">
            <AlertCircle className="h-4 w-4"/>
            <AlertTitle>{props.title ?? "Error"}</AlertTitle>
            <AlertDescription>
                {props.description}
            </AlertDescription>
        </AlertComponent>
    )
}