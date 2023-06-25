import Link from "next/link";
import {Button} from "@/components/ui/button";
import {H2, H3} from "@/components/text";

const LinkDetail = ({button, href}: { button: string, href: string }) => (
    <Link className={"block"} href={href} passHref>
        <Button>{button}</Button>
    </Link>
)

const BeanconquerorSection = () => (
    <section className={"space-y-4"}>
        <H2 className={"gradient-text"}>Beanconqueror</H2>
        <p>
            <Link className={"underline"} href={"https://beanconqueror.com/"} target={"_blank"}>
                Beanconqueror
            </Link> is an app for tracking coffee brews, both filter and espresso.
            The following tools will complement your Beanconqueror experience.
        </p>
        <section className={"space-y-4"}>
            <H3>Stats</H3>
            <p>
                View brew data, your backlog and other stats by uploading your
                Beanconqueror <span className={"italic"}>json</span> or <span className={"italic"}>zip</span> file.
            </p>
            <LinkDetail button={"View stats"} href={"/beanconqueror/stats"} />
        </section>
        <section className={"space-y-4"}>
            <H3>Share links</H3>
            <p>
                If you prefer entering coffee beans on your computer instead of mobile phone, then this form
                is for you. Enter all data and scan the QR code, quick and easy.
            </p>
            <LinkDetail button={"Create share link"} href={"/beanconqueror/create"} />
            <p>
                If you have a Beanconqueror or Beanlink share url, you can inspect the information or shorten it using
                Beanlink.
            </p>
            <div className={"flex gap-2"}>
                <LinkDetail button={"View share link"} href={"/beanconqueror/view "} />
                <LinkDetail button={"Shorten share link"} href={"/beanconqueror/shorten"} />
            </div>
        </section>
    </section>
    //
    // <Card className={"w-full lg:w-[calc(50%-1rem)]"}>
    //     <CardHeader>
    //         <CardTitle>Beanconqueror stats</CardTitle>
    //         <CardDescription>
    //              This tool helps you visualise
    //             your data
    //         </CardDescription>
    //     </CardHeader>
    //     <CardContent className={"flex flex-col space-y-2"}>
    //
    //         <LinkDetail
    //             detail={"View contents of a (share) url"}
    //             button={"View (share) link"}
    //             href={"/beanconqueror/(share)/view"}
    //         />
    //         <LinkDetail
    //             detail={"Create a (share) url"}
    //             button={"Create (share) link"}
    //             href={"/beanconqueror/(share)/create"}
    //         />
    //     </CardContent>
    // </Card>
)

export default BeanconquerorSection