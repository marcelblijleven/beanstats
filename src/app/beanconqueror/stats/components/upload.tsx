"use client"

import {ChangeEvent, useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {readTextFile, readZipFileWithCallback} from "@/lib/beanconqueror/upload/utils";
import {useToast} from "@/components/ui/use-toast";

export interface FileUploadProps {
    callback: (data: any) => void;
}

interface ProcessProps {
    file: File | undefined;
    callback: (data: any) => void;
}

const Process = (props: ProcessProps) => {
    const { toast } = useToast();

    const onClick = () => {
        if (!props.file) return;

        if (props.file.type === "application/json") {
            readTextFile(props.file, props.callback)
        } else if (props.file.type === "application/zip") {
            readZipFileWithCallback(props.file, props.callback).catch(err => {
                console.error(err);
                toast({
                    title: "Oh, something went wrong",
                    description: "There was a problem reading the file",
                    variant: "destructive",
                })
            });
        }
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
                accept={"application/json,application/zip"}
                onChange={onFileChange}
            />
            <Process file={file} callback={props.callback} />
        </div>
    )
}

export default FileUpload;