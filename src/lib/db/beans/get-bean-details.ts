import {and, eq, or} from "drizzle-orm";
import {createSelectSchema} from "drizzle-zod";
import {z} from "zod";

import {db} from "@/db";
import {beans, beanVarieties, freezeEntries, roasters} from "@/db/schema";

const roasterSchema = createSelectSchema(roasters);
const varietiesSchema = createSelectSchema(beanVarieties);
const selectSchema = createSelectSchema(beans).extend({
    roaster: roasterSchema,
    varieties: z.array(varietiesSchema),
});
const selectWithFreezeEntriesSchema = selectSchema.extend({
    freezeEntries: z.array(createSelectSchema(freezeEntries)),
})


type SelectBean = Omit<z.infer<typeof selectSchema>, "id">;
type SelectBeanWithFreezeEntries = Omit<z.infer<typeof selectWithFreezeEntriesSchema>, "id">;

/**
 * Uses the public id to retrieve bean information from the database
 * User id must match the user id of the bean, or isPublic must be true
 */
export async function getBeanDetails(publicId: string, userId: number | undefined): Promise<SelectBean | undefined> {
    const where = userId ? and(
            eq(beans.publicId, publicId),
            or(eq(beans.userId, userId), eq(beans.isPublic, true))) :
        and(eq(beans.publicId, publicId), eq(beans.isPublic, true))

    const bean = await db.query.beans.findFirst({
        where: where,
        with: {
            varieties: true,
            roaster: true,
        },
    });

    if (!bean) return bean;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {id, ...rest} = bean;

    return rest as unknown as SelectBean;
}

export async function getBeanDetailsWithFreezeEntries(publicId: string, userId: number | undefined): Promise<SelectBeanWithFreezeEntries | undefined> {
    const where = userId ? and(
            eq(beans.publicId, publicId),
            or(eq(beans.userId, userId), eq(beans.isPublic, true))) :
        and(eq(beans.publicId, publicId), eq(beans.isPublic, true))

    const bean = await db.query.beans.findFirst({
        where: where,
        with: {
            varieties: true,
            roaster: true,
            freezeEntries: true,
        },
    });

    if (!bean) return bean;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {id, ...rest} = bean;

    for (const entry of rest.freezeEntries) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {freezeEntries, ...beanReference} = bean;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: figure out exact typing later
        entry.bean = beanReference;
    }

    return {...rest, bean} as unknown as SelectBeanWithFreezeEntries;
}

export async function getCoffeeIdsForUsers(userId: number): Promise<{ publicId: string | null, name: string }[]> {
    return db.select({
        publicId: beans.publicId,
        name: beans.name
    }).from(beans).where(and(eq(beans.userId, userId), eq(beans.isArchived, false)));
}