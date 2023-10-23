import {AlertTriangle} from "lucide-react";
import Link from 'next/link'

import PageShell from "@/components/layout/page-shell";
import {H1} from "@/components/text";

export default function NotFound() {
    return (
        <PageShell>
            <H1 className={"gradient-text"}>Not Found :(</H1>
            <AlertTriangle className={"text-amber-700 h-12 w-12"} />
            <p className={"font-medium"}>Could not find the page you&apos;re looking for..</p>
            <p>
                View <Link className={"underline text-amber-500"} href="/">home page</Link>
            </p>
        </PageShell>
    )
}