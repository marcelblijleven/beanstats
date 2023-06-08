"use client"

import {ChangeEvent, createRef, useCallback, useState} from "react";
import {Button} from "@/components/ui/button";

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
    const ref = createRef<HTMLInputElement>();
    const onFileSelect = useCallback(() => {
        ref?.current && ref.current.click();
    }, [ref]);
    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files?.[0]);
    }

    return (
        <div className={"flex gap-2"}>
            <input
                hidden
                ref={ref}
                id={"file-beanconqueror"}
                type={"file"}
                multiple={false}
                accept={"application/json,application.zip"}
                onChange={onFileChange}
            />
            <Button
                onClick={onFileSelect}
                variant={!file ? "default" : "secondary"}
            >
                Select file
            </Button>
            <Process file={file} callback={props.callback} />
        </div>
    )
}

export default FileUpload;