"use client";

import {useUser} from "@clerk/nextjs";
import {zodResolver} from "@hookform/resolvers/zod";
import {type CheckedState} from "@radix-ui/react-checkbox";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {type SubmitHandler, useForm} from "react-hook-form";

import {submitCafeBrewForm} from "@/components/forms/cafe-brew-form/actions/submit-cafe-brew-form";
import {ResetButton, SubmitButton} from "@/components/forms/coffee-form/form-buttons";
import {type CafeBrewInputs, cafeBrewInsertSchema} from "@/components/forms/cafe-brew-form/schema";
import DatePickerInput from "@/components/forms/inputs/date-picker";
import {FormItemWrapper} from "@/components/forms/inputs/form-item-wrapper";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Checkbox} from "@/components/ui/checkbox";
import {Input} from "@/components/ui/input";
import {useToast} from "@/components/ui/use-toast";
import {Slider} from "@/components/ui/slider";
import {Textarea} from "@/components/ui/textarea";
import {prepareFormValues} from "@/lib/forms/utils";

export type CafeBrewFormProps = {
    values?: CafeBrewInputs
}
type DirtyFields = Partial<Record<keyof CafeBrewInputs, boolean | undefined>>

const defaultValues: Omit<CafeBrewInputs, "publicId" | "id" | "userId"> = {
    type: "",
    coffeeOrigin: "",
    coffeeVariety: "",
    date: undefined,
    notes: "",
    cafe: "",
    cafeCity: "",
    cafeCountry: "",
    rating: undefined,
    isPublic: false,
};

export function CafeBrewForm(props: CafeBrewFormProps) {
    const {isLoaded, user} = useUser();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const {toast} = useToast();
    const router = useRouter();

    const values = {
        ...(props.values ?? defaultValues),
        userId: user?.publicMetadata.databaseId as number
    };

    const form = useForm<CafeBrewInputs>({
        mode: "onSubmit",
        resolver: zodResolver(cafeBrewInsertSchema),
        defaultValues: values,
    });


    const dirtyFields = form.formState.dirtyFields as DirtyFields;
    const submitFormData: SubmitHandler<CafeBrewInputs> = async values => {
        const fields: DirtyFields = {...dirtyFields, type: true, cafe: true};
        const formValues = prepareFormValues<CafeBrewInputs>(values, fields, [], ["date"]);
        const result = await submitCafeBrewForm(formValues,);

        if (!result.success) {
            toast({
                title: "Form error",
                description: result.error ?? "Something went wrong while submitting the form"
            });

            return setSubmitting(false);
        }

        if (result.publicId) {
            return router.push(`/brews/cafe/${result.publicId}`);
        }

        return router.push("/brews/cafe");
    };

    if (!isLoaded) {
        return null;
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitFormData)} className={"space-y-2 md:space-y-3"}>
                <h2 className={"text-xl font-bold tracking-tight"}>Form</h2>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-2"}>
                    <fieldset className={"space-y-1 sm:space-y-2"}>
                        <h3 className={"text-lg font-bold"}>Coffee</h3>
                        <FormField
                            control={form.control}
                            name={"type"}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Type</FormLabel>
                                    <FormControl>
                                        <Input placeholder={"Type of drink"} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={"coffeeOrigin"}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Origin</FormLabel>
                                    <FormControl>
                                        <Input placeholder={"Origin country of the coffee"} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={"coffeeVariety"}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Variety</FormLabel>
                                    <FormControl>
                                        <Input placeholder={"Variety of the coffee"} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </fieldset>
                    <fieldset className={"space-y-1 sm:space-y-2"}>
                        <h3 className={"text-lg font-bold"}>Cafe</h3>
                        <FormField
                            control={form.control}
                            name={"cafe"}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Cafe name</FormLabel>
                                    <FormControl>
                                        <Input placeholder={"Name of the cafe"} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={"cafeCity"}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input placeholder={"City of the cafe"} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={"cafeCountry"}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Input placeholder={"Country of the cafe"} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </fieldset>
                    <fieldset className={"space-y-1 sm:space-y-2 col-span-1 md:col-span-2"}>
                        <h3 className={"text-lg font-bold"}>Information</h3>
                        <div className={"w-full md:w-1/2"}>
                            <DatePickerInput name={"date"} label={"Date"} control={form.control}/>
                        </div>
                        <FormField
                            control={form.control}
                            name={"isPublic"}
                            render={({field}) => (
                                <FormItem
                                    className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full md:w-1/2">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value as CheckedState}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className={"cursor-pointer"}>Is public</FormLabel>
                                        <FormDescription>
                                            When a brew is set to public, its detail page can be shared with other users
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={"rating"}
                            render={({field: {value, onChange}}) => (
                                <FormItem className={"w-full md:w-1/2"}>
                                    <FormLabel>Rating</FormLabel>
                                    <div className={"flex space-x-6 justify-between items-center"}>
                                        <FormControl>
                                            <Slider
                                                min={0}
                                                max={5}
                                                step={1}
                                                defaultValue={values.rating ?? undefined} onValueChange={onChange}
                                            />
                                        </FormControl>
                                        <span className={"text-md font-light"}>{value ?? 0}</span>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={"notes"}
                            render={({field}) => (
                                <FormItemWrapper label={"Notes"}>
                                    {/* @ts-expect-error: should be fixed globally*/}
                                    <Textarea placeholder={"Enter some notes"} {...field} />
                                </FormItemWrapper>
                            )}
                        />
                    </fieldset>
                </div>
                <div className={"flex flex-row-reverse gap-2 my-2"}>
                    <SubmitButton loading={submitting} disabled={!Object.keys(dirtyFields).length}/>
                    <ResetButton onClick={() => form.reset()}/>
                </div>
            </form>
        </Form>
    );
}