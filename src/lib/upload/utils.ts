import {BlobReader, Entry, TextWriter, ZipReader} from "@zip.js/zip.js";
import {BCData} from "@/types/beanconqueror";

const BEANCONQUEROR_BASE = "Beanconqueror.json";
const BEANCONQUEROR_BEANS_RE = /^Beanconqueror_Beans_\d+.json$/;
const BEANCONQUEROR_BREWS_RE = /^Beanconqueror_Brews_\d+.json$/;

export function readTextFile(file: File, callback: (data: string) => void) {
    const reader = new FileReader();
    reader.onloadend = (event: ProgressEvent<FileReader>) => {
        if (typeof event.target?.result === "string") {
            callback(event.target.result);
        }
    }

    reader.readAsText(file, "utf-8")
}

async function readEntryToJSON(entry: Entry): Promise<BCData> {
    const writer = new TextWriter();

    if (typeof entry.getData === "undefined") {
        return {MILL: [], PREPARATION: [], SETTINGS: [], VERSION: [], BEANS: [], BREWS: []}
    }

    const data = await entry.getData(writer);
    return JSON.parse(data);
}

export async function readZipFile(file: File, callback: (data: any) => void) {
    const blobReader = new BlobReader(file);
    const reader = new ZipReader(blobReader);
    const entries: Entry[] = await reader.getEntries();

    if (!entries.length) {
        throw new Error("Empty zip file uploaded");
    }

    const baseEntry = entries.find(entry => entry.filename === BEANCONQUEROR_BASE);

    if (!baseEntry) {
        throw new Error("Invalid zip file uploaded");
    }

    const baseData = await readEntryToJSON(baseEntry);
    const additionalBeans = [];
    const additionalBrews = [];

    for (const entry of entries) {
        if (entry.filename.includes("MACOS")) continue;
        const data = await readEntryToJSON(entry);

        if (!!entry.filename.match(BEANCONQUEROR_BEANS_RE)) {
            additionalBeans.push(...data);
            continue;
        }

        if (!!entry.filename.match(BEANCONQUEROR_BREWS_RE)) {
            additionalBrews.push(...data);
        }
    }

    baseData.BEANS = baseData.BEANS.concat(additionalBeans);
    baseData.BREWS = baseData.BREWS.concat(additionalBrews);

    await callback(baseData);
    await reader.close();
}