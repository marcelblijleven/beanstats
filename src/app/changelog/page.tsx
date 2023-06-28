import {getChangelog} from "@/lib/markdown/get-changelog";
import ReactMarkdown from 'react-markdown'
import {H1, H2, H3} from "@/components/text";

export default async function ChangelogPage() {
    const changelog = await getChangelog();

    return (
        <div className={"w-full max-w-md"}>
            <ReactMarkdown
                className={"space-y-4"}
                components={{
                    h1: H1,
                    h2: H2,
                    h3: H3,
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
        </div>
    )
}