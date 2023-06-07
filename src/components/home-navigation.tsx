import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Github} from "lucide-react";

const HomeNavigation = () => (
    <div className={"flex flex-col items-center w-full max-w-3xl space-y-4"}>
        <h1 className={"text-4xl md:text-6xl font-bold text-center"}>
            Coffee tools and visualisation with&nbsp;
            <span className={"gradient-text"}>Beanstats</span>
        </h1>
        <div className={"flex align-middle gap-2"}>

            <Link href={"/upload"} passHref>
                <Button>Process bc file</Button>
            </Link>
            <Link href={"https://www.github.com/marcelblijleven/beanstats"}>
                <Button variant={"secondary"}>
                    <Github />
                    <span className={"hidden md:inline-block"}>View on GitHub</span>
                </Button>
            </Link>
        </div>
    </div>
);

export default HomeNavigation;