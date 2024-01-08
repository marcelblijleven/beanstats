import {type Metadata} from "next";

import {ShortLinkForm} from "@/components/beanconqueror/share/shorten/form";
import PageShell from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Shorten Beanconqueror link",
  description: "Shorten a Beanconqueror (share) link",
  openGraph: {
    title: "Shorten a (share) link",
    description: "Shorten a Beanconqueror (share) link",
    images: ["/beanconqueror_logo.png"],
  },
};

export default function CreateShareLinkPage() {
return (
  <PageShell>
    <h1 className={"text-4xl md:text-6xl font-bold text-center"}>
      Shorten a <span className={"gradient-text"}>Beanconqueror</span> share link
    </h1>
    <p className={"text-center"}>
      This form creates a shorter and easier-to-share Beanconqueror share link.
    </p>
    <ShortLinkForm />
  </PageShell>
);
}