import {Bean} from "@/types/beanconqueror";
import {sortFnAsc} from "@/lib//sort";
import {stringToDate} from "@/lib/dates";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import BacklogTable from "@/app/beanconqueror/stats/components/backlog-table";
import {Mapping} from "@/types";

interface BacklogStatsProps {
    label: string;
    beans: Mapping<Bean>;
    usage: Mapping<number>;
}

export default function BacklogStats(props: BacklogStatsProps) {
    const beans = (
        Object.entries<Bean>(props.beans)
            .map(([_, bean]) => bean)
            .filter(bean => !bean.finished)
            .sort((a, b) => {
                return sortFnAsc(stringToDate(a.roastingDate), stringToDate(b.roastingDate))
            })
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.label}</CardTitle>
            </CardHeader>
            <CardContent>
                {!beans.length && "Uh-oh, you've seem to have run out beans"}
                {!!beans.length && <BacklogTable beans={beans} usage={props.usage} />}
            </CardContent>
        </Card>
    )
}