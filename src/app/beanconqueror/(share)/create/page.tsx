import Form from "@/components/forms/bean-information-form/form";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Share link",
    description: "Create a Beanconqueror (share) link using this webform",
    openGraph: {
        title: "Create a (share) link",
        description: "Create Beanconqueror (share) link using this webform",
        images: ["/beanconqueror_logo.png"],
    },
}

export default function CreateShareLinkPage() {
    return (
        <div className={"flex flex-col items-center w-full max-w-3xl space-y-4"}>
            <h1 className={"text-4xl md:text-6xl font-bold text-center"}>
                Create a <span className={"gradient-text"}>Beanconqueror</span> share url
            </h1>
            <Form />
        </div>
    )
}