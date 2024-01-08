"use client";

import {useForm} from "react-hook-form";
import {useFormState, useFormStatus} from "react-dom";
import {type z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import {processShortenLink} from "@/app/beanconqueror/(share)/shorten/actions";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertCircle, Loader} from "lucide-react";
import {useToast} from "@/components/ui/use-toast";
import {Button} from "@/components/ui/button";
import {shortLinkFormSchema} from "@/components/beanconqueror/share/shorten/schema";

function SubmitButton() {
  const {pending} = useFormStatus();
  return (
    <Button type={"submit"} aria-disabled={pending} disabled={pending}>
      {pending ? "Shortening" : "Shorten"}
      {pending && <Loader className={"animate-spin h-4 w-4 ml-2"} />}
    </Button>
  )
}

export function ShortLinkForm() {
  const form = useForm<z.infer<typeof shortLinkFormSchema>>({
    resolver: zodResolver(shortLinkFormSchema),
    defaultValues: {
      link: "",
    }
  });
  const [state, action] = useFormState(processShortenLink, {error: null});
  const {toast} = useToast();

  const validateData = (formData: FormData) => {
    const parseResult = shortLinkFormSchema.shape.link.safeParse(formData.get("link"));

    if (!parseResult.success) {
      toast({
        title: "Invalid url",
        description: "Did not receive a valid Beanconqueror url",
        variant: "destructive",
      });
      return;
    }
    action(formData);
  };

  return (
    <Form {...form}>
      <form action={validateData}>
        <fieldset className={"flex items-end gap-2"}>
          <FormField<z.infer<typeof shortLinkFormSchema>>
            name={"link"}
            control={form.control}
            render={({field}) => (
              <FormItem>
                <FormLabel>Link</FormLabel>
                <FormControl>
                  <Input placeholder={"Enter here"} {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <SubmitButton />
        </fieldset>
        {!!state.error && (
          <Alert variant={"destructive"}>
            <AlertCircle className={"h-4 w-4"}/>
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {state.error}
            </AlertDescription>
          </Alert>
        )}
      </form>
    </Form>
  );
}