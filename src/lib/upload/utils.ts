import {BlobReader, Entry, ZipReader} from "@zip.js/zip.js";

export function readTextFile(file: File, callback: (data: string) => void) {
    const reader = new FileReader();
    reader.onloadend = (event: ProgressEvent<FileReader>) => {
        if (typeof event.target?.result === "string") {
            callback(event.target.result);
        }
    }

    reader.readAsText(file, "utf-8")
}

export function readZipFile(file: File, callback: (data: string) => void) {
    const blobReader = new BlobReader(file);
    const reader = new ZipReader(blobReader);
    reader.getEntries().then(entries => {
       if (entries.length === 0 && entries[0].filename === "Beanconqueror.json") {

       }
    });
}