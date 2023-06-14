import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const BeanconquerorCard = () => (
    <Card className={"w-full lg:w-[calc(50%-1rem)]"}>
        <CardHeader>
            <CardTitle>Beanconqueror stats</CardTitle>
            <CardDescription>
                <Link
                    className={"underline"}
                    href={"https://beanconqueror.com/"}
                    target={"_blank"}
                >
                    Beanconqueror
                </Link> is an app for tracking coffee brews, both filter and espresso. This tool helps you visualise
                your data
            </CardDescription>
        </CardHeader>
        <CardContent className={"flex flex-col"}>
            <Link href={"/beanconqueror/stats"} passHref className={"self-end"}>
                <Button>Go to Beanconqueror stats</Button>
            </Link>
        </CardContent>
    </Card>
)

export default BeanconquerorCard