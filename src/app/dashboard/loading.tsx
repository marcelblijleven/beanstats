import {Button} from "@/components/ui/button";
import {StatsCardSectionSkeleton} from "@/app/dashboard/components/stats-card-section";

export default function Loading() {
    return (
        <>
            <section>
                <div
                    aria-hidden='true'
                    className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 opacity-20'>
                    <div
                        style={{
                            clipPath:
                                'polygon(17% 12%, 8% 11%, 0% 11%, 0% 20%, 0% 33%, 11% 35%, 17% 42%, 19% 50%, 12% 53%, 12% 62%, 10% 74%, 4% 78%, 4% 83%, 4% 99%, 18% 99%, 30% 95%, 31% 81%, 48% 73%, 63% 72%, 66% 80%, 67% 87%, 74% 93%, 83% 97%, 95% 96%, 99% 87%, 94% 74%, 86% 57%, 71% 42%, 78% 26%, 86% 15%, 95% 8%, 98% 4%, 94% 1%, 77% 0%, 67% 8%, 60% 22%, 49% 19%, 30% 18%)',
                        }}
                        className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#fc6b03] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                    />
                </div>
                <div className={"space-x-2"}>
                    <Button disabled className={"hidden md:inline-block"}>Add coffee</Button>
                    <Button disabled className={"hidden md:inline-block"}>Add cafe brew</Button>
                    <Button disabled className={"hidden md:inline-block"}>Add brew</Button>
                    <Button disabled size={"sm"} className={"inline-block md:hidden"}>Add coffee</Button>
                    <Button disabled size={"sm"} className={"inline-block md:hidden"}>Add cafe brew</Button>
                    <Button disabled size={"sm"} className={"inline-block md:hidden"}>Add brew</Button>
                </div>
            </section>
            <StatsCardSectionSkeleton />
        </>
    )
}
