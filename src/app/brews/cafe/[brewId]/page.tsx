import {User} from "@clerk/nextjs/api";
import {currentUser} from "@clerk/nextjs";
import {canView} from "@/lib/perms";
import {notFound} from "next/navigation";
import {Title} from "@/components/layout/title";
import {getCafeBrewDetails} from "@/lib/db/brews/get-cafe-brew-details";
import {BrewDetail} from "@/app/brews/cafe/[brewId]/components/brew-detail";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";


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
    const brew =  await getCafeBrewDetails(params.brewId, user?.publicMetadata?.databaseId as number || undefined)

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
    )
}