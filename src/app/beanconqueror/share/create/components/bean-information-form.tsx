"use client"

import {useFieldArray, UseFieldArrayProps, useForm} from "react-hook-form"
import {Input} from "@/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import DatePickerInput from "@/components/controlled-form/date-picker";
import {beanconqueror} from "@/lib/beanconqueror/proto/generated/beanconqueror";
import Roast = beanconqueror.Roast;
import BeanRoastingType = beanconqueror.BeanRoastingType;
import SelectFormField from "@/components/controlled-form/select-input";
import BeanMix = beanconqueror.BeanMix;
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useEffect, useState} from "react";
import { CheckboxInput, HorizontalGroup, TextInput, TextareaInput, SliderInput } from "@/components/controlled-form";
import {Legend} from "@/components/ui/legend";
import {VarietyInformationFieldset} from "@/app/beanconqueror/share/create/components/variety-information-fieldset";
import {defaultVarietyInformation, formSchema} from "@/lib/beanconqueror/proto/form-schema";
import {createUrlFromFormSchema} from "@/lib/beanconqueror/proto/proto-helpers";
import ShareCard from "@/app/beanconqueror/share/create/components/share-card";
import {BeanLinkResponse, getBeanLink} from "@/lib/beanlink";


const BeanInformationForm = () => {
    const [showQR, setShowQR] = useState(false);
    const [url, setUrl] = useState("");
    const [beanLinkResponse, setBeanLinkResponse] = useState<BeanLinkResponse | undefined>();

    const form = useForm<formSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            coffeeName: "",
            roaster: "",
            weight: "",
            cost: "",
            flavourProfile: "",
            cuppingPoints: "",
            website: "",
            eanArticle: "",
            varietyInformation: [],
        },
    });
    const {fields, append, remove} = useFieldArray({
        name: "varietyInformation",
        control: form.control,
        rules: {
            minLength: 0,
            maxLength: 10,
        },
    } as UseFieldArrayProps<formSchema, "varietyInformation">);

    const blend = form.watch("beanMix");

    const onSubmit = (values: formSchema) => {
        const shareUrl = createUrlFromFormSchema(values);
        setUrl(shareUrl);
        setShowQR(true);
        getBeanLink(shareUrl).then(response => setBeanLinkResponse(response)).catch(err => {
            console.error(err);
        });
    }
    useEffect(() => {
        append({...defaultVarietyInformation} as any, {
            shouldFocus: false,
        });
    }, [append]);

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={"w-full space-y-3"}>
                    <Card>
                        <CardHeader>
                            <CardTitle>General information</CardTitle>
                        </CardHeader>
                        <CardContent className={"space-y-3"}>
                            <TextInput<formSchema>
                                name={"coffeeName"} label={"Name"}
                                placeholder={"Enter the name of the beans"}
                                control={form.control}
                            />
                            <TextInput<formSchema>
                                name={"roaster"} label={"Roaster"}
                                placeholder={"Enter the name of the roaster"}
                                control={form.control}
                            />
                            <HorizontalGroup>
                                <DatePickerInput<formSchema> name={"buyDate"} control={form.control}
                                                             label={"Buy date"}/>
                                <DatePickerInput<formSchema> name={"roastingDate"} control={form.control}
                                                             label={"Roast date"}/>
                            </HorizontalGroup>
                            <HorizontalGroup>
                                <SelectFormField<formSchema>
                                    name={"beanRoastingType"}
                                    label={"Roast"}
                                    control={form.control}
                                    default={"UNKNOWN_BEAN_ROASTING_TYPE"}
                                    enum={BeanRoastingType}
                                />
                                <SliderInput<formSchema> name={"degreeOfRoast"} control={form.control}
                                                         label={"Degree of roast"}/>
                            </HorizontalGroup>
                            <SelectFormField<formSchema>
                                name={"roast"}
                                label={"Roast style"}
                                control={form.control}
                                default={"UNKNOWN_ROAST"}
                                enum={Roast}
                            />
                            <SelectFormField<formSchema>
                                name={"beanMix"}
                                label={"Blend"}
                                control={form.control}
                                default={"UNKNOWN_BEAN_MIX"}
                                enum={BeanMix}
                            />

                            <fieldset className={"space-y-3"}>
                                <Legend>More information</Legend>
                                <FormField<formSchema>
                                    control={form.control}
                                    name={"weight"}
                                    rules={{

                                    }}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Weight</FormLabel>
                                            <FormControl>
                                                <Input placeholder={"Weight"} type={"number"} min={0} {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Decimal points currently not supported
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField<formSchema>
                                    control={form.control}
                                    name={"cost"}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Cost</FormLabel>
                                            <FormControl>
                                                <Input placeholder={"Cost"} type={"number"} min={0} {...field}/>
                                            </FormControl>
                                            <FormDescription>
                                                Decimal points currently not supported
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <TextInput<formSchema>
                                    name={"flavourProfile"} label={"Flavour profile"}
                                    placeholder={"Enter some taste notes"}
                                    control={form.control}
                                />
                                <FormField<formSchema>
                                    control={form.control}
                                    name={"cuppingPoints"}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Cupping points</FormLabel>
                                            <FormControl>
                                                <Input placeholder={"Cupping points"} type={"number"}
                                                       inputMode={"decimal"}
                                                       step={.1} min={0} {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <CheckboxInput<formSchema> name={"decaffeinated"} label={"Decaffeinated"}
                                                           control={form.control}/>
                                <TextInput<formSchema> name={"website"} label={"Website"}
                                                       placeholder={"Enter the website of the beans"}
                                                       control={form.control}/>
                                <TextInput<formSchema> name={"eanArticle"} label={"EAN / Article number"}
                                                       placeholder={"Enter the EAN or article number"}
                                                       control={form.control}/>
                                <TextareaInput<formSchema> name={"notes"} label={"Notes"}
                                                           placeholder={"Enter some notes"}
                                                           control={form.control}/>
                            </fieldset>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Variety information</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className={"space-y-4"}>
                                {fields.map((field, index) => (
                                    <VarietyInformationFieldset<formSchema> key={field.id} field={field} index={index}
                                                                            control={form.control} remove={remove}/>
                                ))}
                                {blend === "BLEND" && (<Button onClick={(event) => {
                                    event.preventDefault();
                                    append({...defaultVarietyInformation} as any)
                                }}>
                                    Add additional bean
                                </Button>)}
                            </div>
                        </CardContent>
                    </Card>
                    <div className={"flex gap-2 justify-end"}>
                        <Button type={"submit"}>Get share link</Button>
                    </div>
                </form>
            </Form>
            {showQR && <ShareCard bcUrl={url} beanLinkResponse={beanLinkResponse}/>}

        </>
    )
}


export default BeanInformationForm;