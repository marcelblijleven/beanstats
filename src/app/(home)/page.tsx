import Link from "next/link";
import { BeanconquerorUsp } from "@/components/home/usp";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

function WrappedLink() {
  return (
    <Link
      className={
        "relative flex items-center gap-2 font-semibold rounded-full outline outline-gray-200 py-1 px-5 shadow hover:bg-primary-foreground hover:text-primary"
      }
      href={"/beanconqueror/wrapped/2023"}
    >
      View Wrapped 2023
      <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </div>
    </Link>
  );
}

function DBDeprecationNotice() {
    return (
        <Alert variant={"destructive"}>
            <AlertTitle>Database deprecation</AlertTitle>
            <AlertDescription>
                A change in the pricing strategy of the database provider increased the costs of hosting Beanstats by several
                hundreds of dollars, making it impossible to keep providing the database related functionalities of Beanstats free of charge.
                Therefor these functionalities had to be removed from Beanstats.

                Contact me if you need an export of your data.
            </AlertDescription>
        </Alert>
    )
}

export default function Home() {
  return (
    <div className={"flex flex-col items-center"}>
      <section className={"text-center max-w-xl space-y-6"}>
        <h1
          className={
            "text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-balance"
          }
        >
          <span className={"text-primary"}>Beanstats</span>
        </h1>
      </section>
      <section className={"flex flex-col items-center gap-y-6 text-center"}>
        <p className={"max-w-lg sm:text-lg text-gray-700 dark:text-gray-200"}>
          Beanstats extends Beanconqueror and makes it easy to enter data,
          visualise data and share bean entries
        </p>
        <DBDeprecationNotice />
        <BeanconquerorUsp />
      </section>
    </div>
  );
}
