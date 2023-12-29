import {type Metadata} from "next";

import {ViewLinkContainer} from "@/components/beanconqueror/share/view/view-link-container";
import PageShell from "@/components/layout/page-shell";

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
        <PageShell>
            <h1 className={"text-4xl md:text-6xl font-bold text-center"}>
                Paste a <span className={"gradient-text"}>Beanconqueror</span> share url to view its content
            </h1>
            <ViewLinkContainer />
        </PageShell>
    );
}
