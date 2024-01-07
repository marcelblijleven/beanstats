import {BeanconquerorUsp} from "@/components/home/usp";

export default function BeanconquerorPage() {
  return (
    <div className={"flex flex-col items-center"}>
      <section className={"text-center max-w-xl space-y-6 mb-8"}>
        <h1 className={"text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-balance"}>
          Visualize your <span className={"text-primary"}>Beanconqueror</span> stats.
        </h1>
        <p className={"max-w-prose sm:text-lg text-slate-700 dark:text-slate-200"}>Beanstats lets you visualize your
          Beanconqueror stats, create or view share links and easily enter data for Beanconqueror on your computer.
        </p>
        <div className={"my-12"}>
          <a
            className={"font-semibold rounded-full outline outline-gray-200 py-1 px-5 shadow hover:bg-primary-foreground hover:text-primary"}
            href={"https://www.beanconqueror.com"}
            target={"_blank"}
          >
            Click here to visit Beanconqueror
          </a>
        </div>
      </section>
      <BeanconquerorUsp/>
    </div>
  );
}
