"use client"

import {zodResolver} from "@hookform/resolvers/zod";
import {type CheckedState} from "@radix-ui/react-checkbox";
import {usePathname, useRouter} from "next/navigation";
import {useForm} from "react-hook-form";

import {saveFreezeEntry} from "@/components/forms/freeze-entries/actions/save-freeze-entry";
import {type FreezeEntryInput, freezeEntryInsertSchema} from "@/components/forms/freeze-entries/schema";
import DatePickerInput from "@/components/forms/inputs/date-picker";
import {FormItemWrapper} from "@/components/forms/inputs/form-item-wrapper";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {useToast} from "@/components/ui/use-toast";
import {prepareFormValues} from "@/lib/forms/utils";

type FreezeEntryFormProps = {
    values?: FreezeEntryInput;
    beans?: {publicId: string | null, name: string}[];
    forBean?: boolean;
}

export function FreezeEntryForm(props: FreezeEntryFormProps) {
    const disabled = (props.forBean ?? !!props.values?.beanPublicId) || !props.beans?.length
    const {toast} = useToast();

    const pathname = usePathname();
    const isEdit = pathname.includes("edit");
    const router = useRouter();

    const form = useForm<FreezeEntryInput>({
        mode: "onSubmit",
        resolver: zodResolver(freezeEntryInsertSchema),
        defaultValues: (!!props.values ? {...props.values} :{
            label: "",
            weight: "",
            freezeDate: undefined,
            frozen: true,
            notes: "",
            beanPublicId: props.forBean && props.beans?.length === 1 ? props.beans[0].publicId! : undefined
        })
    });

    const onSubmit = async (values: Partial<FreezeEntryInput>) => {
        const dirtyFields = form.formState.dirtyFields;
        const prepared = prepareFormValues(values, dirtyFields, ["beanPublicId", "label", "weight"], ["freezeDate"])
        let parsed;

        if (isEdit) {
            parsed = freezeEntryInsertSchema.partial().safeParse(prepared);
        } else {
            parsed = freezeEntryInsertSchema.safeParse(prepared);
        }

        if (!parsed.success) {
            toast({
                title: "Form error",
                description: parsed.error.message,
                variant: "destructive"
            });
            return
        }

        const result = await saveFreezeEntry(parsed.data);

        if (!result.success) {
            toast({
                title: "Form error",
                description: result.detail,
                variant: "destructive",
            });
            return
        }

        toast({
            title: "Success",
            description: result.detail,
            variant: "default",
        });

        router.push(`/coffee/freeze/${result.publicId}`);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-4 max-w-lg"}>
                {/*<h2 className={"text-xl font-bold tracking-tight"}>Freeze entry form</h2>*/}
                <FormField
                    control={form.control}
                    name={"beanPublicId"}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Coffee</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a coffee to freeze" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className={"overflow-y-scroll max-h-[300px]"} data-scrollable>
                                        {(props.beans ?? []).map(bean => (
                                            <SelectItem key={bean.publicId} value={bean.publicId!}>{bean.name}</SelectItem>
                                        ))}
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Which coffee do you want to freeze?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"label"}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Label</FormLabel>
                            <FormControl>
                                <Input placeholder={"Label"} {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"weight"}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Weight</FormLabel>
                            <FormControl>
                                <Input placeholder={"13.37"} {...field} type={"number"} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <DatePickerInput name={"freezeDate"} label={"Date"} control={form.control}/>
                <FormField
                    control={form.control}
                    name={"notes"}
                    render={({field}) => (
                        <FormItemWrapper label={"Notes"}>
                            {/* @ts-expect-error: fix this globally*/}
                            <Textarea placeholder={"Enter some notes"} {...field} />
                        </FormItemWrapper>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"frozen"}
                    render={({field}) => (
                        <FormItem
                            className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full">
                            <FormControl>
                                <Checkbox
                                    defaultValue={"true"}
                                    checked={field.value as CheckedState}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel className={"cursor-pointer"}>Is frozen</FormLabel>
                                <FormDescription>
                                    When a freeze entry is no longer frozen, it will be considered as archived
                                </FormDescription>
                            </div>
                        </FormItem>
                    )}
                />
                <div className={"flex flex-row-reverse"}>
                    <Button type={"submit"}>Submit</Button>
                    <Button type={"button"} variant={"outline"} className={"mr-2"} onClick={() => form.reset()}>Reset</Button>
                </div>
                {JSON.stringify(form.formState.errors)}
            </form>
        </Form>
    )
}