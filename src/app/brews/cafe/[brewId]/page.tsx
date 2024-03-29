import {currentUser} from "@clerk/nextjs";
import {type User} from "@clerk/nextjs/api";
import {type Metadata, type ResolvingMetadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";

import {BrewDetail} from "@/components/detail-pages/brew-detail";
import {Title} from "@/components/layout/title";
import {buttonVariants} from "@/components/ui/button";
import {getCafeBrewDetails} from "@/lib/db/brews/get-cafe-brew-details";
import {canView} from "@/lib/perms";

type PageProps = {
    params: { brewId: string}
}

export async function generateMetadata({params}: PageProps, parent: ResolvingMetadata,): Promise<Metadata> {
    // read route params
    const id = params.brewId;

    // fetch data
    const brew = await getCafeBrewDetails(id, undefined);

    if (!brew || !brew.isPublic) {
        const title = (await parent).title ?? "Cafe brew";
        return {
            title: title,
            description: "Keep track of your cafe brews"
        };
    }

    return {
        title: `${brew.type}`,
        description: `Served by ${brew.cafe}`
    };
}

function Buttons({user, brew} :{user: User | null, brew: Awaited<ReturnType<typeof getCafeBrewDetails>>}) {
    if (!brew || !user ||  user.publicMetadata.databaseId !== brew.userId) return null;

    return (
        <div className={"flex flex-row-reverse gap-2"}>
            <Link href={`/brews/cafe/${brew.publicId}/edit`} className={buttonVariants({size: "sm", variant: "outline"})}>
                Edit
            </Link>
        </div>
    );
}


export default async function CafeBrewDetailPage({ params }: { params: { brewId: string } }) {
    const user: User | null = await currentUser();
    const brew =  await getCafeBrewDetails(params.brewId, user?.publicMetadata?.databaseId as number || undefined);

    if (!brew || !canView(user, brew)) return notFound();

    return (
        <>
            <Title
                title={brew.type}
                subtitle={`From ${brew.cafe}`}
            />
            <Buttons user={user} brew={brew} />
            <BrewDetail brew={brew} />
        </>
    );
}