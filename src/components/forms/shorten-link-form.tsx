"use client"

import {useForm} from "react-hook-form";
import {type z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import {shortenLinkSchema} from "@/lib/beanconqueror/validations/links";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {type BeanLinkResponse, getBeanLink} from "@/lib/beanlink";
import {Loader2Icon} from "lucide-react";

type Inputs = z.infer<typeof shortenLinkSchema>

export interface ShortenLinkFormProps {
    callback: (data: BeanLinkResponse) => void;
    link?: string | null;
    buttonText?: string;
}

export function ShortenLinkForm(props: ShortenLinkFormProps) {

    const form = useForm<Inputs>({
        resolver: zodResolver(shortenLinkSchema),
        defaultValues: {
            link: props.link ?? "",
        }
    });
    const { isSubmitting } = form.formState;

    const onSubmit = async (data: Inputs) => {
        try {
            const response = await getBeanLink(data.link);
            props.callback(response);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Form {...form}>
            <form
                className={"w-full grid gap-2"}
                onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
            >
                <FormField<Inputs>
                    name={"link"}
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Link</FormLabel>
                            <FormControl>
                                <Input placeholder={"Enter here"} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    className={"flex gap-2"}
                    disabled={isSubmitting}
                >
                    {props.buttonText ?? "Shorten"}
                    {isSubmitting && (
                        <Loader2Icon
                            className={"h-5 w-5 animate-spin text-background"}
                        />
                    )}
                </Button>
            </form>
        </Form>
    )
}