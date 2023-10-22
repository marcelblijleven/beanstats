import {type Metadata, type ResolvingMetadata} from "next";
import {getFreezeEntry} from "@/lib/db/freeze-entries/get-freeze-entry";
import {type User} from "@clerk/nextjs/api";
import {currentUser} from "@clerk/nextjs";
import {canView} from "@/lib/perms";
import {notFound} from "next/navigation";
import {Title} from "@/components/layout/title";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {FreezeEntryDetail} from "@/components/detail-pages/freeze-entry-detail";

type PageProps = {
    params: { coffeeId: string}
}

export async function generateMetadata({params}: PageProps, parent: ResolvingMetadata,): Promise<Metadata> {
    // read route params
    const id = params.coffeeId

    // fetch data
    const entry = await getFreezeEntry(id, undefined)

    if (!entry || !entry.isPublic) {
        const title = (await parent).title
        return {
            title: title ?? "Coffee",
            description: "Keep track of your coffee backlog"
        }
    }

    return {
        title: entry.beanName,
        description: `Freeze entry`
    }
}

function Buttons({user, entry} :{user: User | null, entry: Awaited<ReturnType<typeof getFreezeEntry>>}) {
    if (!entry || !user ||  user.publicMetadata.databaseId !== entry.userId) return null;

    return (
        <div className={"flex flex-row-reverse gap-2"}>
            <Link href={`/coffee/freeze/${entry.publicId}/edit`} className={buttonVariants({size: "sm", variant: "outline"})}>
                Edit
            </Link>
        </div>
    );
}

export default async function FreezeEntryDetailPage({ params }: { params: { entryId: string } }) {
    const user: User | null = await currentUser();
    const entry =  await getFreezeEntry(params.entryId, user?.publicMetadata?.databaseId as number || undefined)

    if (!entry || !canView(user, entry)) return notFound();

    return (
        <>
            <Title
                title={`Freeze entry for ${entry.beanName}`}
                subtitle={`Frozen at ${entry.freezeDate}`}
            />
            <Buttons user={user} entry={entry} />
            <FreezeEntryDetail entry={entry} />
        </>
    )
}