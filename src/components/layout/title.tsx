export function Title({title, subtitle}: {title: string, subtitle: string}) {
    return (
        <section className={"space-y-0.5"}>
            <h1 className={"text-3xl md:text-5xl font-bold tracking-tight"}>{title}</h1>
            <h2 className={"max-w-[540px] text-base md:text-lg text-muted-foreground"}>{subtitle}</h2>
        </section>
    )
}