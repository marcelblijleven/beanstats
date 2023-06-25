"use client"

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import {shortenLinkSchema} from "@/lib/validation/links";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {BeanLinkResponse, getBeanLink} from "@/lib/beanlink";

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
            link: props.link || "",
        }
    });

    const onSubmit = (data: Inputs) => {
        try {
            getBeanLink(data.link).then(response => props.callback(response));
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
                <Button className={"flex gap-2"}>{props.buttonText || "Shorten"}</Button>
            </form>
        </Form>
    )
}