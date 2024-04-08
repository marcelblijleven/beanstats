"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { type z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { shortenLinkSchema } from "@/lib/beanconqueror/validations/links";
import { type BeankLinkResponse, getBeanLink } from "@/lib/beanlink";
import { useToast } from "@/components/ui/use-toast";

type Inputs = z.infer<typeof shortenLinkSchema>;

export interface ShortenLinkFormProps {
  callback: (data: BeankLinkResponse) => void;
  link?: string | null;
  buttonText?: string;
}

export function ShortenLinkForm(props: ShortenLinkFormProps) {
  const { toast } = useToast();
  const form = useForm<Inputs>({
    resolver: zodResolver(shortenLinkSchema),
    defaultValues: {
      link: props.link ?? "",
    },
  });
  const { isSubmitting } = form.formState;
  const errorToast = () =>
    toast({
      title: "Error",
      description: "Something went wrong",
      variant: "destructive",
    });

  const onSubmit = async (data: Inputs) => {
    try {
      const response = await getBeanLink(data.link);

      if (!!response) {
        props.callback(response);
        return;
      }
      errorToast();
    } catch (e) {
      console.log(e);
      errorToast();
    }
  };

  return (
    <Form {...form}>
      <form
        className={"w-full grid gap-2"}
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField<Inputs>
          name={"link"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link</FormLabel>
              <FormControl>
                <Input placeholder={"Enter here"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className={"flex gap-2"} disabled={isSubmitting}>
          {props.buttonText ?? "Shorten"}
          {isSubmitting && (
            <Loader2Icon className={"h-5 w-5 animate-spin text-background"} />
          )}
        </Button>
      </form>
    </Form>
  );
}

