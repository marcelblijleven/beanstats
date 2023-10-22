import {and, eq, or} from "drizzle-orm";
import {beans, beanVarieties, roasters} from "@/db/schema";
import {db} from "@/db";
import {createSelectSchema} from "drizzle-zod";
import {z} from "zod";

const roasterSchema = createSelectSchema(roasters);
const varietiesSchema = createSelectSchema(beanVarieties);
const selectSchema = createSelectSchema(beans).extend({
    roaster: roasterSchema,
    varieties: z.array(varietiesSchema),
});


type SelectBean = Omit<z.infer<typeof selectSchema>, "id">;

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

    const {id, ...rest} = bean;

    return rest as unknown as SelectBean;
}

export async function getCoffeeIdsForUsers(userId: number): Promise<{ publicId: string | null, name: string }[]> {
    return db.select({
        publicId: beans.publicId,
        name: beans.name
    }).from(beans).where(and(eq(beans.userId, userId), eq(beans.isArchived, false)));
}