import {and, eq, or} from "drizzle-orm";
import {cafeBrews} from "@/db/schema";
import {db} from "@/db";
import {createSelectSchema} from "drizzle-zod";
import {z} from "zod";

const selectSchema = createSelectSchema(cafeBrews);


type SelectBrew = Omit<z.infer<typeof selectSchema>, "id">;

/**
 * Uses the public id to retrieve brew information from the database
 * User id must match the user id of the brew, or isPublic must be true
 */
export async function getCafeBrewDetails(publicId: string, userId: number | undefined): Promise<SelectBrew | undefined> {
    const where = userId ? and(
            eq(cafeBrews.publicId, publicId),
            or(eq(cafeBrews.userId, userId), eq(cafeBrews.isPublic, true))) :
        and(eq(cafeBrews.publicId, publicId), eq(cafeBrews.isPublic, true))

    const brew = await db.query.cafeBrews.findFirst({
        where: where,
    });

    if (!brew) return undefined;

    const {id, ...rest} = brew;

    return rest as unknown as SelectBrew;
}