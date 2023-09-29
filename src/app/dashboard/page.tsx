import {Button, buttonVariants} from "@/components/ui/button";
import {StatsCardSection} from "@/app/dashboard/components/stats-card-section";
import Link from "next/link";
import {cn} from "@/lib/utils";


export default async function DashboardPage() {
    return (
        <>
            <section>
                <div className={"justify-between items-center space-x-2"}>
                    <Link href={"/coffee/add"} className={cn(buttonVariants({variant: "default", size: "default"}), "hidden md:inline-flex")}>Add coffee</Link>
                    <Button className={"hidden md:inline-block"} disabled>Add brew</Button>
                    <Button className={"hidden md:inline-block"} disabled>Add cafe brew</Button>
                    <Link href={"/coffee/add"} className={cn(buttonVariants({variant: "default", size: "sm"}), "inline-flex md:hidden")}>Add coffee</Link>
                    <Button size={"sm"} className={"inline-block md:hidden"} disabled>Add brew</Button>
                    <Button size={"sm"} className={"inline-block md:hidden"} disabled>Add cafe brew</Button>
                </div>
            </section>
            <StatsCardSection />
        </>
    )
}
