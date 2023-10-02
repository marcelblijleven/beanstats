import Image from "next/image";

import PageShell from "@/components/layout/page-shell";
import Link from "next/link";

export default function Home() {
    return (
        <PageShell className={"text-center"}>
            <h1 className={"max-w-3xl text-5xl font-extrabold md:text-6xl lg:text-7xl tracking-tight leading-none animate-in"}>
                Keep track of your <span className={"text-primary"}>coffee</span> backlog.
            </h1>
            <p className={"max-w-prose sm:text-lg text-slate-700 dark:text-slate-200"}>Beanstats lets you track your
                coffee backlog and provides visualization of your coffee stats.</p>
            <Link
                className={"font-semibold rounded-full outline outline-gray-200 py-1 px-5 shadow hover:bg-primary-foreground hover:text-primary"}
                href={"/dashboard"}>
                Get started
            </Link>
            <div className={"mb-12"}>
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
                            <div className='mt-16 flow-root sm:mt-24'>
                                <div
                                    className='-m-2 rounded-xl bg-gray-900/5 p-2 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                    <Image
                                        src={"/coffee-light.png"}
                                        height={800}
                                        width={1440}
                                        quality={100}
                                        className={"dark:hidden rounded-md bg-background p-2 sm:p-8 md:p-20"}
                                        alt={"Preview of coffee screen"}/>
                                    <Image
                                        src={"/coffee-dark.png"}
                                        height={800}
                                        width={1440}
                                        quality={100}
                                        className={"hidden dark:inline-flex rounded-md bg-background p-2 sm:p-8 md:p-20"}
                                        alt={"Preview of coffee screen"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={"space-y-2"}>
                <h3 className={"font-bold tracking-tight leading-none sm:text-xl mt-20"}>Beanconqueror</h3>
                <p className={"max-w-prose sm:text-lg text-slate-700 dark:text-slate-200"}>Want to visualize your Beanconqueror stats?</p>
                <Link className={"inline-block font-semibold rounded-full outline outline-gray-200 py-1 px-5 shadow hover:bg-primary-foreground hover:text-primary"} href={"/beanconqueror"}>View</Link>
            </section>
        </PageShell>
    )
}
