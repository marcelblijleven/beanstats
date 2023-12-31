"use client";

import dynamic from "next/dynamic";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import {Button, buttonVariants} from "@/components/ui/button";
import {type SelectBean} from "@/lib/db/beans/get-bean-details";
import {createUrlFromFormSchema} from "@/lib/beanconqueror/proto/proto-helpers";
import {type beanInformationFormSchema} from "@/lib/beanconqueror/validations/bean-information-form-schema";
import {useState} from "react";
import {getBeanLink} from "@/lib/beanlink";
import CopyContainer from "@/components/copy-container";

const QRCode = dynamic(() => import("@/components/qrcode-card").then(module => module.QRCode), {ssr: false});

type BeanDetails = Awaited<SelectBean>;
type Varieties = BeanDetails["varieties"];

/**
 * Maps the length value to a BeanMix value, where
 * 0 is unknown, 1 is single origin and 2 is a blend
 * @param length
 */
function getBeanMix(length: number): "UNKNOWN_BEAN_MIX" | "SINGLE_ORIGIN" | "BLEND" {
  if (length < 0 || length === 0) return "UNKNOWN_BEAN_MIX";
  if (length > 1) return "BLEND";
  return "SINGLE_ORIGIN";
}

/**
 * Map varieties to bean information schema
 * @param varieties
 */
function getVarietyInformation(varieties: Varieties): beanInformationFormSchema["varietyInformation"] {
  if (varieties.length === 0) {
    return undefined;
  }

  return varieties.map(variety => ({
    variety: variety.name ?? undefined,
    country: variety.country ?? undefined,
    region: variety.region ?? undefined,
    farm: variety.farm ?? undefined,
    farmer: variety.farmer ?? undefined,
    elevation: variety.elevation ?? undefined,
    processing: variety.processing ?? undefined,
  }));
}

function createBeanInformationSchema(bean: BeanDetails): beanInformationFormSchema | null {
  if (bean === undefined) return null;


  return {
    coffeeName: bean.name,
    roaster: bean.roaster.name,
    roastingDate: bean.roastDate ? new Date(bean.roastDate) : undefined,
    // beanRoastingType: NOT IMPLEMENTED
    // degreeOfRoast: NOT IMPLEMENTED
    // roast: NOT IMPLEMENTED
    beanMix: getBeanMix(bean.varieties.length),
    weight: bean.weight ?? undefined,
    cost: bean.price ?? undefined,
    // flavourProfile: // TODO: add this to the frontend
    // cuppingPoints: NOT IMPLEMENTED
    // decaffeinated: bean.isDecaf // TODO: add this too
    notes: bean.notes ?? undefined,
    varietyInformation: getVarietyInformation(bean.varieties),
  };
}

function QRCodeSection({url}: { url: string }) {
  const [show, setShow] = useState<boolean>(false);
  const [shareUrl, setShareUrl] = useState<string>();
  const onButtonClick = async () => {
    try {
      const beanlink = await getBeanLink(url);
      setShareUrl(beanlink.link);
      setShow(true);
    } catch (e) {
      console.error(e);
    }
  };


  if (!show || !shareUrl) {
    return (
      <Button type={"button"} onClick={onButtonClick}>Generate QR code</Button>
    );
  }

  return (
    <div className={"flex flex-col gap-2 items-center"}>
      <div className={"text-muted-foreground text-sm"}>Scan this QR code with your camera app</div>
      <QRCode value={shareUrl}/>
    </div>
  );
}


/**
 * Share component which renders a shareable link (if public) and the beanconqueror import QR Code
 * @param bean
 * @constructor
 */
export function ShareComponent({bean}: { bean: BeanDetails }) {
  if (bean === null) {
    return null;
  }

  const values = createBeanInformationSchema(bean);

  if (!values) {
    return null;
  }

  const shareUrl = createUrlFromFormSchema(values);

  return (
    <Drawer>
      <DrawerTrigger className={buttonVariants({variant: "outline", size: "sm"})}>Share</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className={"max-w-xl mx-auto"}>
          <DrawerTitle>Share this coffee</DrawerTitle>
          {bean.isPublic && <DrawerDescription>This bean is public and can be shared by link or scanned by
            Beanconqueror</DrawerDescription>}
          {!bean.isPublic &&
            <DrawerDescription>This bean is not public so it can only be scanned by Beanconqueror</DrawerDescription>}
        </DrawerHeader>
        <DrawerFooter className={"max-w-xl mx-auto"}>
          <div className={"flex items-center gap-2 max-w-xl mx-auto"}>
            {bean.isPublic && (
              <CopyContainer
                value={window.location.toString()}
                displayValue={"Copy url"}
              />
            )}
            <QRCodeSection url={shareUrl}/>
          </div>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}