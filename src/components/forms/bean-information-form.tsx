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
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {useEffect, useState} from "react";
import {CheckboxInput, HorizontalGroup, TextInput, TextareaInput, SliderInput} from "@/components/controlled-form";
import {Legend} from "@/components/ui/legend";
import {VarietyInformationFieldset} from "@/components/forms/variety-information-fieldset";
import {defaultVarietyInformation, beanInformationFormSchema} from "@/lib/validation/bean-information-form-schema";
import {createUrlFromFormSchema} from "@/lib/beanconqueror/proto/proto-helpers";
import ShareCard from "@/components/share-card";
import {BeanLinkResponse, getBeanLink} from "@/lib/beanlink";
import {TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tabs} from "@radix-ui/react-tabs";


const BeanInformationForm = () => {
    const [showQR, setShowQR] = useState(false);
    const [url, setUrl] = useState("");
    const [beanLinkResponse, setBeanLinkResponse] = useState<BeanLinkResponse | undefined>();

    const form = useForm<beanInformationFormSchema>({
        resolver: zodResolver(beanInformationFormSchema),
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
    } as UseFieldArrayProps<beanInformationFormSchema, "varietyInformation">);

    const blend = form.watch("beanMix");

    const onSubmit = (values: beanInformationFormSchema) => {
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
        <Card className={"w-full"}>
            <CardHeader>
                <CardTitle>Create share link form</CardTitle>
                <CardDescription>
                    Use the form to create a share link for the Beanconqueror app. It will automatically create a shareable
                    beanl.ink url too, with the option to copy it with formatting for discord. Alternatively, you can use your
                    phone&apos;s camera to scan the QR Code and import it directly into Beanconqueror.
                </CardDescription>
            </CardHeader>
            <CardContent className={"space-y-3"}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={"w-full space-y-3"}>
                        <Tabs defaultValue={"general"}>
                            <TabsList className={"mb-4"}>
                                <TabsTrigger value={"general"}>General info</TabsTrigger>
                                <TabsTrigger value={"variety"}>Variety info</TabsTrigger>
                            </TabsList>
                            <TabsContent value={"general"} className={"space-y-3"}>
                                <fieldset className={"space-y-3"}>
                                    <Legend>General information</Legend>
                                    <TextInput<beanInformationFormSchema>
                                        name={"coffeeName"} label={"Name"}
                                        placeholder={"Enter the name of the beans"}
                                        control={form.control}
                                    />
                                    <TextInput<beanInformationFormSchema>
                                        name={"roaster"} label={"Roaster"}
                                        placeholder={"Enter the name of the roaster"}
                                        control={form.control}
                                    />
                                    <HorizontalGroup>
                                        <DatePickerInput<beanInformationFormSchema> name={"buyDate"} control={form.control}
                                                                                    label={"Buy date"}/>
                                        <DatePickerInput<beanInformationFormSchema> name={"roastingDate"} control={form.control}
                                                                                    label={"Roast date"}/>
                                    </HorizontalGroup>
                                    <HorizontalGroup>
                                        <SelectFormField<beanInformationFormSchema>
                                            name={"beanRoastingType"}
                                            label={"Roast"}
                                            control={form.control}
                                            default={"UNKNOWN_BEAN_ROASTING_TYPE"}
                                            enum={BeanRoastingType}
                                        />
                                        <SliderInput<beanInformationFormSchema> name={"degreeOfRoast"} control={form.control}
                                                                                label={"Degree of roast"}/>
                                    </HorizontalGroup>
                                    <SelectFormField<beanInformationFormSchema>
                                        name={"roast"}
                                        label={"Roast style"}
                                        control={form.control}
                                        default={"UNKNOWN_ROAST"}
                                        enum={Roast}
                                    />
                                    <SelectFormField<beanInformationFormSchema>
                                        name={"beanMix"}
                                        label={"Blend"}
                                        control={form.control}
                                        default={"UNKNOWN_BEAN_MIX"}
                                        enum={BeanMix}
                                    />
                                </fieldset>
                                <fieldset className={"space-y-3"}>
                                    <Legend>More information</Legend>
                                    <FormField<beanInformationFormSchema>
                                        control={form.control}
                                        name={"weight"}
                                        rules={{}}
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Weight</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={"Weight"} type={"number"}
                                                           min={0} {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    Decimal points currently not supported
                                                </FormDescription>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField<beanInformationFormSchema>
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
                                    <TextInput<beanInformationFormSchema>
                                        name={"flavourProfile"} label={"Flavour profile"}
                                        placeholder={"Enter some taste notes"}
                                        control={form.control}
                                    />
                                    <FormField<beanInformationFormSchema>
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
                                    <CheckboxInput<beanInformationFormSchema> name={"decaffeinated"} label={"Decaffeinated"}
                                                                              control={form.control}/>
                                    <TextInput<beanInformationFormSchema> name={"website"} label={"Website"}
                                                                          placeholder={"Enter the website of the beans"}
                                                                          control={form.control}/>
                                    <TextInput<beanInformationFormSchema> name={"eanArticle"} label={"EAN / Article number"}
                                                                          placeholder={"Enter the EAN or article number"}
                                                                          control={form.control}/>
                                    <TextareaInput<beanInformationFormSchema> name={"notes"} label={"Notes"}
                                                                              placeholder={"Enter some notes"}
                                                                              control={form.control}/>
                                </fieldset>
                            </TabsContent>
                            <TabsContent value={"variety"} className={"space-y-3"}>
                                <Legend>Variety information</Legend>
                                <div className={"space-y-4"}>
                                    {fields.map((field, index) => (
                                        <VarietyInformationFieldset<beanInformationFormSchema> key={field.id} field={field}
                                                                                               index={index}
                                                                                               control={form.control}
                                                                                               remove={remove}/>
                                    ))}
                                    {blend === "BLEND" && (<Button onClick={(event) => {
                                        event.preventDefault();
                                        append({...defaultVarietyInformation} as any)
                                    }}>
                                        Add additional bean
                                    </Button>)}
                                </div>
                            </TabsContent>
                        </Tabs>
                        <div className={"flex gap-2 justify-end"}>
                            <Button type={"submit"}>Get share link</Button>
                        </div>
                    </form>
                </Form>
                {showQR && <ShareCard fallbackUrl={url} beanLinkResponse={beanLinkResponse}/>}
            </CardContent>
        </Card>
    )
}


export default BeanInformationForm;