import {currentUser} from "@clerk/nextjs";
import {type User} from "@clerk/nextjs/api";
import {type Metadata, type ResolvingMetadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";

import {BeanDetail} from "@/components/detail-pages/bean-detail";
import {Title} from "@/components/layout/title";
import {buttonVariants} from "@/components/ui/button";
import {getBeanDetails, getBeanDetailsWithFreezeEntries} from "@/lib/db/beans/get-bean-details";
import {canView} from "@/lib/perms";
import {cn} from "@/lib/utils";
import {ShareComponent} from "@/components/coffee/share";

type PageProps = {
    params: { coffeeId: string}
}

type BeanDetails = Awaited<ReturnType<typeof getBeanDetails>>

export async function generateMetadata({params}: PageProps, parent: ResolvingMetadata,): Promise<Metadata> {
    // read route params
    const id = params.coffeeId;

    // fetch data
    const bean = await getBeanDetails(id, undefined);

    if (!bean || !bean.isPublic) {
        const title = (await parent).title;
        return {
            title: title ?? "Coffee",
            description: "Keep track of your coffee backlog"
        };
    }

    return {
        title: `${bean.name}`,
        description: `Roasted by ${bean.roaster?.name ?? "??"}`
    };
}

function Buttons({user, bean} :{user: User | null, bean: BeanDetails}) {
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
            <ShareComponent bean={bean} />
        </div>
    );
}

export default async function CoffeeDetailPage({ params }: { params: { coffeeId: string } }) {
    const user: User | null = await currentUser();
    const bean =  await getBeanDetailsWithFreezeEntries(params.coffeeId, user?.publicMetadata?.databaseId as number || undefined);

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
    );
}