"use server";

import {currentUser} from "@clerk/nextjs/server";

import {readZipFile} from "@/lib/beanconqueror/upload/utils";

import {importBeans, type Notify} from "./utils";
import {nanoid} from "nanoid";

/**
 * Checks if the file has the expected mime type
 * @param file
 */
function checkFile(file: File) {
    const zipTypes = [
        "application/zip",
        "application/x-zip-compressed",
    ];

    if (!file.type || zipTypes.includes(file.type)) {
        // File type can be empty on Windows, apparently
        return true;
    }

    throw new Error(`invalid file type: ${file.type}`);
}

/**
 * Parses the import result into a presentable message for the frontend
 * @param result
 */
function getResultMessage(result: Notify): string {
    if (result.abortedBeans.length === 0 && result.skippedBeans.length === 0 && result.invalidBeans.length === 0) {
        return `imported ${result.totalBeans} of ${result.totalBeans}`;
    }

    const importedBeans = result.totalBeans
      - result.skippedBeans.length
      - result.abortedBeans.length
      - result.invalidBeans.length;

    const message = [`Imported ${importedBeans} of ${result.totalBeans} beans.`];

    if (result.abortedBeans.length > 0) {
        message.push(`Aborted: ${result.abortedBeans.length} due to an error.`);
    }

    if (result.invalidBeans.length > 0) {
        message.push(`Skipped: ${result.invalidBeans.length} beans were invalid, possibly due to missing roaster name.`);
    }

    if (result.skippedBeans.length > 0) {
        message.push(`${result.skippedBeans.length} were skipped because they were already imported once before.`);
    }


    return message.join("\n");
}

export type ImportBeanconquerorFormState = {
    message: string;
    success: boolean;
}

/**
 * Form action for importing a Beanconqueror zip file
 * @param prevState
 * @param formData
 */
export async function importBeanconqueror(prevState: ImportBeanconquerorFormState, formData: FormData): Promise<ImportBeanconquerorFormState> {
    const file = formData.get("file") as File | null;

    if (!file) {
        return {message: "missing file", success: false};
    }

    const user = await currentUser();

    if (!user) {
        return {message: "not signed in", success: false};
    }

    const userId = user.publicMetadata.databaseId as number;

    try {
        checkFile(file);
        const data = await readZipFile(file);
        const importResult = await importBeans(data, userId);

        return {message: getResultMessage(importResult), success: true};
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : "unknown error occurred";
        const id = nanoid(10);
        const message = `an error occurred, log id: ${id}`;
        console.error(`id: ${id} error: ${errorMessage}`);
        return {message: message, success: false};
    }
}