import {Button} from "@/components/ui/button";
import {StatsCardSectionSkeleton} from "@/app/dashboard/components/stats-card-section";

export default function Loading() {
    return (
        <>
            <section>
                <div className={"space-x-2"}>
                    <Button disabled>Add coffee</Button>
                    <Button disabled>Add brew</Button>
                    <Button disabled>Add cafe brew</Button>
                </div>
            </section>
            <StatsCardSectionSkeleton />
        </>
    )
}
