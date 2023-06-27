import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Control} from "react-hook-form";
import {FieldPath, FieldValues} from "react-hook-form/dist/types";
import {Checkbox} from "@/components/ui/checkbox";

export interface ControlledCheckboxInputProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
    name: TName;
    label: string;
    placeholder?: string | undefined;
    control: Control<TFieldValues>
}

export default function CheckboxInput<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: ControlledCheckboxInputProps<TFieldValues, TName>) {
    return (
        <FormField<TFieldValues, TName>
            control={props.control}
            name={props.name}
            render={({field}) => (
                <FormItem className={"flex flex-col gap-1"}>
                    <FormLabel>{props.label}</FormLabel>
                    <FormControl>
                        <Checkbox
                            checked={(field.value as boolean)}
                            onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}