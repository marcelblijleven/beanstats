import {H1} from "@/components/text";

const Hero = () => {
    return (
        <div className={"flex flex-col items-center w-full max-w-3xl space-y-6"}>
            <H1>
                Coffee tools and visualisation with&nbsp;
                <span className={"gradient-text"}>Beanstats</span>
            </H1>
        </div>
    );
}

export default Hero;