import HomeNavigation from "@/components/home-navigation";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const BeanconquerorCard = () => (
    <Card className={"max-w-xl"}>
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
        <CardContent className={"flex flex-col space-y-4"}>
            <Link href={"/beanconqueror"} passHref>
                <Button>Go to Beanconqueror stats</Button>
            </Link>
        </CardContent>
    </Card>
)


export default async function Home() {
      return (
        <main className="flex h-full flex-col items-center p-6 md:p-24 space-y-6">
            <HomeNavigation />
            <BeanconquerorCard  />
        </main>
      )
}
