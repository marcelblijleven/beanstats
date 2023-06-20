import QRCodeCard from "@/components/qrcode-card";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import CopyContainer from "@/components/copy-container";

const ShareCard = ({bcUrl, beanLinkUrl}: {bcUrl: string, beanLinkUrl: string}) => (
    <Card className={"w-full"}>
        <CardHeader>
            <CardTitle>Share or import</CardTitle>
        </CardHeader>
        <CardContent>
            <div className={"flex flex-col space-y-2"}>
                <CopyContainer value={beanLinkUrl} />
                <QRCodeCard value={bcUrl} />
            </div>
        </CardContent>
    </Card>
);

export default ShareCard