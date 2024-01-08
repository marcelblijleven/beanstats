import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useToast} from "@/components/ui/use-toast";
import {decodeMessage} from "@/lib/beanconqueror/proto";
import {beanconqueror} from "@/lib/beanconqueror/proto/generated/beanconqueror";
import {BEANLINK_RE} from "@/lib/beanconqueror/validations/links";
import {followBeanLink} from "@/lib/beanlink";
import {getTextWithFlagSupport} from "@/lib/flags";

import Roast = beanconqueror.Roast;
import BeanMix = beanconqueror.BeanMix;
import BeanRoastingType = beanconqueror.BeanRoastingType;
import BeanProto = beanconqueror.BeanProto;
import IBeanInformation = beanconqueror.IBeanInformation;

import LabelledValue from "@/components/beanconqueror/share/view/labelled-value";

import {useEffect, useState} from "react";

import {Alert} from "@/components/alert";
import {ShortenLinkForm} from "@/components/forms/shorten-link-form";
import {type CheckedShareEntryType, type ShareEntryType, ShortShareCard} from "@/components/share-card";

const GeneralTabsContent = ({decoded}: {decoded: BeanProto}) => (
    <>
        <Card>
            <CardHeader>
                <CardTitle>General information</CardTitle>
            </CardHeader>
            <CardContent>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-2"}>
                    <LabelledValue label={"Name"} value={decoded.name} type={"string"}/>
                    <LabelledValue label={"Roaster"} value={decoded.roaster} type={"string"}/>
                    <LabelledValue type={"date"} label={"Buy date"} value={decoded.buyDate}/>
                    <LabelledValue type={"date"} label={"Roasting date"} value={decoded.roastingDate}/>
                    {decoded.roast !== Roast.CUSTOM_ROAST &&
                      <LabelledValue type={"string"} label={"Roast"} value={Roast[decoded.roast ?? 0]}/>}
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                    <LabelledValue type={"rating"} label={"Roast range"} value={decoded.roastRange}/>
                    <LabelledValue type={"string"} label={"Bean roasting type"}
                                   value={BeanRoastingType[decoded.beanRoastingType ?? 0]}/>
                    {decoded.roast === Roast.CUSTOM_ROAST &&
                      <LabelledValue type={"string"} label={"Roast (custom)"} value={decoded.roastCustom}/>}
                    <LabelledValue type={"string"} label={"Bean mix"} value={BeanMix[decoded.beanMix ?? 0]}/>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>More information</CardTitle>
            </CardHeader>
            <CardContent>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-2"}>
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                    <LabelledValue type={"number"} label={"Weight"} value={decoded.weight}/>
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                    <LabelledValue type={"number"} label={"Cost"} value={decoded.cost}/>
                    <LabelledValue
                        type={"string"} label={"Flavour profile"} value={decoded.aromatics} splitLabels
                    />
                    <LabelledValue type={"string"} label={"Cupping points"} value={decoded.cuppingPoints}/>
                    <LabelledValue type={"boolean"} label={"Decaffeinated"}
                                   value={decoded.decaffeinated}/>
                    <LabelledValue type={"string"} label={"Website"} value={decoded.url}/>
                    <LabelledValue type={"string"} label={"EAN"} value={decoded.eanArticleNumber}/>
                </div>
                {!!decoded.note && <LabelledValue type={"string"} label={"Notes"} value={decoded.note}/>}
            </CardContent>
        </Card>
    </>
);

const VarietyCard = ({info, index}: {info: IBeanInformation, index?: number}) => (
    <Card>
        <CardHeader>
            <CardTitle>
                {typeof index !== "undefined" ? `Bean ${index + 1}` : "Variety information"}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className={"grid grid-cols-2 gap-2"}>
                <LabelledValue label={"Country"} value={info.country} type={"string"} />
                <LabelledValue label={"Region"} value={info.region} type={"string"} />
                <LabelledValue label={"Farm"} value={info.farm} type={"string"} />
                <LabelledValue label={"Farmer"} value={info.farmer} type={"string"} />
                <LabelledValue label={"Elevation"} value={info.elevation} type={"string"} />
                <LabelledValue label={"Processing"} value={info.processing} type={"string"} />
                <LabelledValue label={"Harvested"} value={info.harvestTime} type={"string"} />
                <LabelledValue label={"Percentage"} value={info.percentage} type={"number"} />
                <LabelledValue label={"Bean certification"} value={info.certification} type={"string"} />
                <LabelledValue label={"Purchase price"} value={info.purchasingPrice} type={"number"} />
                <LabelledValue label={"FOB price"} value={info.fobPrice} type={"number"} />
            </div>
        </CardContent>
    </Card>
);

const VarietyTabsContent = ({decoded}: {decoded: BeanProto}) => (
    <>
        {decoded.beanInformation.map((info, index) => (
            <VarietyCard key={index} info={info} index={index} />
        ))}
    </>
);

const SharedBean = ({url}: { url: string}) => {
    const [viewUrl, setViewUrl] = useState<string>(url);
    const [data, setData] = useState<ShareEntryType>();
    const {toast} = useToast();

    let err;
    let decoded;

    useEffect(() => {
        setViewUrl(url ?? "");
    }, [url]);

    if (url.match(BEANLINK_RE)) {
        followBeanLink(url).then(response => {
            setViewUrl(response);
        }).catch(err => {
            toast({
                title: "Error",
                description: "Something went wrong",
                variant: "destructive",
            });
            console.log(err);
            return;
        });
    }

    try {
        decoded = decodeMessage(viewUrl);
    } catch (e) {
        err = e;
    }

    if (err !== undefined || decoded === undefined) {
        return (<Alert description={"Could not decode this url"} />);
    }

    return (
        <Card className={"w-full"}>
            <CardHeader>
                <CardTitle>{getTextWithFlagSupport(decoded.name)}</CardTitle>
            </CardHeader>
            <CardContent className={"p-4 md:p-6"}>
                <Tabs defaultValue={"general"}>
                    <TabsList>
                        <TabsTrigger value={"general"}>General</TabsTrigger>
                        <TabsTrigger value={"variety"}>Variety information</TabsTrigger>
                        <TabsTrigger value={"share"}>Share</TabsTrigger>
                    </TabsList>
                    <TabsContent value={"general"} className={"flex flex-col space-y-4"}>
                        <GeneralTabsContent decoded={decoded} />
                    </TabsContent>
                    <TabsContent value={"variety"} className={"flex flex-col space-y-4"}>
                        <VarietyTabsContent decoded={decoded} />
                    </TabsContent>
                    <TabsContent value={"share"} className={"flex flex-col space-y-4"}>
                        {!data && <ShortenLinkForm
                          link={viewUrl}
                          callback={(data: ShareEntryType) => setData(data)}
                          buttonText={"Create share link"}
                        />}
                        {!!data?.publicId && (
                            <ShortShareCard entry={data as CheckedShareEntryType} />
                        )}
                    </TabsContent>
                </Tabs>

            </CardContent>
        </Card>
    );
};

export default SharedBean;