import ReactMarkdown from 'react-markdown';

import PageShell from "@/components/layout/page-shell";
import {H1, H2, H3} from "@/components/text";
import {getChangelog} from "@/lib/versioning/utils";

export default async function ChangelogPage() {
    const changelog = await getChangelog();

    return (
        <PageShell>
            <ReactMarkdown
                className={"space-y-4"}
                components={{
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    h1: ({node, ...props}) => (
                        <H1 className={"gradient-text mb-6 overflow-visible"}>{props.children}</H1>
                    ),
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    h2: ({node, ...props}) => (
                        <H2>{props.children}</H2>
                    ),
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    h3: ({node, ...props}) => (
                        <H3>{props.children}</H3>
                    ),
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    a: ({node, ...props}) => (
                        <a className={"underline text-blue-400"} href={props.href}>{props.children[0]}</a>
                    ),
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    ul: ({node, ...props}) => (
                        <ul className={"list-disc list-inside"}>{props.children}</ul>
                    )

                }}
            >
                {changelog}
            </ReactMarkdown>
        </PageShell>
    );
}