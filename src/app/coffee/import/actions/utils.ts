import {BCData, Bean} from "@/types/beanconqueror";
import {db} from "@/db";
import {beans, beanVarieties, roasters} from "@/db/schema";
import {eq, sql} from "drizzle-orm";
import {generateNanoid} from "@/db/utils";
import {createInsertSchema} from "drizzle-zod";
import {z} from "zod";
import {format} from "date-fns";
import {MySqlTransaction} from "drizzle-orm/mysql-core";

const insertBean = createInsertSchema(beans);
type InsertBean = z.infer<typeof insertBean>
const insertVariety = createInsertSchema(beanVarieties);
type InsertVariety = z.infer<typeof insertVariety>

export function getRoastersFromData(data: BCData) {
    const roasters = new Set<string>();

    for (const record of data.BEANS) {
        roasters.add(record.roaster);
    }

    return roasters.values()
}

export async function importBeanconquerorBean(data: Bean, roasterMapping: Record<string, number>, userId: number, tx: MySqlTransaction<any, any>) {
    const formatStr = "yyyy-MM-dd";

    const bean: InsertBean = {
        name: data.name,
        roastDate: data.roastingDate ? format(new Date(data.roastingDate), formatStr) : null,
        buyDate: data.buyDate ? format(new Date(data.buyDate), formatStr) : null,
        notes: data.note,
        weight: data.weight.toFixed(2),
        price: data.cost.toFixed(2),
        roasterId: roasterMapping[data.roaster],
        isPublic: false,
        isArchived: data.finished,
        isFinished: data.finished,
        userId: userId,
        rating: data.rating,
        roastedFor: data.roast.toString().toLowerCase(),
        created: new Date(data.config.unix_timestamp * 1000),
        modified: new Date(data.config.unix_timestamp * 1000),
    }

    const result = await tx.insert(beans).values({...bean, externalId: data.config.uuid}).onDuplicateKeyUpdate({
        set: bean
    });

    // Delete any varieties linked to the bean id so we can import varieties again without having to check for existing ids
    db.delete(beanVarieties).where(eq(beanVarieties.beanId, parseInt(result.insertId)))

    const varieties: InsertVariety[] = data.bean_information.map(info => {
        return {
            name: info.variety,
            processing: info.processing,
            country: info.country,
            region: info.region,
            farm: info.farm,
            farmer: info.farmer,
            elevation: info.elevation,
            beanId: parseInt(result.insertId),
        }
    });

    await tx.insert(beanVarieties).values(varieties);
}

async function importRoasters(data: Iterable<string>, userId: number) {
    const values: string[] = Array.from(data).map(entry => (`(${userId}, '${generateNanoid()}', '${entry}')`));

    await db.execute(
        sql.raw(`
            INSERT INTO roasters (roasters.user_id, roasters.public_id, roasters.name)
            VALUES ${values.join(", ")}
            ON DUPLICATE KEY UPDATE
            roasters.name = VALUES(roasters.name);
        `)
    );

    const result = await db.select({id: roasters.id, name: roasters.name}).from(roasters).where(eq(roasters.userId, userId));
    const mapping: Record<string, number> = {}

    for (const record of result) {
        mapping[record.name] = record.id;
    }

    return mapping;
}

export async function importBeans(data: BCData, userId: number) {
    console.log("importBeans")
    const roasters = getRoastersFromData(data);
    const roasterMapping = await importRoasters(roasters, userId);
    let idx = 0;
    await db.transaction(async (tx) => {
        for (const bean of data.BEANS) {
            console.log(++idx)
            // @ts-ignore
            await importBeanconquerorBean(bean, roasterMapping, userId, tx);
        }
    })
}