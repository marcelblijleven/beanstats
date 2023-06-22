import {Legend} from "@/components/ui/legend";
import {Button} from "@/components/ui/button";
import TextInput from "@/components/controlled-form/text-input";
import NumberInput from "@/components/controlled-form/number-input";
import HorizontalGroup from "@/components/controlled-form/horizontal-group";
import {
    Control,
    DefaultValues,
    FieldArrayWithId, FieldPath,
    UseFieldArrayRemove
} from "react-hook-form";
import {FieldValues} from "react-hook-form/dist/types";

export interface VarietyInformationFieldsetProps<TFieldValues extends FieldValues = FieldValues> {
    index: number,
    control: Control<TFieldValues>,
    field: FieldArrayWithId<Partial<DefaultValues<TFieldValues>>>
    remove: UseFieldArrayRemove,
}

export function VarietyInformationFieldset<TFieldValues extends FieldValues = FieldValues>({index, remove, control}: VarietyInformationFieldsetProps<TFieldValues>) {
    return (
        <fieldset>
            <div className={"flex justify-between"}>
                <Legend>{`Bean ${index + 1}`}</Legend>
                {index !== 0 && <Button variant={"outline"} onClick={() => remove(index)}>Remove</Button>}
            </div>
            <HorizontalGroup>
                <TextInput<TFieldValues>
                    name={`varietyInformation.${index}.country` as FieldPath<TFieldValues>}
                    label={"Country"} control={control} />
                <TextInput<TFieldValues>
                    name={`varietyInformation.${index}.region` as FieldPath<TFieldValues>}
                    label={"Region"} control={control} />
            </HorizontalGroup>
            <HorizontalGroup>
                <TextInput<TFieldValues>
                    name={`varietyInformation.${index}.farm` as FieldPath<TFieldValues>}
                    label={"Farm"} control={control} />
                <TextInput<TFieldValues>
                    name={`varietyInformation.${index}.farmer` as FieldPath<TFieldValues>}
                    label={"Farmer"} control={control} />
            </HorizontalGroup>
            <HorizontalGroup>
                <TextInput<TFieldValues>
                    name={`varietyInformation.${index}.elevation` as FieldPath<TFieldValues>}
                    label={"Elevation"} control={control} />
                <TextInput<TFieldValues>
                    name={`varietyInformation.${index}.variety` as FieldPath<TFieldValues>}
                    label={"Variety"} control={control} />
            </HorizontalGroup>
            <TextInput<TFieldValues>
                name={`varietyInformation.${index}.processing` as FieldPath<TFieldValues>}
                label={"Processing"} control={control} />
            <HorizontalGroup>
                <TextInput<TFieldValues>
                    name={`varietyInformation.${index}.harvested` as FieldPath<TFieldValues>}
                    label={"Harvested"} control={control} />
                <TextInput<TFieldValues>
                    name={`varietyInformation.${index}.certification` as FieldPath<TFieldValues>}
                    label={"Certification"} control={control} />
            </HorizontalGroup>
            <HorizontalGroup>
                <NumberInput<TFieldValues>
                    name={`varietyInformation.${index}.purchasePrice` as FieldPath<TFieldValues>}
                    label={"Purchase price"} control={control}  inputMode={"numeric"} />
                <NumberInput<TFieldValues>
                    name={`varietyInformation.${index}.fobPrice` as FieldPath<TFieldValues>}
                    label={"FOB price"} control={control} inputMode={"numeric"} />
            </HorizontalGroup>
        </fieldset>
    )
}