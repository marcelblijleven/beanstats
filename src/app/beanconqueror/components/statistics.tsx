import {Statistics as BrewStatistics} from "@/lib/beanconqueror/statistics";
import CountableStats from "@/app/beanconqueror/components/countable-stats";
import BacklogStats from "@/app/beanconqueror/components/backlog-stats";
import CardStats from "@/app/beanconqueror/components/card-stats";

export default function Statistics(props: BrewStatistics) {
    return (
        <div className={"flex flex-col w-full space-y-4 md:space-y-6"}>
            <CardStats
                averageWeight={props.averageGrindWeight}
                averageBrewsPerDay={props.averageBrewsPerDay}
                totalBrews={props.totalBrews}
                lastBrew={props.lastBrew}
                totalGroundBeans={props.totalGroundWeight}
                usagePerBeans={props.usagePerBean}
                beanMapping={props.beanMapping}
            />
            <BacklogStats label={"Your backlog"} beans={props.beanMapping} usage={props.usagePerBean}/>
            <CountableStats label={"Favourite origins"} countable={props.countryCount} />
            <CountableStats label={"Favourite roasters (bags)"} countable={props.roasterCount} />
            <CountableStats label={"Favourite roasters (grams)"} countable={props.roasterCountWeight} />
            <CountableStats label={"Favourite grinder"} countable={props.brewsPerGrinder} mapping={props.grinderMapping} />
            <CountableStats label={"Favourite preparation method"} countable={props.brewsPerPreparationMethod} mapping={props.preparationMapping} />
            <CountableStats label={"Favourite variety"} countable={props.varietyCount} />
            <CountableStats label={"Favourite processing"} countable={props.processingCount} />
        </div>

    )
}