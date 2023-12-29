import Link from "next/link";

import RatioCard from "@/components/ratio-card";
import {H2} from "@/components/text";
import {cn} from "@/lib/utils";

export interface ToolsSectionProps {
    className?: string;
}

//
const ToolsSection = ({className}: ToolsSectionProps) => (
    <section className={cn("space-y-4", className)}>
        <H2>Tools</H2>
        <p>
            A collection of coffee related tools. More to come, if you have any ideas or suggestions please
            create an issue at the <Link
            className={"underline"}
            href={"https://www.github.com/marcelblijleven/beanstats"}
        >
            Github page
        </Link>
        </p>
        <section className={"flex justify-center"}>
            <RatioCard/>
        </section>
    </section>
);

export default ToolsSection;