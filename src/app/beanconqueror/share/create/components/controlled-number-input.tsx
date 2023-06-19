import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Control} from "react-hook-form";
import {FieldPath, FieldValues} from "react-hook-form/dist/types";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {HTMLAttributes} from "react";

export interface ControlledNumberInputProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>
extends HTMLAttributes<HTMLInputElement>{
    name: TName;
    label: string;
    placeholder?: string | undefined;
    control: Control<TFieldValues>
}

export default function ControlledNumberInput<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
    >({name, label, placeholder, control, ...props}: ControlledNumberInputProps<TFieldValues, TName>) {
    return (
        <FormField<TFieldValues, TName>
            control={control}
            name={name}
            render={({field}) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} {...field} {...props} type={"number"} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}