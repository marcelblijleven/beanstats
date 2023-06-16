// https://beanconqueror.com?shareUserBean0=ChtSd2FuZGEgcm9vdHMgb3JpZ2luIEludGFuZ28SGDIwMjMtMDYtMTNUMDk6MzQ6MDAuMDAwWhoYMjAyMy0wNS0yM1QwOTozNDowMC4wMDBaIgAqIlRleGVsc2UgQnJhbmRpbmcgKFRleGVsIPCfh7Pwn4exKSAyADgAQABIAVIAWgpSZWQgRnJ1aXRzYPoBaABwC4IBAIgBAJIBAJoBAKABAKoBKwoGUndhbmRhEglMYWtlIEtpdnUaB0ludGFuZ28qBDE1MDBCB05hdHVyYWywAQC6ARYIABAAGgAgACgAMAA6AEAASABQAFgAwgEAyAEA0AEA2gEWCAAQABgAIAAoADAAOABAAEgAUABYAOIBAgoA
// https://beanconqueror.com?shareUserBean0=CglGYWtlIG5hbWUSGDIwMjMtMDYtMTVUMTM6NDI6MDAuMDAwWhoYMjAyMy0wNi0xNVQxMzo0MjowMC4wMDBaIgtGYWtlIG5vdGVzICoMRmFrZSByb2FzdGVyMgA4DUADSAJSDWN1c3RvbSBkZWdyZWVaD0xla2tlciwgcHJvZmllbGB7aABwDIIBBTM0LjU2iAEBkgEDVXJsmgEDRWFuoAEAqgF8Cg5GYWtlIGNvdW50cnkgMRINRmFrZSByZWdpb24gMRoLRmFrZSBmYXJtIDEiDUZha2UgZmFybWVyIDEqBDE1MDAyC0hhcnZlc3RlZCAxOglWYXJpZXR5IDFCDFByb2Nlc3NpbmcgMUoHQ2VydGkgMVAMWMDEB2DShdjMBKoBFQoJQ291bnRy&shareUserBean1=eSAyEghSZWdpb24gMrABAboBFggAEAAaACAAKAAwADoAQABIAFAAWADCAQDIAQDQAQDaARYIABAAGAAgACgAMAA4AEAASABQAFgA4gECCgA=
import {decodeMessage} from "@/lib/beanconqueror/proto";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {getTextWithFlagSupport} from "@/lib/flags";
import {getDateString} from "@/lib/dates";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertCircle} from "lucide-react";
import {Badge} from "@/components/ui/badge"

import {beanconqueror} from "@/lib/beanconqueror/proto/generated/beanconqueror";
import Roast = beanconqueror.Roast;
import BeanMix = beanconqueror.BeanMix;
import BeanRoastingType = beanconqueror.BeanRoastingType;
import BeanProto = beanconqueror.BeanProto;
import IBeanInformation = beanconqueror.IBeanInformation;
import Rating from "@/app/beanconqueror/share/view/components/rating";

const LabelledValue = ({
                           label,
                           value,
                           type,
                           splitLabels
                       }: { label: string, value: any, type: string, splitLabels?: boolean }) => {
    let parsed;

    if (value === null || value === undefined || value === "") {
        parsed = "-";
    } else {
        switch (type) {
            case "boolean":
                parsed = value ? "Yes" : "No";
                break;
            case "date":
                parsed = getDateString(new Date(value), false, Intl.DateTimeFormat().resolvedOptions().timeZone);
                break;
            case "string":
                value = (value as string).replaceAll("_", " ");
                if (splitLabels && (value as string).includes(",")) {
                    parsed = (
                        <div className={"flex gap-1 flex-wrap"}>
                            {(value as string).split(",").map(part => {
                                const content = getTextWithFlagSupport(part.trim().toLowerCase());
                                return (
                                    <Badge variant={"outline"} className={"shrink-0"} key={part.trim()}>{content}</Badge>
                                )
                            })}
                        </div>
                    );
                } else {
                    parsed = getTextWithFlagSupport(value.trim().toLowerCase());
                }
                break;
            case "rating":
                parsed = (<Rating value={value}/>);
                break;
            case "number":
            default:
                parsed = value;
        }
    }

    return (
        <div className={"flex flex-col gap-1"}>
            <span className={"text-xs font-semibold"}>{label}</span>
            <span className={"text-md capitalize"}>{parsed}</span>
        </div>
    )
}

const GeneralTabsContent = ({decoded}: {decoded: BeanProto}) => (
    <TabsContent value={"general"} className={"flex flex-col space-y-4"}>
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
                      <LabelledValue type={"string"} label={"Roast"} value={Roast[decoded.roast || 0]}/>}
                    <LabelledValue type={"rating"} label={"Roast range"} value={decoded.roastRange}/>
                    <LabelledValue type={"string"} label={"Bean roasting type"}
                                   value={BeanRoastingType[decoded.beanRoastingType || 0]}/>
                    {decoded.roast === Roast.CUSTOM_ROAST &&
                      <LabelledValue type={"string"} label={"Roast (custom)"} value={decoded.roastCustom}/>}
                    <LabelledValue type={"string"} label={"Bean mix"} value={BeanMix[decoded.beanMix || 0]}/>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>More information</CardTitle>
            </CardHeader>
            <CardContent>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-2"}>
                    <LabelledValue type={"number"} label={"Weight"} value={decoded.weight}/>
                    <LabelledValue type={"boolean"} label={"Cost"} value={decoded.cost}/>
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
    </TabsContent>
)

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
)

const VarietyTabsContent = ({decoded}: {decoded: BeanProto}) => (
    <TabsContent value={"variety"}>
        <div  className={"flex flex-col space-y-2"}>
            {decoded.beanInformation.map((info, index) => (
                <VarietyCard key={index} info={info} index={index} />
            ))}
        </div>
    </TabsContent>
)

const SharedBean = ({url, validUrl}: { url: string | undefined, validUrl: boolean }) => {
    if (!url || !validUrl) {
        return null;
    }

    let err;
    let decoded;

    try {
        decoded = decodeMessage(url);
    } catch (e) {
        err = e;
    }

    if (err !== undefined || decoded === undefined) {
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4"/>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    Could not decode this url into bean information
                </AlertDescription>
            </Alert>
        )
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>{getTextWithFlagSupport(decoded.name)}</CardTitle>
            </CardHeader>
            <CardContent className={"p-4 md:p-6"}>
                <Tabs defaultValue={"general"}>
                    <TabsList>
                        <TabsTrigger value={"general"}>General</TabsTrigger>
                        <TabsTrigger value={"variety"}>Variety information</TabsTrigger>
                    </TabsList>
                    <GeneralTabsContent decoded={decoded} />
                    <VarietyTabsContent decoded={decoded} />
                </Tabs>

            </CardContent>
        </Card>
    )
}

export default SharedBean;