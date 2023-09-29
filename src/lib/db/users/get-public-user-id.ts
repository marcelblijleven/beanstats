import { cache } from "react";
import {eq} from "drizzle-orm";

import {db} from "@/db";
import {users} from "@/db/schema";

export const revalidate = 3600;

export const getPublicUserId = cache(async (userId: number)=> {
    if (!userId) return

    const result = await db
        .select({publicId: users.publicId})
        .from(users)
        .where(eq(users.id, userId));

    return result[0].publicId;
});
