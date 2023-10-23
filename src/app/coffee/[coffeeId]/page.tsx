import {Title} from "@/components/layout/title";
import {type User} from "@clerk/nextjs/api";
import {currentUser} from "@clerk/nextjs";
import {notFound} from "next/navigation";
import {canView} from "@/lib/perms";
import {getBeanDetails, getBeanDetailsWithFreezeEntries} from "@/lib/db/beans/get-bean-details";
import {BeanDetail} from "@/app/coffee/[coffeeId]/components/bean-detail";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import Image from "next/image";
import {type Metadata, type ResolvingMetadata} from "next";
import {cn} from "@/lib/utils";

type PageProps = {
    params: { coffeeId: string}
}

export async function generateMetadata({params}: PageProps, parent: ResolvingMetadata,): Promise<Metadata> {
    // read route params
    const id = params.coffeeId

    // fetch data
    const bean = await getBeanDetails(id, undefined)

    if (!bean || !bean.isPublic) {
        const title = (await parent).title
        return {
            title: title ?? "Coffee",
            description: "Keep track of your coffee backlog"
        }
    }

    return {
        title: `${bean.name}`,
        description: `Roasted by ${bean.roaster?.name ?? "??"}`
    }
}

function Buttons({user, bean} :{user: User | null, bean: Awaited<ReturnType<typeof getBeanDetails>>}) {
    if (!bean || !user ||  user.publicMetadata.databaseId !== bean.userId) return null;

    return (
        <div className={"flex flex-row-reverse gap-2"}>
            <Link href={`/coffee/${bean.publicId}/edit`} className={buttonVariants({size: "sm", variant: "outline"})}>
                Edit
            </Link>
            <Link
                href={`/coffee/freeze/add?id=${bean.publicId}&bean=${bean.name}`}
                className={cn(buttonVariants({size: "sm", variant: "outline"}), "hover:bg-blue-400 hover:outline-blue-600 hover:text-white transition-colors duration-500")}
            >
                Freeze
            </Link>
            {/*<BeanConquerorButton bean={bean} />*/}
        </div>
    );
}

function BeanConquerorButton({bean}: {bean:Awaited<ReturnType<typeof getBeanDetails>>}) {
    return (
        <Button variant={"outline"} size={"sm"}>
            <Image src={"/beanconqueror_logo.png"} alt={"Beanconqueror logo"} height={20} width={20} />
        </Button>
    )
}

export default async function CoffeeDetailPage({ params }: { params: { coffeeId: string } }) {
    const user: User | null = await currentUser();
    const bean =  await getBeanDetailsWithFreezeEntries(params.coffeeId, user?.publicMetadata?.databaseId as number || undefined)

    if (!bean || !canView(user, bean)) return notFound();

    return (
        <>
            <Title
                title={bean.name}
                subtitle={`Roasted by ${bean.roaster?.name ?? "??"}`}
            />
            <Buttons user={user} bean={bean} />
            <BeanDetail bean={bean} />
        </>
    )
}