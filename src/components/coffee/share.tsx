"use client";

import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getBeanLink } from "@/lib/beanlink";
import CopyContainer from "@/components/copy-container";

import { useToast } from "@/components/ui/use-toast";

const QRCode = dynamic(
  () => import("@/components/qrcode-card").then((module) => module.QRCode),
  { ssr: false },
);

/**
 * Maps the length value to a BeanMix value, where
 * 0 is unknown, 1 is single origin and 2 is a blend
 * @param length
 */
function getBeanMix(
  length: number,
): "UNKNOWN_BEAN_MIX" | "SINGLE_ORIGIN" | "BLEND" {
  if (length < 0 || length === 0) return "UNKNOWN_BEAN_MIX";
  if (length > 1) return "BLEND";
  return "SINGLE_ORIGIN";
}

/**
 * Represents a section where the Beanconqueror QR code can be rendered
 * @param url
 */
function QRCodeSection({ url }: { url: string }) {
  const [show, setShow] = useState<boolean>(false);
  const [shareUrl, setShareUrl] = useState<string>();
  const { toast } = useToast();

  const onButtonClick = async () => {
    try {
      const beanlink = await getBeanLink(url);
      setShareUrl(beanlink.link);
      setShow(true);
      toast({
        title: "Success",
        description: "Successfully created a shareable Beanconqueror link",
        variant: "default",
      });
    } catch (e) {
      console.error(e);
    }
  };

  if (!show || !shareUrl) {
    return (
      <Button type={"button"} variant={"outline"} onClick={onButtonClick}>
        Generate QR code
      </Button>
    );
  }

  return (
    <>
      <div className={"text-muted-foreground text-sm"}>
        Scan this QR code with your camera app
      </div>
      <QRCode value={shareUrl} />
      <CopyContainer value={shareUrl} displayValue={"Copy share url"} />
    </>
  );
}
