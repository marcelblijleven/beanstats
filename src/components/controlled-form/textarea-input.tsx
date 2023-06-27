import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Control} from "react-hook-form";
import {FieldPath, FieldValues} from "react-hook-form/dist/types";
import {Textarea} from "@/components/ui/textarea";

export interface ControlledTextAreaInputProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
    name: TName;
    label: string;
    placeholder?: string | undefined;
    control: Control<TFieldValues>
}

export default function TextareaInput<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: ControlledTextAreaInputProps<TFieldValues, TName>) {
    return (
        <FormField<TFieldValues, TName>
            control={props.control}
            name={props.name}
            render={({field}) => (
                <FormItem>
                    <FormLabel>{props.label}</FormLabel>
                    <FormControl>
                        <Textarea {...field} onChange={field.onChange} placeholder={props.placeholder}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}