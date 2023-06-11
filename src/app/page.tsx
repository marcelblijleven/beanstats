import HomeNavigation from "@/components/home-navigation";
import RatioCard from "@/components/ratio-card";
import BeanconquerorCard from "@/components/bc-card";
import {Button} from "@/components/ui/button";
import {Github} from "lucide-react";
import Link from "next/link";

export default async function Home() {
    return (
        <main className="flex h-full flex-col items-center p-6 md:p-24 space-y-6">
            <HomeNavigation/>
            <BeanconquerorCard/>
            <RatioCard/>
            <Link href={"https://www.github.com/marcelblijleven/beanstats"}>
                <Button variant={"secondary"}>
                    <Github/>
                    <span className={"hidden md:inline-block"}>View on GitHub</span>
                </Button>
            </Link>
        </main>
    )
}
