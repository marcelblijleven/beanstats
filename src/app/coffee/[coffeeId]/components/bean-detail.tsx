import {type getBeanDetailsWithFreezeEntries} from "@/lib/db/beans/get-bean-details";
import {createSelectSchema} from "drizzle-zod";
import {beanVarieties} from "@/db/schema";
import {type z} from "zod";
import {type FreezeEntry, FreezeEntryDataTable} from "@/components/overview-pages/freeze-entry-datatable";

// Figure out how to extract this from the Details type
const selectVariety = createSelectSchema(beanVarieties);

type Details = Awaited<ReturnType<typeof getBeanDetailsWithFreezeEntries>>

type BeanDetailProps = {
    bean: Details;
}

type VarietyDetailProps = {
    index: number;
    blend: boolean,
    variety: z.infer<typeof selectVariety>;
}

function DetailItem({label, value}: { label: string, value: string }) {
    return (
        <div className={"flex flex-col gap-1"}>
            <span className={"text-sm text-muted-foreground font-semibold"}>{label}</span>
            <span className={""}>{value}</span>
        </div>
    )
}

function VarietyDetail({variety, index, blend}: VarietyDetailProps) {
    return (
        <div className={"space-y-2"}>
            {blend && <h4 className={"font-semibold text-md"}>Variety {index + 1}</h4>}
            <div className={"grid grid-cols-1 gap-2 max-w-md"}>
                <DetailItem label={"Name"} value={variety.name ?? "-"}/>
            </div>
            <div className={"grid grid-cols-2 gap-2 max-w-md"}>
                <DetailItem label={"Country"} value={variety.country ?? "-"}/>
                <DetailItem label={"Region"} value={variety.region ?? "-"}/>
            </div>
            <div className={"grid grid-cols-2 gap-2 max-w-md"}>
                <DetailItem label={"Farm"} value={variety.farm ?? "-"}/>
                <DetailItem label={"Farmer"} value={variety.farmer ?? "-"}/>
            </div>
        </div>
    )
}

export function BeanDetail({bean}: BeanDetailProps) {
    if (!bean) return null;

    const isBlend = bean.varieties.length > 1;
    console.log(bean)
    return (
        <>
            <section className={"space-y-2"}>
                <h3 className={"font-bold text-lg"}>Details</h3>
                <div className={"grid grid-cols-2 gap-2 max-w-md"}>
                    <DetailItem label={"Roast date"} value={bean.roastDate ?? "-"}/>
                    <DetailItem label={"Purchase date"} value={bean.buyDate ?? "-"}/>
                </div>
                <div className={"grid grid-cols-2 gap-3 max-w-md"}>
                    <DetailItem label={"Weight"} value={bean.weight ?? "-"}/>
                    <DetailItem label={"Price"} value={bean.price ?? "-"}/>
                </div>
            </section>
            <section className={"space-y-2"}>
                <h3 className={"font-bold text-lg"}>{bean.varieties.length > 1 ? "Varieties": "Variety"}</h3>
                <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"}>
                    {bean.varieties.map((variety, idx) => (
                        <VarietyDetail key={variety.name} variety={variety} index={idx} blend={isBlend} />
                    ))}
                </div>
            </section>
            <section>
                <h3 className={"font-bold text-lg"}>Notes</h3>
                <p>{bean.notes ?? ""}</p>
            </section>
            <section>
                <FreezeEntryDataTable
                    data={bean.freezeEntries as FreezeEntry[]}
                    inlineHeader={<h3 className={"font-bold text-lg"}>Freeze entries</h3>}
                />
            </section>
        </>
    )
}