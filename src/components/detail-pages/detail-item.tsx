export function DetailItem({label, value}: { label: string, value: string }) {
    return (
        <div className={"flex flex-col gap-y-1"}>
            <span className={"text-sm text-muted-foreground font-semibold"}>{label}</span>
            <span className={""}>{value}</span>
        </div>
    );
}