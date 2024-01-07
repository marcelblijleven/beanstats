import {type Metadata} from "next";

import {ViewLinkContainer} from "@/components/beanconqueror/share/view/view-link-container";

export const metadata: Metadata = {
    title: "View link",
    description: "View the contents of a Beanconqueror (share) link",
    openGraph: {
        title: "View link",
        description: "View the contents of a Beanconqueror (share) link",
        images: ["/beanconqueror_logo.png"],
    },
};

export default function ViewLinkPage() {
    return (
      <div className={"flex flex-col items-center"}>
        <section className={"text-center max-w-xl space-y-6"}>
          <h1 className={"text-4xl md:text-6xl font-bold text-center"}>
            View <span className={"gradient-text"}>Beanconqueror</span> share link contents
          </h1>
          <p className={"text-center"}>
            Paste a Beanconqueror share link to view its content
          </p>
        </section>
        <div className={"w-full my-6"}>
          <ViewLinkContainer />
        </div>
      </div>
    );
}
