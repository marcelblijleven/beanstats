"use server"

import {currentUser} from "@clerk/nextjs";
import {type User} from "@clerk/nextjs/api";
import {and, eq} from "drizzle-orm";
import {createInsertSchema} from "drizzle-zod";
import {type z} from "zod";

import {formSchema, type Inputs, updateFormSchema, type UpdateInputs} from "@/app/coffee/actions/coffee-form/form-schema";
import {db} from "@/db";
import {beans, beanVarieties, roasters} from "@/db/schema";

const insertBean = createInsertSchema(beans);
const insertVariety = createInsertSchema(beanVarieties);

/**
 * Get a roaster by roaster name and user id.
 * Returns the id of the roaster
 */
async function getRoastersByNameAndUserId(name: string, userId: number) {
    return db
        .select({id: roasters.id})
        .from(roasters)
        .where(and(eq(roasters.name, name), eq(roasters.userId, userId)));
}

/**
 * Get or create a roaster by roaster name and user id.
 * Returns the id of the roaster
 */
async function getOrCreateRoaster(name: string, userId: number) {
    const result = await getRoastersByNameAndUserId(name, userId);

    if (!!result.length) return result[0].id;

    await db.insert(roasters).values({name: name, userId: userId});

    const newResult = await getRoastersByNameAndUserId(name, userId);

    return newResult[0].id;
}

async function performInsert(beanData: Inputs, varieties: Array<Partial<z.infer<typeof insertVariety>>>) {
    return db.transaction(async (tx) => {
        const bean = insertBean.parse(beanData);
        const result = await tx.insert(beans).values(bean);
        const beanId =  parseInt(result.insertId);

        if (!beanId) {
            tx.rollback();
            throw new Error("Something went wrong while adding beans, invalid id")
        }

        const insertVarieties = varieties.map(entry => {
            return insertVariety.parse({...entry, beanId});
        });

        if (insertVarieties.length) {
            await tx.insert(beanVarieties).values(insertVarieties);
        }

        const [beanSelect] = await tx.select({publicID: beans.publicId}).from(beans).where(
            eq(beans.id, beanId)
        )
        return beanSelect.publicID
    })
}

async function performUpdate(bean: Partial<UpdateInputs>, varieties: Array<Partial<z.infer<typeof insertVariety>>>) {
    return db.transaction(async (tx) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore:
        await tx.update(beans).set(bean).where(
            and(
                eq(beans.publicId, bean.publicId!),
                eq(beans.userId, bean.userId!),
            )
        );

        const [beanSelect] = await tx.select({id: beans.id}).from(beans).where(
            eq(beans.publicId, bean.publicId!)
        );

        for (const variety of varieties ?? []) {
            variety.beanId = beanSelect.id;
            if (!variety.id) {
                await tx.insert(beanVarieties).values(variety as z.infer<typeof insertVariety>);
            } else {
                await tx.update(beanVarieties).set(variety).where(
                    eq(beanVarieties.id, variety.id )
                );
            }
        }

        return bean.publicId;
    });
}


async function submitData(values: Partial<Inputs>) {
    const {
        varieties,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        roaster,
        ...bean
    } = values;

    if (!!values.publicId) {
        return await performUpdate(bean, varieties as Array<Partial<z.infer<typeof insertVariety>>>);
    }

    return await performInsert(bean as Inputs, varieties as Array<Partial<z.infer<typeof insertVariety>>>);

}

/**
 * Checks if the roaster id in values is not null, if it is null
 * it will fetch the roaster id by name
 */
async function getRoasterId(values: Partial<Inputs>, userId: number) {
    if (values.roaster === undefined) {
        // This means the roaster field wasn't changed on edit,
        // so we can ignore the roaster
        return null;
    }

    if (!!values.roasterId) return values.roasterId;

    return await getOrCreateRoaster(values.roaster , userId);
}

function parseInputs(values: Partial<Inputs> | Partial<UpdateInputs>) {
    if (!!values.publicId) {
        // If a public id is provided, it is probably an update
        return updateFormSchema.safeParse(values);
    }

    return formSchema.safeParse(values);
}

export async function submitCoffeeForm(values: Partial<Inputs> | Partial<UpdateInputs>) {
    const user: User | null = await currentUser();

    if (!user) {
        return {success: false, error: "Not authenticated"}
    }

    const userId = user.publicMetadata.databaseId as number;

    // First get the roaster id by the roaster name
    const roasterId = await getRoasterId(values, userId);

    // Then modify the values, so varieties becomes an array of varieties instead of an object
    // and roaster id and user id are added
    const modifiedValues = {
        ...values,
        userId,
    };

    if (roasterId !== null) modifiedValues.roasterId = roasterId;
    if (modifiedValues.varieties) modifiedValues.varieties = Object.values(values.varieties ?? {})

    const result= parseInputs(modifiedValues);
    // Check for generic form errors
    if (!result.success) {
        return {success: false, error: result.error.message}
    }

    try {
        const publicId = await submitData(modifiedValues);
        return {success: true, error: null, publicId: publicId}
    } catch (e) {
        if (e instanceof Error) {
            return {success: false, error: e.stack}
        }

        return {success: false, error: "Could not complete bean submit"}
    }
}