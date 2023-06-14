import HomeNavigation from "@/components/home-navigation";
import RatioCard from "@/components/ratio-card";
import BeanconquerorCard from "@/components/bc-card";
import {Button} from "@/components/ui/button";
import {Github} from "lucide-react";
import Link from "next/link";
import CardGrid from "@/components/ui/card-grid";

export default async function Home() {
    return (
        <>
            <HomeNavigation/>
            <CardGrid>
                <BeanconquerorCard/>
                <RatioCard/>
            </CardGrid>
            <Link href={"https://www.github.com/marcelblijleven/beanstats"}>
                <Button variant={"secondary"}>
                    <Github/>
                    <span className={"hidden md:inline-block"}>View on GitHub</span>
                </Button>
            </Link>
        </>
    )
}
