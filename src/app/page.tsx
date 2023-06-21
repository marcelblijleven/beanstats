import HomeNavigation from "@/components/home-navigation";
import RatioCard from "@/components/ratio-card";
import BeanconquerorCard from "@/components/bc-card";
import {Button} from "@/components/ui/button";
import {Github} from "lucide-react";
import Link from "next/link";
import CardGrid from "@/components/ui/card-grid";
import Image from "next/image";

export default async function Home() {
    return (
        <>
            <HomeNavigation/>
            <div>
                <Image className={"block dark:hidden"} width={500} height={500} src={"/beanstats_img_light.png"} alt={"An illustration of coffee"} />
                <Image className={"hidden dark:block"} width={500} height={500} src={"/beanstats_img_dark.png"} alt={"An illustration of coffee"} />

            </div>
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
