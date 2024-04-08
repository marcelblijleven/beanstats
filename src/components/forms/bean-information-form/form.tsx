"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type MouseEvent, useEffect, useState } from "react";
import {
  useFieldArray,
  type UseFieldArrayProps,
  useForm,
} from "react-hook-form";

import {
  GeneralInformationFieldset,
  MoreInformationFieldset,
  VarietyInformationFieldset,
} from "@/components/forms/bean-information-form/fieldsets";
import ShareCard from "@/components/share-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Legend } from "@/components/ui/legend";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createUrlFromFormSchema } from "@/lib/beanconqueror/proto/proto-helpers";
import {
  defaultVarietyInformation,
  beanInformationFormSchema,
} from "@/lib/beanconqueror/validations/bean-information-form-schema";
import { BeanLinkResponse, getBeanLink } from "@/lib/beanlink";

export default function BeanInformationForm() {
  const [activeTab, setActiveTab] = useState<"general" | "variety">("general");
  const [showQR, setShowQR] = useState(false);
  const [url, setUrl] = useState("");
  const [beanLinkResponse, setBeanLinkResponse] = useState<
    BeanLinkResponse | undefined
  >();

  const form = useForm<beanInformationFormSchema>({
    resolver: zodResolver(beanInformationFormSchema),
    defaultValues: {
      coffeeName: "",
      roaster: "",
      weight: "",
      cost: "",
      flavourProfile: "",
      cuppingPoints: "",
      website: "",
      eanArticle: "",
      varietyInformation: [],
      notes: "",
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "varietyInformation",
    control: form.control,
    rules: {
      minLength: 0,
      maxLength: 10,
    },
  } as UseFieldArrayProps<beanInformationFormSchema, "varietyInformation">);

  const blend = form.watch("beanMix");

  const onSubmit = (values: beanInformationFormSchema) => {
    const shareUrl = createUrlFromFormSchema(values);
    setUrl(shareUrl);
    setShowQR(true);
    getBeanLink(shareUrl)
      .then((response) => setBeanLinkResponse(response))
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    append(
      { ...defaultVarietyInformation },
      {
        shouldFocus: false,
      },
    );
  }, [append]);

  const onReset = (event: MouseEvent) => {
    event.preventDefault();
    // Reset form
    form.reset({
      notes: "",
      varietyInformation: [{ ...defaultVarietyInformation }],
    });
    form.setFocus("coffeeName");

    // Reset state
    setShowQR(false);
    setUrl("");
    setActiveTab("general");
  };

  return (
    <Card className={"w-full"}>
      <CardHeader>
        <CardTitle>Create share link form</CardTitle>
        <CardDescription>
          Use the form to create a share link for the Beanconqueror app. It will
          automatically create a shareable beanl.ink url too, with the option to
          copy it with formatting for discord. Alternatively, you can use your
          phone&apos;s camera to scan the QR Code and import it directly into
          Beanconqueror.
        </CardDescription>
      </CardHeader>
      <CardContent className={"space-y-3"}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={"w-full space-y-3"}
          >
            <Tabs defaultValue={"general"} value={activeTab}>
              <TabsList className={"mb-4"}>
                <TabsTrigger
                  value={"general"}
                  onClick={() => setActiveTab("general")}
                >
                  General info
                </TabsTrigger>
                <TabsTrigger
                  value={"variety"}
                  onClick={() => setActiveTab("variety")}
                >
                  Variety info
                </TabsTrigger>
              </TabsList>
              <TabsContent value={"general"} className={"space-y-3"}>
                <GeneralInformationFieldset form={form} />
                <Separator />
                <MoreInformationFieldset form={form} />
              </TabsContent>
              <TabsContent value={"variety"} className={"space-y-3"}>
                <Legend>Variety information</Legend>
                <fieldset className={"space-y-3"}>
                  {fields.map((field, index) => (
                    <>
                      <VarietyInformationFieldset<beanInformationFormSchema>
                        key={field.id}
                        field={field}
                        index={index}
                        form={form}
                        remove={remove}
                      />
                      {index !== fields.length - 1 && (
                        <Separator key={`sep-${field.id}`} />
                      )}
                    </>
                  ))}
                  {blend === "BLEND" && (
                    <Button
                      onClick={(event) => {
                        event.preventDefault();
                        append({ ...defaultVarietyInformation });
                      }}
                    >
                      Add additional bean
                    </Button>
                  )}
                </fieldset>
              </TabsContent>
            </Tabs>
            <div className={"flex gap-2 justify-end"}>
              <Button variant={"destructive"} onClick={onReset}>
                Reset form{" "}
              </Button>
              <Button type={"submit"}>Get share link</Button>
            </div>
          </form>
        </Form>
        {showQR && (
          <ShareCard fallbackUrl={url} beanLinkResponse={beanLinkResponse} />
        )}
      </CardContent>
    </Card>
  );
}
