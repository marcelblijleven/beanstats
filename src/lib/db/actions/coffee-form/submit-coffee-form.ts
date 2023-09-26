"use server"

import {formSchema, Inputs} from "@/lib/db/actions/coffee-form/form-schema";
import {User} from "@clerk/nextjs/api";
import {currentUser} from "@clerk/nextjs";
import {db} from "@/db";
import {beans, beanVarieties, roasters} from "@/db/schema";
import {and, eq} from "drizzle-orm";
import {createInsertSchema} from "drizzle-zod";

const insertBean = createInsertSchema(beans);
const insertVariety = createInsertSchema(beanVarieties);

function handleTimezoneOffset(date: Date | undefined | null) {
    if (!date) return date;

    // 60000 to convert to ms
    const timezoneOffset = -1 * date.getTimezoneOffset() * 60000;

    return new Date(date.getTime() + timezoneOffset);
}


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

async function addBean(data: {[p: string]: unknown}) {
    const parse = insertBean.safeParse(data);
    console.log("Parsa!", parse)
    if (!parse.success) throw new Error(parse.error.message);

    const bean = parse.data;
    const result = await db.insert(beans).values(bean);
    console.log("I added bean, this is result:", JSON.stringify(result))
    return result.insertId;
}

async function addVarieties(data: Array<{[p: string]: unknown}>, beanId: number) {
    console.log("varieties", typeof data, data)
    const varieties = data.map(entry => {
        const parse = insertVariety.safeParse({...entry, beanId});

        if (!parse.success) throw new Error(parse.error.message);

        return parse.data;
    });

    await db.insert(beanVarieties).values(varieties);
}


async function submitData(values: Partial<Inputs>, roasterId: number, userId: number) {
    const {
        varieties,
        roaster,
        publicUserId,
        ...bean
    } = values;

    return db.transaction(async (tx) => {
        const beanId = await addBean({...bean, roasterId, userId});

        if (!varieties?.length) return;



        await addVarieties(varieties, parseInt(beanId));
    })
}

export async function submitCoffeeForm(values: Partial<Inputs>) {
    const user: User | null = await currentUser();

    if (!user) {
        return {success: false, error: "Not authenticated"}
    }
    const userId = user.publicMetadata.databaseId as number;

    // First get the roaster id by the roaster name
    const roasterId = await getOrCreateRoaster(values.roaster as string, userId);

    // Then modify the values, so varieties becomes an array of varieties instead of an object
    // and roaster id and user id are added
    const modifiedValues = {
        ...values,
        roasterId,
        userId,
        roastDate: handleTimezoneOffset(values.roastDate),
        buyDate: handleTimezoneOffset(values.buyDate),
        varieties: Object.values(values.varieties || {}),
    };

    const result = formSchema.safeParse(modifiedValues);

    // Check for generic form errors
    if (!result.success) {
        return {success: false, error: result.error.message}
    }

    try {
        await submitData(modifiedValues, roasterId, userId);
    } catch (e) {
        if (e instanceof Error) {
            return {success: false, error: e.toString()}
        }

        return {success: false, error: "Could not complete bean submit"}
    }

    // revalidatePath("/coffee")
    return {success: true, error: null}
}