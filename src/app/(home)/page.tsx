import Image from "next/image";
import Link from "next/link";
import {BeanconquerorUsp} from "@/components/home/usp";

export default function Home() {
  return (
    <div className={"flex flex-col items-center"}>
      <section className={"text-center max-w-xl space-y-6"}>
        <h1 className={"text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-balance"}>
          Keep track of your <span className={"text-primary"}>coffee</span> backlog.
        </h1>
        <p className={"max-w-prose sm:text-lg text-gray-700 dark:text-gray-200"}>
          Do more with your coffee stats with Beanstats. Visualise your coffee data, track your
          purchases and coffee backlog.
        </p>
        <div className={"flex gap-4 justify-center items-center"}>
          <Link
            className={"relative flex items-center gap-2 font-semibold rounded-full outline outline-gray-200 py-1 px-5 shadow hover:bg-primary-foreground hover:text-primary"}
            href={"/beanconqueror/wrapped/2023"}>
            View Wrapped 2023
            <div className="relative flex h-3 w-3">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
          </Link>
          <Link
              className={"font-semibold hover:text-primary"}
              href={"/dashboard"}
          >
              Get started <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <div className={"my-4"}>
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
      <section className={"flex flex-col items-center gap-y-6 text-center"}>
        <h3 className={"font-bold tracking-tight leading-none text-xl md:text-2xl mt-20"}>Beanconqueror</h3>
        <p className={"max-w-lg sm:text-lg text-gray-700 dark:text-gray-200"}>
          Beanstats extends Beanconqueror and makes it easy to enter data, visualise data and share bean entries
        </p>
        <BeanconquerorUsp />
      </section>
    </div>
  );
}
