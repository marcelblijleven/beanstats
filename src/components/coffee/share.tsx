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
import CopyContainer from "@/components/copy-container";
import {useMediaQuery} from "@/lib/hooks";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {getShortShareLink} from "@/lib/share/actions";
import {useToast} from "@/components/ui/use-toast";

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

/**
 * Create bean information scheme from provided BeanDetails
 * @param bean
 */
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

/**
 * Represents a section where the Beanconqueror QR code can be rendered
 * @param url
 */
function QRCodeSection({url}: { url: string }) {
  const [show, setShow] = useState<boolean>(false);
  const [shareUrl, setShareUrl] = useState<string>();
  const {toast} = useToast();

  const onButtonClick = async () => {
    try {
      const shareLink = await getShortShareLink(url);
      if (!shareLink) {
        toast({
          title: "Error",
          description: "Something went wrong while creating the share url",
          variant: "destructive",
        });
        return;
      }

      setShareUrl(shareLink);
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
      <Button type={"button"} variant={"outline"} onClick={onButtonClick}>Generate QR code</Button>
    );
  }

  return (
    <>
      <div className={"text-muted-foreground text-sm"}>Scan this QR code with your camera app</div>
      <QRCode value={shareUrl}/>
      <CopyContainer value={shareUrl} displayValue={"Copy share url"} />
    </>
  );
}

/**
 * Container for all the share options
 * @param bean
 * @constructor
 */
function ShareContainer({bean}: { bean: BeanDetails }) {
  const values = createBeanInformationSchema(bean);

  if (!values) {
    return null;
  }

  const shareUrl = createUrlFromFormSchema(values);
  const beanstatsText = bean.isPublic ?
    "This coffee is set to public, so the url can be shared with others." :
    "To share this coffee via its url, you have to set it to 'public'.";

  return (
    <div className={"divide-y space-y-4 max-w-xl"}>
      <section className={"space-y-2"}>
        <h3 className={"font-semibold mb-1"}>Share via Beanstats link</h3>
        <div className={"text-sm text-muted-foreground"}>{beanstatsText}</div>
        {bean.isPublic && (
          <CopyContainer
            value={window.location.toString()}
            displayValue={"Copy url"}
          />
        )}
      </section>
      <section className={"space-y-2"}>
        <h3 className={"font-semibold mb-1"}>Share with Beanconqueror</h3>
          <QRCodeSection url={shareUrl}/>
      </section>
    </div>
  );
}

/**
 * Share component which renders a shareable link (if public) and the beanconqueror import QR Code
 * @param bean
 * @constructor
 */
export function ShareComponent({bean}: { bean: BeanDetails }) {
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (bean === null) {
    return null;
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant={"outline"} size={"sm"}>Share</Button>
        </DialogTrigger>
        <DialogContent className={"sm:max-w-[425px]"}>
          <DialogHeader>
            <DialogTitle>Share</DialogTitle>
            <DialogDescription>
              Share this coffee.
            </DialogDescription>
          </DialogHeader>
          <ShareContainer bean={bean} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className={buttonVariants({variant: "outline", size: "sm"})}>Share</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className={"max-w-xl"}>
          <DrawerTitle>Share</DrawerTitle>
          <DrawerDescription>Share this coffee.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className={"max-w-xl mx-auto"}>
          <ShareContainer bean={bean} />
          <DrawerClose className={"self-end"}>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}