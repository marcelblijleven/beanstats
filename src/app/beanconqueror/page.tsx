import PageShell from "@/components/layout/page-shell";
import BeanconquerorSection from "@/components/home/beanconqueror-section";

export default function BeanconquerorPage() {
    return (
        <PageShell className={"text-center"}>
            <h1 className={"max-w-3xl text-5xl font-extrabold md:text-6xl lg:text-7xl tracking-tight leading-none animate-in"}>
                Visualize your <span className={"text-primary"}>Beanconqueror</span> stats.
            </h1>
            <p className={"max-w-prose sm:text-lg text-slate-700 dark:text-slate-200"}>Beanstats lets you visualize your
                Beanconqueror stats, create or  view share links and easily enter data for Beanconqueror on your computer.</p>
            <div className={"my-12"}>
                <a
                    className={"font-semibold rounded-full outline outline-gray-200 py-1 px-5 shadow hover:bg-primary-foreground hover:text-primary"}
                    href={"https://www.beanconqueror.com"}
                    target={"_blank"}
                >
                    Click here to visit Beanconqueror
                </a>
            </div>

            <div className={"mb-12 text-left"}>
                <div className='relative isolate'>
                    <div
                        aria-hidden='true'
                        className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                        <div
                            style={{
                                clipPath:
                                    'polygon(17% 12%, 8% 11%, 0% 11%, 0% 20%, 0% 33%, 11% 35%, 17% 42%, 19% 50%, 12% 53%, 12% 62%, 10% 74%, 4% 78%, 4% 83%, 4% 99%, 18% 99%, 30% 95%, 31% 81%, 48% 73%, 63% 72%, 66% 80%, 67% 87%, 74% 93%, 83% 97%, 95% 96%, 99% 87%, 94% 74%, 86% 57%, 71% 42%, 78% 26%, 86% 15%, 95% 8%, 98% 4%, 94% 1%, 77% 0%, 67% 8%, 60% 22%, 49% 19%, 30% 18%)',
                            }}
                            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#fc6b03] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                        />
                    </div>

                    <div>
                        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                            <BeanconquerorSection/>
                        </div>
                    </div>
                </div>
            </div>
        </PageShell>
    )
}
