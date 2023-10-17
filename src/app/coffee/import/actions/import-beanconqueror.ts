"use server"

import {readZipFile} from "@/lib/beanconqueror/upload/utils";
import {importBeans} from "./utils";
import {currentUser} from "@clerk/nextjs/server";

function checkFile(file: File) {
    const zipTypes = [
        "application/zip",
        "application/x-zip-compressed",
    ]

    if (!file.type || zipTypes.includes(file.type)) {
        // File type can be empty on Windows, apparently
        return true;
    }

    throw new Error(`invalid file type: ${file.type}`);
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

    const user = await currentUser();

    if (!user) {
        return {message: "not signed in", success: false}
    }

    const userId = user.publicMetadata.databaseId as number;

    try {
        checkFile(file);
        const data = await readZipFile(file);
        const importResult = await importBeans(data, userId);

        return {message: getResultMessage(importResult), success: true}
    } catch (e) {
        const message = e instanceof Error ? e.message : "unknown error occurred"
        return {message, success: false}
    }

}