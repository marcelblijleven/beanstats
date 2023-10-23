import QRCodeCard from "@/components/qrcode-card";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import CopyContainer from "@/components/copy-container";
import {type BeanLinkResponse} from "@/lib/beanlink";

export const BeanLinkCard = ({response}: {response: BeanLinkResponse }) => (
    <Card>
        <CardHeader>
            <CardTitle>{`🫘 ${response.name}, ${response.roaster ?? ""}`}</CardTitle>
        </CardHeader>
        <CardContent className={"flex flex-col space-y-2"}>
            <CopyContainer value={response.link} />
            <CopyContainer
                value={`:beans: ${response.name} ${response.roaster} <${response.link}>`}
                displayValue={"Copy for discord"}
            />
        </CardContent>
    </Card>
)


const ShareCard = ({fallbackUrl, beanLinkResponse}: {fallbackUrl?: string | undefined, beanLinkResponse?: BeanLinkResponse | undefined}) => (
    <Card className={"w-full"}>
        <CardHeader>
            <CardTitle>Share or import</CardTitle>
        </CardHeader>
        <CardContent className={"flex flex-col space-y-2"}>
            {beanLinkResponse?.link && (
                <>
                    <BeanLinkCard response={beanLinkResponse} />
                    <QRCodeCard value={beanLinkResponse.link} />
                </>
            )}
            {(!beanLinkResponse?.link && !!fallbackUrl) && (
                <QRCodeCard value={fallbackUrl} />
            )}
        </CardContent>
    </Card>
);

export default ShareCard