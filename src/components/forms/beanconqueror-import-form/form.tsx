"use client";

import {useUser} from "@clerk/nextjs";
import {AlertCircle, Check, Info, Loader} from "lucide-react";
import {useFormState} from "react-dom";
import {useFormStatus} from "react-dom";
import {importBeanconqueror} from "@/components/forms/beanconqueror-import-form/actions/import-beanconqueror";

import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type={"submit"} aria-disabled={pending} disabled={pending}>
            {pending ? "Importing" : "Import"}
            {pending && <Loader className={"animate-spin h-4 w-4 ml-2"} />}
        </Button>
    );
}

function FormAlert({state}: {state: {message: string | null, success: boolean | null}}) {
    if (state.message === null) {
        return (
            <Alert>
                <Info className={"h-4 w-4"}/>
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>
                    Previously imported beans will not be updated at this time
                </AlertDescription>
            </Alert>
        );
    }

    return (
        <Alert variant={state.success ? "default" : "destructive"}>
            {state.success && <Check className={"h-4 w-4"}/>}
            {!state.success && <AlertCircle className={"h-4 w-4"} />}
            <AlertTitle>Done</AlertTitle>
            <AlertDescription className={"whitespace-pre-line"}>
                {state.message}
            </AlertDescription>
        </Alert>
    );
}

export default function BeanconquerorImportForm() {
    const user = useUser();
    // @ts-expect-error: typing for importBeanconqueror seems off
  const [state, action] = useFormState(importBeanconqueror, {message: null, success: null});

    if (!user) return (
        <section>
            <h3 className={"font-bold text-lg"}>Beanconqueror</h3>
            <div className={"text-destructive"}>You have to be logged in to import</div>
        </section>
    );

    return (
        <div className={"space-y-4"}>
            <section className={"space-y-2"}>
                <h3 className={"font-bold text-lg"}>Beanconqueror</h3>
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                <form className={"max-w-lg space-y-2"} action={action}>
                    <fieldset className={"flex space-x-2"}>
                        <Input
                            id={"file"}
                            type={"file"}
                            name={"file"}
                            accept={"application/zip"}
                        />
                        <SubmitButton />
                    </fieldset>
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                    <FormAlert state={state} />
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
                    <p aria-live={"polite"} className={"sr-only"}>{state?.message}</p>
                </form>
            </section>
            <section className={"space-y-2"}>
                <h3 className={"font-bold text-lg"}>Other methods</h3>
                <p className={"max-w-lg"}>Using other methods to track your coffee and/or brews? Place a request through a Github issue, maybe it can be added too!</p>
                <a className={"text-primary hover:underline"} href={"https://www.github.com/marcelblijleven/beanstats"}>Github repository</a>
            </section>
        </div>
    );
}