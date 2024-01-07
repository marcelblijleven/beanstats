import {type CheckedState} from "@radix-ui/react-checkbox";
import {type DefaultValues, type FieldArrayWithId, type UseFieldArrayRemove, type UseFormReturn} from "react-hook-form";
import {type FieldValues} from "react-hook-form/dist/types";

import DatePickerInput from "@/components/forms/inputs/date-picker";
import {FormItemWrapper} from "@/components/forms/inputs/form-item-wrapper";
import HorizontalGroup from "@/components/forms/inputs/horizontal-group";
import SelectFormField from "@/components/forms/inputs/select-input";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {FormField} from "@/components/ui/form";
import {Legend} from "@/components/ui/legend";
import {type beanInformationFormSchema} from "@/lib/beanconqueror/validations/bean-information-form-schema";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {beanconqueror} from "@/lib/beanconqueror/proto/generated/beanconqueror";

import Roast = beanconqueror.Roast;
import BeanRoastingType = beanconqueror.BeanRoastingType;


import BeanMix = beanconqueror.BeanMix;

import SliderInput from "@/components/forms/inputs/slider-input";

export interface FieldsetProps {
    form: UseFormReturn<beanInformationFormSchema>
}

export interface VarietyInformationFieldsetProps<TFieldValues extends FieldValues = FieldValues> {
    index: number,
    form: UseFormReturn<beanInformationFormSchema>,
    field: FieldArrayWithId<Partial<DefaultValues<TFieldValues>>>
    remove: UseFieldArrayRemove,
}

export function GeneralInformationFieldset({form}: FieldsetProps) {
    return (
        <fieldset className={"space-y-3"}>
            <Legend>General information</Legend>
            <FormField<beanInformationFormSchema>
                control={form.control}
                name={"coffeeName"}
                render={({field}) => (
                    <FormItemWrapper label={"Name"}>
                        <Input placeholder={"Enter the name of the beans"} type={"text"} {...field} />
                    </FormItemWrapper>
                )}
            />
            <FormField<beanInformationFormSchema>
                control={form.control}
                name={"roaster"}
                render={({field}) => (
                    <FormItemWrapper label={"Roaster"}>
                        <Input placeholder={"Enter the name of the roaster"} type={"text"} {...field} />
                    </FormItemWrapper>
                )}
            />
            <DatePickerInput<beanInformationFormSchema> name={"roastingDate"} control={form.control} label={"Roast date"}/>
            <HorizontalGroup>
                <SelectFormField<beanInformationFormSchema>
                    name={"beanRoastingType"}
                    label={"Roast"}
                    control={form.control}
                    default={"UNKNOWN_BEAN_ROASTING_TYPE"}
                    enum={BeanRoastingType}
                />
                <SliderInput<beanInformationFormSchema>
                    name={"degreeOfRoast"}
                    control={form.control}
                    label={"Degree of roast"}
                />
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
    );
}

export function MoreInformationFieldset({form}: FieldsetProps) {
    return (
        <fieldset className={"space-y-3"}>
            <Legend>More information</Legend>
            <FormField<beanInformationFormSchema>
                control={form.control}
                name={"weight"}
                rules={{}}
                render={({field}) => (
                    <FormItemWrapper label={"Weight"} description={"Decimal points currently not supported"}>
                        <Input placeholder={"Weight"} type={"number"} min={0} {...field} />
                    </FormItemWrapper>
                )}
            />
            <FormField<beanInformationFormSchema>
                control={form.control}
                name={"cost"}
                render={({field}) => (
                    <FormItemWrapper label={"Cost"} description={"Decimal points currently not supported"}>
                        <Input placeholder={"Cost"} type={"number"} min={0} {...field} />
                    </FormItemWrapper>
                )}
            />
            <FormField<beanInformationFormSchema>
                control={form.control}
                name={"flavourProfile"}
                render={({field}) => (
                    <FormItemWrapper label={"Flavour profile"}>
                        <Input placeholder={"Enter some taste notes"} type={"text"} {...field} />
                    </FormItemWrapper>
                )}
            />
            <FormField<beanInformationFormSchema>
                control={form.control}
                name={"cuppingPoints"}
                render={({field}) => (
                    <FormItemWrapper label={"Cupping points"}>
                        <Input placeholder={"Cupping points"} type={"number"}
                               inputMode={"decimal"}
                               step={.1} min={0} {...field}/>
                    </FormItemWrapper>
                )}
            />
            <FormField<beanInformationFormSchema>
                control={form.control}
                name={"decaffeinated"}
                render={({field}) => (
                    <FormItemWrapper
                        className={"flex flex-col gap-1"}
                        label={"Decaffeinated"}
                    >
                        <Checkbox
                            checked={(field.value as CheckedState)}
                            onCheckedChange={field.onChange}
                        />
                    </FormItemWrapper>
                )}
            />
            <FormField<beanInformationFormSchema>
                control={form.control}
                name={"website"}
                render={({field}) => (
                    <FormItemWrapper label={"Website"}>
                        <Input placeholder={"Enter the website of the beans"} type={"text"} {...field} />
                    </FormItemWrapper>
                )}
            />
            <FormField<beanInformationFormSchema>
                control={form.control}
                name={"eanArticle"}
                render={({field}) => (
                    <FormItemWrapper label={"EAN / Article number"}>
                        <Input placeholder={"Enter the EAN or article number"} type={"text"} {...field} />
                    </FormItemWrapper>
                )}
            />
            <FormField<beanInformationFormSchema>
                control={form.control}
                name={"notes"}
                render={({field}) => (
                    <FormItemWrapper label={"Notes"}>
                        <Textarea
                          onChange={field.onChange}
                          value={field.value as string | undefined}
                          placeholder={"Enter some notes"}
                        />
                    </FormItemWrapper>
                )}
            />
        </fieldset>
    );
}

