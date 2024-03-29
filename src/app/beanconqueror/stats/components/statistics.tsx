import BacklogStats from "@/app/beanconqueror/stats/components/backlog-stats";
import CardStats from "@/app/beanconqueror/stats/components/card-stats";
import CountableStats from "@/app/beanconqueror/stats/components/countable-stats";
import CardGrid from "@/components/ui/card-grid";
import {type Statistics as BrewStatistics} from "@/lib/beanconqueror/statistics";

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
            <CardGrid>
                <CountableStats key={"fav-origins"} label={"Favourite origins"} countable={props.countryCount} />
                <CountableStats key={"fav-roasters-bags"} label={"Favourite roasters (bags)"} countable={props.roasterCount} />
                <CountableStats key={"fav-roasters-grams"} label={"Favourite roasters (grams)"} countable={props.roasterCountWeight} />
                <CountableStats key={"fav-variety"} label={"Favourite variety"} countable={props.varietyCount} />
                <CountableStats key={"fav-processing"} label={"Favourite processing"} countable={props.processingCount} />
                <CountableStats key={"fav-grinder"} label={"Favourite grinder"} countable={props.brewsPerGrinder} mapping={props.grinderMapping} />
                <CountableStats key={"fav-prep"} label={"Favourite preparation method"} countable={props.brewsPerPreparationMethod} mapping={props.preparationMapping} />
            </CardGrid>
        </div>

    );
}