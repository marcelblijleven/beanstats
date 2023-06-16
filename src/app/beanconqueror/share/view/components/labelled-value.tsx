import {getDateString} from "@/lib/dates";
import {getTextWithFlagSupport} from "@/lib/flags";
import {Badge} from "@/components/ui/badge";
import Rating from "@/app/beanconqueror/share/view/components/rating";

const LabelledValue = ({
                           label,
                           value,
                           type,
                           splitLabels
                       }: { label: string, value: any, type: string, splitLabels?: boolean }) => {
    let parsed;

    if (value === null || value === undefined || value === "") {
        parsed = "-";
    } else {
        switch (type) {
            case "boolean":
                parsed = value ? "Yes" : "No";
                break;
            case "date":
                parsed = getDateString(new Date(value), false, Intl.DateTimeFormat().resolvedOptions().timeZone);
                break;
            case "string":
                value = (value as string).replaceAll("_", " ");
                if (splitLabels && (value as string).includes(",")) {
                    parsed = (
                        <div className={"flex gap-1 flex-wrap"}>
                            {(value as string).split(",").map(part => {
                                const content = getTextWithFlagSupport(part.trim().toLowerCase());
                                return (
                                    <Badge variant={"outline"} className={"shrink-0"} key={part.trim()}>{content}</Badge>
                                )
                            })}
                        </div>
                    );
                } else {
                    parsed = getTextWithFlagSupport(value.trim().toLowerCase());
                }
                break;
            case "rating":
                parsed = (<Rating value={value}/>);
                break;
            case "number":
            default:
                parsed = value;
        }
    }

    return (
        <div className={"flex flex-col gap-1"}>
            <span className={"text-xs font-semibold"}>{label}</span>
            <span className={"text-md capitalize"}>{parsed}</span>
        </div>
    )
}

export default LabelledValue