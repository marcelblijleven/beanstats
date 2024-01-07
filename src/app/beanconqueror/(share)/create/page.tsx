import {type Metadata} from "next";

import Form from "@/components/forms/bean-information-form/form";

export const metadata: Metadata = {
  title: "Share link",
  description: "Create a Beanconqueror (share) link using this webform",
  openGraph: {
    title: "Create a (share) link",
    description: "Create Beanconqueror (share) link using this webform",
    images: ["/beanconqueror_logo.png"],
  },
};

export default function CreateShareLinkPage() {
  return (
    <div className={"flex flex-col items-center"}>
      <section className={"text-center max-w-xl space-y-6"}>
        <h1 className={"text-4xl md:text-6xl font-bold text-center"}>
          Create a <span className={"gradient-text"}>Beanconqueror</span> share url
        </h1>
      </section>
      <div className={"my-6"}>
        <Form/>
      </div>
    </div>
  );
}