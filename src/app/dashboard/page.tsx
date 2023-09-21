import {Button} from "@/components/ui/button";
import {StatsCardSection} from "@/app/dashboard/components/stats-card-section";


export default async function DashboardPage() {
    return (
        <>
            <section>
                <div className={"space-x-2"}>
                    <Button className={"hidden md:inline-block"} disabled>Add coffee</Button>
                    <Button className={"hidden md:inline-block"} disabled>Add brew</Button>
                    <Button className={"hidden md:inline-block"} disabled>Add cafe brew</Button>
                    <Button size={"sm"} className={"inline-block md:hidden"} disabled>Add coffee</Button>
                    <Button size={"sm"} className={"inline-block md:hidden"} disabled>Add brew</Button>
                    <Button size={"sm"} className={"inline-block md:hidden"} disabled>Add cafe brew</Button>
                </div>
            </section>
            <StatsCardSection />
        </>
    )
}
