import Hero from "@/components/hero";
import BeanconquerorSection from "@/components/home/beanconqueror-section";
import {Button} from "@/components/ui/button";
import {Github} from "lucide-react";
import Link from "next/link";
import CardGrid from "@/components/ui/card-grid";
import Image from "next/image";
import ToolsSection from "@/components/home/tools-section";

export default async function Home() {
    return (
        <>
            <Hero/>
            <div>
                <Image className={"block dark:hidden"} width={500} height={500} src={"/beanstats_img_light.png"} alt={"An illustration of coffee"} />
                <Image className={"hidden dark:block"} width={500} height={500} src={"/beanstats_img_dark.png"} alt={"An illustration of coffee"} />

            </div>
            <CardGrid>
                <BeanconquerorSection/>
                <ToolsSection />
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
