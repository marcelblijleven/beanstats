import {eq} from "drizzle-orm";
import {createInsertSchema, createSelectSchema} from "drizzle-zod";
import {z} from 'zod';

import {db} from "@/db/index";
import {users} from "@/db/schema";

const insertUserSchema = createInsertSchema(users);
const selectUserSchema = createSelectSchema(users);

type InsertUser = z.infer<typeof insertUserSchema>;
type SelectUser = z.infer<typeof selectUserSchema>;

/**
 * Uses the provided Clerk id to delete a user from the database
 */
export async function deleteUserByClerkId(clerkId: string) {
    await db.delete(users).where(eq(users.clerkId, clerkId));
}

/**
 * Retrieve user from database using the Clerk ID
 * @param clerkId
 */
export async function getUserByClerkId(clerkId: string): Promise<SelectUser | undefined> {
    return await db.query.users.findFirst({
        where: eq(users.clerkId, clerkId)
    });
}

/**
 * Creates a user with the provided data, it then tries to retrieve the
 * user from the database and returns it
 */
export async function createUser(user: InsertUser): Promise<SelectUser | undefined> {
    const data = insertUserSchema.parse(user);

    await db.insert(users).values(data);

    return await getUserByClerkId(data.clerkId);
}
