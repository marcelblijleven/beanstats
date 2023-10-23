import {DetailItem} from "@/components/detail-pages/detail-item";
import {type getFreezeEntry} from "@/lib/db/freeze-entries/get-freeze-entry";

type Details = Awaited<ReturnType<typeof getFreezeEntry>>

type PageProps = {
    entry: Details;
}


export function FreezeEntryDetail({entry}: PageProps) {
    if (!entry) return null;


    return (
        <>
            <section className={"space-y-2"}>
                <h3 className={"font-bold text-lg"}>Details</h3>
                <div className={"grid grid-cols-2 gap-2 max-w-md"}>
                    <DetailItem label={"Label"} value={entry.label ?? "-"}/>
                    <DetailItem label={"Freeze date"} value={entry.freezeDate ?? "-"}/>
                    <DetailItem label={"Freeze amount"} value={entry.weight ?? "-"}/>
                    <DetailItem label={"Is frozen"} value={entry.frozen ? "Yes" : "No"}/>
                </div>
            </section>
            <section>
                <h3 className={"font-bold text-lg"}>Notes</h3>
                <p className={"min-h-[300px] w-full md:w-1/2 rounded-lg outline outline-accent"}>{entry.notes ?? ""}</p>
            </section>
        </>
    )
}