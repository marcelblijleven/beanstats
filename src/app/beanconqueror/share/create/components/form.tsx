"use client"

import {useFieldArray, UseFieldArrayProps, useForm} from "react-hook-form"
import {Input} from "@/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import DatePickerFormField from "@/app/beanconqueror/share/create/components/date-picker";
import {beanconqueror} from "@/lib/beanconqueror/proto/generated/beanconqueror";
import Roast = beanconqueror.Roast;
import BeanRoastingType = beanconqueror.BeanRoastingType;
import SelectFormField from "@/app/beanconqueror/share/create/components/controlled-select-input";
import BeanMix = beanconqueror.BeanMix;
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useEffect, useState} from "react";
import ControlledTextInput from "@/app/beanconqueror/share/create/components/controlled-text-input";
import ControlledTextAreaInput from "@/app/beanconqueror/share/create/components/controlled-textarea-input";
import ControlledCheckboxInput from "@/app/beanconqueror/share/create/components/controlled-checkbox-input";
import ControlledSliderInput from "@/app/beanconqueror/share/create/components/controlled-slider-input";
import {Legend} from "@/components/ui/legend";
import {VarietyInformationFieldset} from "@/app/beanconqueror/share/create/components/variety-information-fieldset";
import HorizontalGroup from "@/app/beanconqueror/share/create/components/horizontal-group";
import {defaultVarietyInformation, formSchema} from "@/app/beanconqueror/share/create/form-schema";
import {createUrlFromFormSchema} from "@/app/beanconqueror/share/create/util/proto-helpers";
import QRCodeCard from "@/components/qrcode-card";


const BeanInformationForm = () => {
    const [showQR, setShowQR] = useState(false);
    const [url, setUrl] = useState("");

    const form = useForm<formSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
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
        }
    } as UseFieldArrayProps<formSchema, "varietyInformation">);

    const blend = form.watch("beanMix");

    const onSubmit = (values: formSchema) => {
        setUrl(createUrlFromFormSchema(values));
        setShowQR(true);
    }
    useEffect(() => {
        append({...defaultVarietyInformation} as any);
    }, [append]);

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={"w-full max-w-xl space-y-3"}>
                    <Card>
                        <CardHeader>
                            <CardTitle>General information</CardTitle>
                        </CardHeader>
                        <CardContent className={"space-y-3"}>
                            <ControlledTextInput<formSchema>
                                name={"name"} label={"Name"}
                                placeholder={"Enter the name of the beans"}
                                control={form.control}
                            />
                            <ControlledTextInput<formSchema>
                                name={"roaster"} label={"Roaster"}
                                placeholder={"Enter the name of the roaster"}
                                control={form.control}
                            />
                            <HorizontalGroup>
                                <DatePickerFormField<formSchema> name={"buyDate"} control={form.control}
                                                                 label={"Buy date"}/>
                                <DatePickerFormField<formSchema> name={"roastingDate"} control={form.control}
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
                                <ControlledSliderInput<formSchema> name={"degreeOfRoast"} control={form.control}
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

                            <fieldset>
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
                                <ControlledTextInput<formSchema>
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
                                <ControlledCheckboxInput<formSchema> name={"decaffeinated"} label={"Decaffeinated"}
                                                                     control={form.control}/>
                                <ControlledTextInput<formSchema> name={"website"} label={"Website"}
                                                                 placeholder={"Enter the website of the beans"}
                                                                 control={form.control}/>
                                <ControlledTextInput<formSchema> name={"eanArticle"} label={"EAN / Article number"}
                                                                 placeholder={"Enter the EAN or article number"}
                                                                 control={form.control}/>
                                <ControlledTextAreaInput<formSchema> name={"notes"} label={"Notes"}
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
                        <Button type={"submit"}>Submit</Button>
                    </div>
                </form>
            </Form>
            {showQR && <QRCodeCard value={url}/>}

        </>
    )
}


export default BeanInformationForm;