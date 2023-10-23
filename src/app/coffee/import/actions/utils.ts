import {format} from "date-fns";
import {and, eq, isNotNull, sql} from "drizzle-orm";
import {createInsertSchema} from "drizzle-zod";
import {type z} from "zod";

import {db} from "@/db";
import {beans, beanVarieties, roasters} from "@/db/schema";
import {generateNanoid} from "@/db/utils";
import {type BCData, type Bean} from "@/types/beanconqueror";


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

export async function importBeanconquerorBean(data: Bean, roasterMapping: Record<string, number>, userId: number) {
    const formatStr = "yyyy-MM-dd";

    const bean: InsertBean = {
        name: data.name,
        roastDate: data.roastingDate ? format(new Date(data.roastingDate), formatStr) : null,
        buyDate: data.buyDate ? format(new Date(data.buyDate), formatStr) : null,
        externalId: data.config.uuid,
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

    return db.transaction(async tx => {
        const result = await tx.insert(beans).values(bean);
        const beanId = parseInt(result.insertId);

        if (!beanId) {
            tx.rollback()
            return false;
        }

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
        return true;
    });
}

async function importRoasters(data: Iterable<string>, userId: number) {
    const values: string[] = Array.from(data).map(entry => {
        return `(${userId}, '${generateNanoid()}', '${entry.replaceAll("'", "\\'").replaceAll('"', '\\"')}')`
    });
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

async function getExistingExternalIds(userId: number) {
    const result = await db
        .select({externalId: beans.externalId})
        .from(beans)
        .where(and(eq(beans.userId, userId), isNotNull(beans.userId)));

    return result.map(item => item.externalId!);
}

export async function importBeans(data: BCData, userId: number) {
    const roasters = getRoastersFromData(data);
    const roasterMapping = await importRoasters(roasters, userId);
    const existingExternalIds = await getExistingExternalIds(userId);

    const totalBeans = data.BEANS.length;
    let skippedBeans = 0;
    let abortedBeans = 0;

    for (const bean of data.BEANS) {
        if (existingExternalIds.includes(bean.config.uuid)) {
            skippedBeans += 1;
            continue
        }

        const result = await importBeanconquerorBean(bean, roasterMapping, userId);

        if (!result) {
            abortedBeans += 1;
        }
    }

    return {totalBeans, skippedBeans, abortedBeans}
}