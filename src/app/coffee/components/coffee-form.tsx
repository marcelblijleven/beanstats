"use client"

import {
    DefaultValues,
    FieldArrayWithId,
    FieldValues, SubmitHandler,
    useFieldArray,
    UseFieldArrayRemove,
    useForm,
    UseFormReturn
} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import DatePickerInput from "@/components/forms/inputs/date-picker";
import {Checkbox} from "@/components/ui/checkbox";
import {CheckedState} from "@radix-ui/react-checkbox";
import {useUser} from "@clerk/nextjs";
import {ReactNode, useEffect, useState} from "react";
import {Separator} from "@/components/ui/separator";
import {FormItemWrapper} from "@/components/forms/inputs/form-item-wrapper";
import {Textarea} from "@/components/ui/textarea";
import {submitCoffeeForm} from "@/app/coffee/actions/coffee-form/submit-coffee-form";
import {ResetButton, SubmitButton} from "@/app/coffee/components/form-buttons";

import {type Inputs, formSchema} from "@/app/coffee/actions/coffee-form/form-schema"
import {prepareFormValues} from "@/lib/forms/utils";
import {useToast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";

type CoffeeFormProps = {
    roasters: { id: number, name: string }[]
    values?: Inputs
}

type VarietyFieldsetProps<TFieldValues extends FieldValues = FieldValues> = {
    index: number;
    form: UseFormReturn<Inputs>;
    field: FieldArrayWithId<Partial<DefaultValues<TFieldValues>>>
    remove: UseFieldArrayRemove,
}

const defaultVarietyValues = {
    name: "",
    processing: "",
    country: "",
    region: "",
    farm: "",
    farmer: "",
    elevation: "",
    beanId: null,
}

const defaultValues = {
    name: "",
    roastDate: undefined,
    buyDate: undefined,
    notes: "",
    weight: "",
    price: "",
    roasterId: 0,
    isPublic: false,
    isArchived: false,
    varieties: [{...defaultVarietyValues}],
}

function VarietyFieldset<TFieldValues extends FieldValues = FieldValues>({
     index,
     remove,
     form
 }: VarietyFieldsetProps<TFieldValues>) {
    return (
        <>
            <div className={"flex items-center justify-between"}>
                <h4 className={"text-base font-semibold"}>Variety {index + 1}</h4>
                <Button
                    variant={"outline"}
                    size={"sm"}
                    type={"button"}
                    onClick={() => remove(index)}
                    className={"hover:bg-destructive hover:text-destructive-foreground"}
                >
                    Remove
                </Button>
            </div>
            <FormField
                control={form.control}
                name={`varieties.${index}.name`}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Variety name</FormLabel>
                        <FormControl>
                            <Input placeholder={"Name of the variety"} {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name={`varieties.${index}.processing`}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Processing</FormLabel>
                        <FormControl>
                            <Input placeholder={"How were the beans processed?"} {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <div className={"grid grid-cols-1 sm:grid-cols-2 gap-2"}>

                <FormField
                    control={form.control}
                    name={`varieties.${index}.country`}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                                <Input placeholder={"Country"} {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`varieties.${index}.region`}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Region</FormLabel>
                            <FormControl>
                                <Input placeholder={"Region"} {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
            </div>
            <div className={"grid grid-cols-1 sm:grid-cols-2 gap-2"}>

                <FormField
                    control={form.control}
                    name={`varieties.${index}.farm`}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Farm</FormLabel>
                            <FormControl>
                                <Input placeholder={"On which farm did the beans grow?"} {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`varieties.${index}.farmer`}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Farmer</FormLabel>
                            <FormControl>
                                <Input placeholder={"Who is the farmer?"} {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
            </div>
            <FormField
                control={form.control}
                name={`varieties.${index}.elevation`}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Elevation</FormLabel>
                        <FormControl>
                            <Input placeholder={"At what elevation did the beans grow?"} {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
        </>
    )
}

export function CoffeeForm(props: CoffeeFormProps) {
    const [submitting, setSubmitting] = useState<boolean>(false);
    const {isLoaded, user} = useUser();
    const values = {
        ...(props.values ?? defaultValues),
        userId: user?.publicMetadata.databaseId as string
    };

    const router = useRouter();
    const {toast} = useToast();

    const form = useForm<Inputs>({
        mode: "onBlur",
        resolver: zodResolver(formSchema),
        defaultValues: values,
    });

    const {fields, append, remove} = useFieldArray({
        name: "varieties",
        control: form.control,
        rules: {minLength: 0, maxLength: 10}
    });
    const dirtyFields = form.formState.dirtyFields

    useEffect(() => {
        form.reset(props.values);
    }, [form, props.values]);

    if (!isLoaded || !user?.id) {
        return null;
    }

    const submitFormData: SubmitHandler<Inputs> = async values => {
        setSubmitting(true);
        const dirtyFields = form.formState.dirtyFields as Partial<Inputs>;
        const formValues = prepareFormValues<Inputs>(values, dirtyFields, "buyDate", "roastDate");

        // No need to do something when no values have changed
        if (Object.keys(formValues).length === 0) {
            if (values.publicId) {
                return router.push(`/coffee/${values.publicId}`);
            }

            return router.push("/coffee");
        }

        const result = await submitCoffeeForm({...formValues, name: values.name});

        if (!result.success) {
            toast({
                title: "Form error",
                description: result.error ?? "Something went wrong while submitting the form"
            });

            return setSubmitting(false);
        }

        if (result.publicId) {
            return router.push(`/coffee/${result.publicId}`);
        }

        return router.push("/coffee")

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitFormData)} className={"space-y-2 md:space-y-3"}>
                <h3 className={"text-lg font-bold"}>Information</h3>
                <FormField
                    control={form.control}
                    name={"name"}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Coffee name</FormLabel>
                            <FormControl>
                                <Input placeholder={"Name of the coffee"} {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <fieldset className={"grid grid-cols-2 gap-2"}>
                    <DatePickerInput name={"roastDate"} label={"Roast date"} control={form.control}/>
                    <DatePickerInput name={"buyDate"} label={"Buy date"} control={form.control}/>
                </fieldset>
                <fieldset className={"grid grid-cols-2 gap-2"}>
                    <FormField
                        control={form.control}
                        name={"weight"}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Weight</FormLabel>
                                <FormControl>
                                    <Input placeholder={"13.37"} type={"number"} {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"price"}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input placeholder={"13.37"} type={"number"} {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                </fieldset>
                <fieldset>
                    <h3 className={"text-lg font-bold"}>Varieties</h3>
                    {fields.reduce((acc, field, index) => {
                        acc.push(<VarietyFieldset key={`variety-${index}`} index={index} form={form} field={field}
                                                  remove={remove}/>)

                        if (index !== fields.length - 1) {
                            acc.push(<Separator key={`variety-${index}-separator`} className={"my-3"} orientation={"horizontal"}/>)
                        }
                        return acc;
                    }, [] as ReactNode[])}

                    {fields.length < 10 && <div className={"flex flex-row-reverse my-3"}>
                      <Button type={"button"} variant={"outline"} onClick={() => append({...defaultVarietyValues})}>Add
                        variety</Button>
                    </div>}
                </fieldset>
                <fieldset>
                    <h3 className={"text-lg font-bold"}>Roaster</h3>
                    <div className={"grid grid-cols-1 sm:grid-cols-2 gap-2"}>
                        <FormField
                            control={form.control}
                            name={"roaster"}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Roaster</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={"Who roasted the beans?"}
                                            {...field}
                                            list={"roaster-list"}
                                            onChange={(event) => {
                                                form.setValue("roasterId", undefined);
                                                field.onChange(event);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <datalist id={"roaster-list"}>
                        {props.roasters.map(roaster => (
                            <option key={`roaster-${roaster.id}`} value={roaster.name}/>
                        ))}
                    </datalist>
                </fieldset>
                <h3 className={"text-lg font-bold"}>Other</h3>
                <div className={"grid grid-cols-1 sm:grid-cols-2 gap-2"}>
                    <FormField
                        control={form.control}
                        name={"isArchived"}
                        render={({field}) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value as CheckedState}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>Is archived</FormLabel>
                                    <FormDescription>
                                        Archived coffees will be excluded from your backlog view
                                    </FormDescription>
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"isPublic"}
                        render={({field}) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value as CheckedState}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>Is public</FormLabel>
                                    <FormDescription>
                                        When a coffee is set to public, its detail page can be shared with other users
                                    </FormDescription>
                                </div>
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name={"notes"}
                    render={({field}) => (
                        <FormItemWrapper label={"Notes"}>
                            {/* @ts-ignore:*/}
                            <Textarea placeholder={"Enter some notes"} {...field} />
                        </FormItemWrapper>
                    )}
                />
                <div className={"flex flex-row-reverse gap-2 my-2"}>
                    <SubmitButton loading={submitting} disabled={!Object.keys(dirtyFields).length} />
                    <ResetButton onClick={() => form.reset()} />
                </div>
            </form>
        {/*    TODO: show form errors not related to fields here*/}
        </Form>
    )
}