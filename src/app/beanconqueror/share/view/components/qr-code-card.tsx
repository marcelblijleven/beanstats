import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import QRCode from "react-qr-code";


const QRCodeCard = ({value}: {value: string}) => (
    <Card className={"bg-white"} style={{color: "hsl(222.2 47.4% 11.2%)"}}>
        <CardHeader>
            <CardTitle>QRCode</CardTitle>
            <CardDescription>Scan this with your camera app, not the Beanconqueror app</CardDescription>
        </CardHeader>
        <CardContent>
            <QRCode value={value} />
        </CardContent>
    </Card>
)

export default QRCodeCard;