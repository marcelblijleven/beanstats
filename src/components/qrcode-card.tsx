import { QRCode } from "react-qrcode-logo";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const QRCodeSize = 200;

const QRCodeCard = ({value}: {value: string}) => (
    <Card className={"bg-white"} style={{color: "hsl(222.2 47.4% 11.2%)"}}>
        <CardHeader>
            <CardTitle>QRCode</CardTitle>
            <CardDescription>Scan this with your camera app, not the Beanconqueror app</CardDescription>
        </CardHeader>
        <CardContent className={"flex justify-center"}>
            <QRCode
                value={value}
                size={QRCodeSize}
                logoImage={value.length > 40 ? "" : "/beanconqueror_logo.png"}
                logoHeight={0.2 * QRCodeSize}
                logoWidth={0.2 * QRCodeSize}
                removeQrCodeBehindLogo={true}
            />
        </CardContent>
    </Card>
)

export default QRCodeCard;