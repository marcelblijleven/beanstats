"use client"

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import {viewLinkSchema} from "@/lib/validation/links";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

type Inputs = z.infer<typeof viewLinkSchema>

export interface ViewFormProps {
    callback: (url: string) => void;
}

export function ViewLinkForm(props: ViewFormProps) {
    const form = useForm<Inputs>({
        resolver: zodResolver(viewLinkSchema),
        defaultValues: {
            link: "",
        }
    });

    const onSubmit = (data: Inputs) => {
        props.callback(data.link);
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
                <Button className={"flex gap-2"}>View</Button>
            </form>
        </Form>
    )
}