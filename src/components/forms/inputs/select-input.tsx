import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectValue, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select";
import {type Control} from "react-hook-form";
import {type FieldPath, type FieldValues} from "react-hook-form/dist/types";

export interface SelectFormFieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
    name: TName;
    label: string;
    control: Control<TFieldValues>;
    default: string,
    enum: object
}

export default function SelectInput<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: SelectFormFieldProps<TFieldValues, TName>) {
    return (
        <FormField<TFieldValues>
            control={props.control}
            name={props.name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{props.label}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={props.default}>
                        <FormControl>
                            <SelectTrigger className={"capitalize text-base"}>
                                <SelectValue className={"capitalize text-base"} placeholder="Select an option" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {Object.keys(props.enum).map(key => {
                                return (
                                    <SelectItem className={"capitalize"} key={key} value={key}>{key.toLowerCase().replaceAll("_", " ")}</SelectItem>
                                )
                            })}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}