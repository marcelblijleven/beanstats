import {type Metadata} from "next";

import {ShortenContainer} from "@/components/beanconqueror/share/shorten/shorten-link-container";

export const metadata: Metadata = {
    title: "Shorten Beanconqueror link",
    description: "Shorten a Beanconqueror (share) link using this Beanlink",
    openGraph: {
        title: "Shorten a (share) link",
        description: "Shorten a Beanconqueror (share) link using Beanlink",
        images: ["/beanconqueror_logo.png"],
    },
};

export default function CreateShareLinkPage() {
    return (
      <div className={"flex flex-col items-center"}>
        <section className={"text-center max-w-xl space-y-6"}>
          <h1 className={"text-4xl md:text-6xl font-bold text-center"}>
            Shorten a <span className={"gradient-text"}>Beanconqueror</span> share link
          </h1>
          <p className={"text-center"}>
            This form uses Beanlink to shorten a Beanconqueror share link.
          </p>
        </section>
        <div className={"w-full my-6"}>
          <ShortenContainer link={null}  />
        </div>
      </div>

    );
}