"use server"

import {readZipFile} from "@/lib/beanconqueror/upload/utils";
import {importBeans} from "./utils";
import {auth} from "@clerk/nextjs";
import {db} from "@/db";
import {users} from "@/db/schema";
import {eq} from "drizzle-orm";

function checkFile(file: File) {
    if (file.type === "application/zip") {
        return true;
    }

    throw new Error("invalid file type")
}

function getResultMessage(result: {totalBeans: number, abortedBeans: number, skippedBeans: number}): string {
    if (result.abortedBeans === 0 && result.skippedBeans === 0) {
        return `imported ${result.totalBeans} of ${result.totalBeans}`;
    }

    return `imported ${result.totalBeans - result.skippedBeans - result.abortedBeans} of ${result.totalBeans}. ` +
        `${result.skippedBeans} were skipped, ${result.abortedBeans} were aborted due to an error.`
}

export async function importBeanconqueror(prevState: any, formData: FormData) {
    const file = formData.get("file") as File | null;

    if (!file) {
        return {message: "missing file", success: false}
    }

    const user = auth();
    const clerkId = user.userId;

    if (!clerkId) {
        return {message: "missing user id", success: false}
    }

    const [result] = await db.select({user_id: users.id}).from(users).where(eq(users.clerkId, clerkId))
    console.log(result, clerkId, user)
    try {
        checkFile(file);
        const data = await readZipFile(file);
        const importResult = await importBeans(data, result.user_id);

        return {message: getResultMessage(importResult), success: true}
    } catch (e) {
        const message = e instanceof Error ? e.message : "unknown error occurred"
        return {message, success: false}
    }

}