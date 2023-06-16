import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const LinkDetail = ({detail, button, href}: {detail: string, button: string, href: string}) => (
    <div className={"flex justify-between items-center gap-2"}>
        <p>{detail}</p>
        <Link href={href} passHref>
            <Button>{button}</Button>
        </Link>
    </div>
)

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
        <CardContent className={"flex flex-col space-y-2"}>
            <LinkDetail
                detail={"View brews, backlog and other stats"}
                button={"View stats"}
                href={"/beanconqueror/stats"}
            />
            <LinkDetail
                detail={"View contents of a share url"}
                button={"View share link"}
                href={"/beanconqueror/share/view"}
            />
        </CardContent>
    </Card>
)

export default BeanconquerorCard