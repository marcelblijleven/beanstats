import {Title} from "@/components/layout/title";
import {type User} from "@clerk/nextjs/api";
import {currentUser} from "@clerk/nextjs";
import {getCoffeeIdsForUsers} from "@/lib/db/beans/get-bean-details";
import {notFound} from "next/navigation";
import {undefined} from "zod";
import {getFreezeEntry} from "@/lib/db/freeze-entries/get-freeze-entry";
import {type FreezeEntryInput} from "@/components/forms/freeze-entries/schema";
import {FreezeEntryForm} from "@/components/forms/freeze-entries/form";

export default async function EditFreezeEntryPage({ params }: { params: { entryId: string } }) {
    const user: User | null = await currentUser();

    if (!user) return notFound();

    const entry =  await getFreezeEntry(params.entryId, user.publicMetadata.databaseId as number)

    if (!entry) return notFound();

    const values: FreezeEntryInput = {
        publicId: entry.publicId,
        label: entry.label ?? "",
        beanPublicId: entry.beanPublicId!,
        weight: entry.weight ?? "",
        freezeDate: entry.freezeDate ?? undefined,
        frozen: entry.frozen,
        notes: entry.notes ?? ""
    }

    const beans = await getCoffeeIdsForUsers(user.publicMetadata.databaseId as number);

    return (
        <>
            <Title
                title={"Freeze entry"}
                subtitle={"Edit this entry to your frozen backlog 🥶"}
            />
            <FreezeEntryForm values={values} beans={beans}/>
        </>
    )
}