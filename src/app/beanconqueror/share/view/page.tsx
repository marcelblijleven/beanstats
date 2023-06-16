import ViewLink from "@/app/beanconqueror/share/view/components/view-link";

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
