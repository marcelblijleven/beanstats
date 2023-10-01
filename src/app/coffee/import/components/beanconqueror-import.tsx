"use client"

import {useUser} from "@clerk/nextjs";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {importBeanconqueror} from "@/app/coffee/import/actions/import-beanconqueror";
import {experimental_useFormStatus as useFormStatus} from "react-dom";
// @ts-expect-error
import { experimental_useFormState as useFormState } from "react-dom";
import {AlertCircle, Check, Loader} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type={"submit"} aria-disabled={pending} disabled={pending}>
            {pending ? "Importing" : "Import"}
            {pending && <Loader className={"animate-spin h-4 w-4 ml-2"} />}
        </Button>
    )
}

function FormAlert({state}: {state: {message: string | null}}) {
    if (state.message === null) {
        return null;
    }

    if (state.message === "successfully imported") {
        return (
            <Alert className={"ml-2 max-w-sm"}>
                <Check className={"h-4 w-4"} />
                <AlertTitle>Done</AlertTitle>
                <AlertDescription>
                    {state.message}
                </AlertDescription>
            </Alert>
        )
    }

    return (
        <Alert className={"px-2 ml-2 max-w-sm"} variant={"destructive"}>
            <AlertCircle className={"h-4 w-4"} />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                {state.message}
            </AlertDescription>
        </Alert>
    )
}

export default function BeanconquerorImport() {
    const user = useUser();
    // @ts-ignore
    const [state, formAction] = useFormState(importBeanconqueror, {message: null})

    if (!user) return (
        <section>
            <h3 className={"font-bold text-lg"}>Beanconqueror</h3>
            <div className={"text-destructive"}>You have to be logged in to import</div>
        </section>
    )

    return (
        <div className={"space-y-4"}>
            <section className={"space-y-2"}>
                <h3 className={"font-bold text-lg"}>Beanconqueror</h3>
                <form className={"flex space-x-2 max-w-lg"} action={formAction}>
                    <Input
                        id={"file"}
                        type={"file"}
                        name={"file"}
                        accept={"application/zip"}
                    />
                    <SubmitButton />
                    <p aria-live={"polite"} className={"sr-only"}>{state?.message}</p>
                </form>
                <FormAlert state={state} />
            </section>
            <section className={"space-y-2"}>
                <h3 className={"font-bold text-lg"}>Other methods</h3>
                <p className={"max-w-lg"}>Using other methods to track your coffee and/or brews? Place a request through a Github issue, maybe it can be added too!</p>
                <a className={"text-primary hover:underline"} href={"https://www.github.com/marcelblijleven/beanstats"}>Github repository</a>
            </section>
        </div>
    )
}