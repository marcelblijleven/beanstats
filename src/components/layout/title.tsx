export function Title({title, subtitle}: {title: string, subtitle: string}) {
    return (
        <section className={"space-y-2"}>
            <h1 className={"text-5xl font-bold"}>{title}</h1>
            <h2 className={"max-w-[540px] text-lg text-muted-foreground"}>{subtitle}</h2>
        </section>
    )
}