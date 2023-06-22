import ViewLink from "@/app/beanconqueror/share/view/components/view-link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "View link",
    description: "View the contents of a Beanconqueror share link",
    openGraph: {
        title: "View link",
        description: "View the contents of a Beanconqueror share link",
        images: ["/beanconqueror_logo.png"],
    },
}

export default function ViewLinkPage() {
    return (
        <div className={"flex flex-col items-center w-full max-w-5xl space-y-4"}>
            <h1 className={"text-4xl md:text-6xl font-bold text-center"}>
                Paste a <span className={"gradient-text"}>Beanconqueror</span> share url to view its content
            </h1>
            <ViewLink />
        </div>
    )
}
