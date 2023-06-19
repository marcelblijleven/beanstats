"use client"

import {ChangeEvent, useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
// import {readTextFile, readZipFile} from "@/lib/upload/utils";

export interface FileUploadProps {
    callback: (data: string) => void;
}

interface ProcessProps {
    file: File | undefined;
    callback: (data: string) => void;
}

const Process = (props: ProcessProps) => {
    const onClick = () => {
        if (!props.file) return;

        const reader = new FileReader();

        reader.onloadend = (event: ProgressEvent<FileReader>) => {
            if (typeof event.target?.result === "string") {
                props.callback(event.target.result);
            }
        }

        reader.readAsText(props.file, "utf-8")
    }

    return (
        <Button variant={!!props.file ? "default": "secondary"} onClick={onClick} disabled={!props.file}>
            Process
        </Button>
    )
}


const FileUpload = (props: FileUploadProps) => {
    const [file, setFile] = useState<File>();

    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files?.[0]);
    }

    return (
        <div className={"flex gap-2"}>
            <Input
                hidden
                id={"file-beanconqueror"}
                type={"file"}
                multiple={false}
                accept={"application/json,application.zip"}
                onChange={onFileChange}
                value={file}
            />
            <Process file={file} callback={props.callback} />
        </div>
    )
}

export default FileUpload;