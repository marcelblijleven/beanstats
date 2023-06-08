import {getNaturalDate} from "@/lib/dates";
import {Bean} from "@/types/beanconqueror";
import ProgressBar from "@/components/progress-bar";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Mapping} from "@/types";

interface Props {
    averageWeight: number;
    averageBrewsPerDay: number;
    totalBrews: number;
    totalGroundBeans: number;
    lastBrew: Date;
    usagePerBeans: Mapping<number>;
    beanMapping: Mapping<Bean>;
}

interface StatsProps {
    label: string;
    value: string;
    progress?: number | null;
}

function Stats(props: StatsProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className={"text-sm font-medium"}>{props.label}</CardTitle>
            </CardHeader>
                <CardContent>
                    <div className={"text-2xl md:text-4xl font-extrabold"}>{props.value}</div>
                    {props.progress && (
                        <>
                            <div className="flex justify-between mt-4">
                                <p>{`${props.progress.toFixed(2)} remaining days`}</p>
                            </div>
                            <ProgressBar total={100} progress={props.progress} />
                        </>
                    )}
                </CardContent>

    </Card>)
}

function getRemainingWeight(mapping: Mapping<Bean>, usage: Mapping<number>): number {
    let remainingWeight: number = 0;

    for (const bean of Object.values(mapping)) {
        if (bean.finished || !bean.weight) {
            continue;
        }

        const beanUsage = usage[bean.config.uuid] || 0;
        const totalWeight = bean.weight;

        remainingWeight += (totalWeight - beanUsage);
    }

    return remainingWeight;
}

export default function CardStats(props: Props) {
    const averageWeight = props.averageWeight;
    const averageBrewsPerDay = props.averageBrewsPerDay;
    const totalBrews = props.totalBrews ? props.totalBrews.toString() : null;

    let totalGroundBeansText = "-";

    if (props.totalGroundBeans) {
        totalGroundBeansText = props.totalGroundBeans > 1000 ? `${(props.totalGroundBeans / 1000).toFixed(2)} kg` : `${props.totalGroundBeans} gr`
    }

    const timeSinceLastCoffee = getNaturalDate(props.lastBrew);
    const remainingWeight = getRemainingWeight(props.beanMapping, props.usagePerBeans);
    const showRemainingWeight = remainingWeight && averageBrewsPerDay && averageWeight;

    const estimatedRemainingWeight = showRemainingWeight ? remainingWeight / (averageBrewsPerDay * averageWeight) : null;

    return (
        <div className={"grid gap-4 grid-cols-2 lg:grid-cols-4 grid-flow-row"}>
            {averageWeight && <Stats label={"Avg. grind weight"} value={`${averageWeight.toFixed(2)} gr`} />}
            {averageBrewsPerDay && <Stats label={"Avg. brews per day"} value={averageBrewsPerDay.toFixed(2)} />}
            {totalBrews && <Stats label={"Total brews"} value={totalBrews} />}
            {props.totalGroundBeans && <Stats label={"Total ground beans"} value={totalGroundBeansText} />}
            {remainingWeight && <Stats label={"Remaining bean weight"} value={`${remainingWeight.toFixed(2)} gr`} progress={estimatedRemainingWeight} />}
            {props.lastBrew && <Stats label={"Last brew"} value={timeSinceLastCoffee} />}
        </div>
    )
}