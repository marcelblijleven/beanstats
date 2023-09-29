import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {cn} from "@/lib/utils";
import {Popover, PopoverTrigger} from "@radix-ui/react-popover";
import {Button} from "@/components/ui/button";
import {CalendarIcon} from "lucide-react";
import {PopoverContent} from "@/components/ui/popover";
import {Calendar} from "@/components/ui/calendar";
import {format} from "date-fns";
import {Control} from "react-hook-form";
import {FieldPath, FieldValues} from "react-hook-form/dist/types";

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
                                disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}