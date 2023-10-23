import {createSelectSchema} from "drizzle-zod";
import {type z} from "zod";

import {cafeBrews} from "@/db/schema";

function DetailItem({label, value}: { label: string, value: string }) {
    return (
        <div className={"flex flex-col gap-1"}>
            <span className={"text-sm text-muted-foreground font-semibold"}>{label}</span>
            <span className={""}>{value}</span>
        </div>
    )
}

const selectSchema = createSelectSchema(cafeBrews);

export type BrewDetailProps = {
    brew: Partial<z.infer<typeof selectSchema>>
}

export function BrewDetail({brew}: BrewDetailProps) {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-[900px]"}>
            <section className={"space-y-2"}>
                <h3 className={"font-bold text-lg"}>Details</h3>
                <div className={"grid grid-cols-2 gap-2 max-w-md"}>
                    <DetailItem label={"Type"} value={brew.type ?? "-"}/>
                    <DetailItem label={"Date"} value={brew.date ?? "-"}/>
                    <DetailItem label={"Price"} value={brew.price ?? "-"}/>
                    <DetailItem label={"Rating"} value={brew.rating?.toString() + "/5" ?? "-"}/>
                </div>
            </section>
            <section className={"space-y-2"}>
                <h3 className={"font-bold text-lg"}>Coffee</h3>
                <div className={"grid grid-cols-2 gap-2 max-w-md"}>
                    <DetailItem label={"Variety"} value={brew.coffeeVariety ?? "-"}/>
                    <DetailItem label={"Origin"} value={brew.coffeeOrigin ?? "-"}/>
                </div>
            </section>
            <section className={"space-y-2"}>
                <h3 className={"font-bold text-lg"}>Cafe</h3>
                <div className={"grid grid-cols-2 gap-2 max-w-md"}>
                    <DetailItem label={"Name"} value={brew.cafe ?? "-"}/>
                    <DetailItem label={"City"} value={brew.cafeCity ?? "-"}/>
                    <DetailItem label={"Country"} value={brew.cafeCountry ?? "-"}/>
                </div>
            </section>
            <section className={"space-y-2"}>
                <h3 className={"font-bold text-lg"}>Notes</h3>
                <p>{brew.notes ?? "-"}</p>
            </section>
        </div>
    )
}