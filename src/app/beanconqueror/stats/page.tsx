"use client";

import {StatsContainer} from "@/components/beanconqueror/stats/StatsContainer";
import PageShell from "@/components/layout/page-shell";

export default function BeanconquerorPage() {
    return (
        <PageShell>
            <h1 className={"text-4xl md:text-6xl font-bold text-center"}>
                <span className={"gradient-text"}>Upload</span> a Beanconqueror file to view your data
            </h1>
            <p className={"text-lg text-center max-w-2xl"}>
                Use the select file button below and search for your Beanconqueror.json file.
            </p>
            <StatsContainer />
        </PageShell>
    );
}
