import Hero from "@/components/hero";
import BeanconquerorSection from "@/components/home/beanconqueror-section";
import {Button} from "@/components/ui/button";
import {Github} from "lucide-react";
import Link from "next/link";
import CardGrid from "@/components/ui/card-grid";
import Image from "next/image";
import ToolsSection from "@/components/home/tools-section";
import PageShell from "@/components/layout/page-shell";

function HeroImage({isDark}: {isDark?: boolean}) {
    const className = isDark ? "hidden dark:block": "block dark:hidden";
    const src = isDark ? "/beanstats_img_dark.png" : "/beanstats_img_light.png";

    return (
        <Image className={className} width={500} height={500} src={src} alt={"An illustration of coffee"} />
    )
}

export default async function Home() {
    return (
        <PageShell>
            <Hero/>
            <div>
                <HeroImage/>
                <HeroImage isDark />
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
        </PageShell>
    )
}
