import {getChangelog} from "@/lib/versioning/utils";
import ReactMarkdown from 'react-markdown'
import {H1, H2, H3} from "@/components/text";
import PageShell from "@/components/layout/page-shell";

export default async function ChangelogPage() {
    const changelog = await getChangelog();

    return (
        <PageShell>
            <ReactMarkdown
                className={"space-y-4"}
                components={{
                    h1: ({node, ...props}) => (
                        <H1 className={"gradient-text mb-6 overflow-visible"}>{props.children}</H1>
                    ),
                    h2: ({node, ...props}) => (
                        <H2>{props.children}</H2>
                    ),
                    h3: ({node, ...props}) => (
                        <H3>{props.children}</H3>
                    ),
                    a: ({node, ...props}) => (
                        <a className={"underline text-blue-400"} href={props.href!}>{props.children[0]}</a>
                    ),
                    ul: ({node, ...props}) => (
                        <ul className={"list-disc list-inside"}>{props.children}</ul>
                    )

                }}
            >
                {changelog}
            </ReactMarkdown>
        </PageShell>
    )
}