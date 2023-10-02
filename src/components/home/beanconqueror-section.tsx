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

)

export default BeanconquerorSection