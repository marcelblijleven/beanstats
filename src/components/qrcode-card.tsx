import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import QRCode from "react-qr-code";
import Image from "next/image";


const QRCodeCard = ({value}: {value: string}) => (
    <Card className={"bg-white"} style={{color: "hsl(222.2 47.4% 11.2%)"}}>
        <CardHeader>
            <CardTitle className={"flex items-center gap-1"}>
                <Image src={"/beanconqueror_logo.png"} alt={"Beanconqueror logo"} height={25} width={25} />
                QRCode
            </CardTitle>
            <CardDescription>Scan this with your camera app, not the Beanconqueror app</CardDescription>
        </CardHeader>
        <CardContent className={"flex justify-center"}>
            <QRCode value={value} />
        </CardContent>
    </Card>
)

export default QRCodeCard;