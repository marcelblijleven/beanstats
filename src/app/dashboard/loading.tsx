import {Button} from "@/components/ui/button";
import {StatsCardSectionSkeleton} from "@/app/dashboard/components/stats-card-section";

export default function Loading() {
    return (
        <>
            <section>
                <div className={"space-x-2"}>
                    <Button disabled className={"hidden md:inline-block"}>Add coffee</Button>
                    <Button disabled className={"hidden md:inline-block"}>Add brew</Button>
                    <Button disabled className={"hidden md:inline-block"}>Add cafe brew</Button>
                    <Button disabled size={"sm"} className={"inline-block md:hidden"}>Add coffee</Button>
                    <Button disabled size={"sm"} className={"inline-block md:hidden"}>Add brew</Button>
                    <Button disabled size={"sm"} className={"inline-block md:hidden"}>Add cafe brew</Button>
                </div>
            </section>
            <StatsCardSectionSkeleton />
        </>
    )
}
