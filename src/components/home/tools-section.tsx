import {H2} from "@/components/text";
import Link from "next/link";
import RatioCard from "@/components/ratio-card";

const ToolsSection = () => (
    <section className={"space-y-4"}>
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
        <section>
            <RatioCard/>
        </section>
    </section>
)

export default ToolsSection