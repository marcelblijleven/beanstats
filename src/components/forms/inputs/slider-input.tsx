import {type Control} from "react-hook-form";
import {type FieldPath, type FieldValues} from "react-hook-form/dist/types";

import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Slider} from "@/components/ui/slider";

export interface ControlledSliderInputProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
    name: TName;
    label: string;
    placeholder?: string | undefined;
    control: Control<TFieldValues>
}

export default function SliderInput<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: ControlledSliderInputProps<TFieldValues, TName>) {
    return (
        <FormField<TFieldValues>
            control={props.control}
            name={props.name}
            render={({field}) => (
                <FormItem>
                    <FormLabel>{props.label}</FormLabel>
                    <FormControl>
                        <div className={"flex gap-3"}>
                            <Slider defaultValue={[0]} max={5} step={1} {...field} onValueChange={field.onChange} />
                            {field.value || "0"}
                        </div>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}