export function VarietyInformationFieldset<TFieldValues extends FieldValues = FieldValues>({index, remove, form}: VarietyInformationFieldsetProps<TFieldValues>) {
    return (
        <fieldset className={"space-y-3"}>
            <div className={"flex justify-between mb-3"}>
                <Legend className={"text-md"}>{`Bean ${index + 1}`}</Legend>
                {index !== 0 && <Button variant={"outline"} onClick={() => remove(index)}>Remove</Button>}
            </div>
            <HorizontalGroup>
                <FormField<beanInformationFormSchema>
                    control={form.control}
                    name={`varietyInformation.${index}.country` as const}
                    render={({field}) => (
                        <FormItemWrapper label={"Country"}>
                            <Input placeholder={"Enter the origin country"} {...field} />
                        </FormItemWrapper>
                    )}
                />
                <FormField<beanInformationFormSchema>
                    control={form.control}
                    name={`varietyInformation.${index}.region` as const}
                    render={({field}) => (
                        <FormItemWrapper label={"Region"}>
                            <Input placeholder={"Enter the origin region"} {...field} />
                        </FormItemWrapper>
                    )}
                />
            </HorizontalGroup>
            <HorizontalGroup>
                <FormField<beanInformationFormSchema>
                    control={form.control}
                    name={`varietyInformation.${index}.farm` as const}
                    render={({field}) => (
                        <FormItemWrapper label={"Farm"}>
                            <Input placeholder={"Name of the farm"} {...field} />
                        </FormItemWrapper>
                    )}
                />
                <FormField<beanInformationFormSchema>
                    control={form.control}
                    name={`varietyInformation.${index}.farmer` as const}
                    render={({field}) => (
                        <FormItemWrapper label={"Farmer"}>
                            <Input placeholder={"Name of the farmer"} {...field} />
                        </FormItemWrapper>
                    )}
                />
            </HorizontalGroup>
            <HorizontalGroup>
                <FormField<beanInformationFormSchema>
                    control={form.control}
                    name={`varietyInformation.${index}.elevation` as const}
                    render={({field}) => (
                        <FormItemWrapper label={"Elevation"}>
                            <Input placeholder={"Enter the elevation"} {...field} />
                        </FormItemWrapper>
                    )}
                />
                <FormField<beanInformationFormSchema>
                    control={form.control}
                    name={`varietyInformation.${index}.variety` as const}
                    render={({field}) => (
                        <FormItemWrapper label={"Variety"}>
                            <Input placeholder={"Enter bean variety"} {...field} />
                        </FormItemWrapper>
                    )}
                />
            </HorizontalGroup>
            <FormField<beanInformationFormSchema>
                control={form.control}
                name={`varietyInformation.${index}.processing` as const}
                render={({field}) => (
                    <FormItemWrapper label={"Processing"}>
                        <Input placeholder={"Enter processing method"} {...field} />
                    </FormItemWrapper>
                )}
            />
            <HorizontalGroup>
                <FormField<beanInformationFormSchema>
                    control={form.control}
                    name={`varietyInformation.${index}.harvested` as const}
                    render={({field}) => (
                        <FormItemWrapper label={"Harvested"}>
                            <Input placeholder={"Enter when the beans were harvested"} {...field} />
                        </FormItemWrapper>
                    )}
                />
                <FormField<beanInformationFormSchema>
                    control={form.control}
                    name={`varietyInformation.${index}.certification` as const}
                    render={({field}) => (
                        <FormItemWrapper label={"Certification"}>
                            <Input placeholder={"Enter certification"}  {...field} />
                        </FormItemWrapper>
                    )}
                />
            </HorizontalGroup>
            <HorizontalGroup>
                <FormField<beanInformationFormSchema>
                    control={form.control}
                    name={`varietyInformation.${index}.purchasePrice` as const}
                    render={({field}) => (
                        <FormItemWrapper label={"Purchase price"}>
                            <Input type={"number"} inputMode={"numeric"} placeholder={"Enter purchase price"} {...field} />
                        </FormItemWrapper>
                    )}
                />
                <FormField<beanInformationFormSchema>
                    control={form.control}
                    name={`varietyInformation.${index}.fobPrice` as const}
                    render={({field}) => (
                        <FormItemWrapper label={"FOB price"}>
                            <Input type={"number"} inputMode={"numeric"} placeholder={"Enter FOB price"} {...field} />
                        </FormItemWrapper>
                    )}
                />
            </HorizontalGroup>
        </fieldset>
    );
}