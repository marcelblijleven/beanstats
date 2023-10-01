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




export async function importBeanconqueror(prevState: any, formData: FormData) {
    console.log(formData, "nasi")
    const file = formData.get("file") as File | null;

    if (!file) {
        return {message: "missing file"}
    }

    const user = auth();
    const clerkId = user.userId;

    if (!clerkId) {
        return {message: "missing user id"}
    }

    const [result] = await db.select({user_id: users.id}).from(users).where(eq(users.clerkId, clerkId))

    try {
        checkFile(file);
        const data = await readZipFile(file);
        await importBeans(data, result.user_id);
        return {message: "successfully imported"}
    } catch (e) {
        const message = e instanceof Error ? e.message : "unknown error occurred"
        return {message}
    }

}