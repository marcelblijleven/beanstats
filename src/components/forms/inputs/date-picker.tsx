import {Popover, PopoverTrigger} from "@radix-ui/react-popover";
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";
import {type Control} from "react-hook-form";
import {type FieldPath, type FieldValues} from "react-hook-form/dist/types";

import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {PopoverContent} from "@/components/ui/popover";
import {cn} from "@/lib/utils";

export interface DatePickerFormFieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
    name: TName;
    label: string;
    control: Control<TFieldValues>;
}


export default function DatePickerInput<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: DatePickerFormFieldProps<TFieldValues, TName>) {
    return (
        <FormField<TFieldValues>
            control={props.control}
            name={props.name}
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>{props.label}</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full pl-3 text-left text-base font-normal",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value ? (
                                        format(typeof field.value === 'string' ? new Date(field.value) : field.value, "yyyy-MM-dd")
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => {
                                    // This will disable any future dates
                                    return new Date(date) > new Date() || date < new Date("1900-01-01");
                                }}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}