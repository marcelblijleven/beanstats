import {CoffeeForm} from "@/app/coffee/components/coffee-form";
import {Title} from "@/components/layout/title";
import {User} from "@clerk/nextjs/api";
import {currentUser} from "@clerk/nextjs";
import {getBeanDetails, getCoffeeIdsForUsers} from "@/lib/db/beans/get-bean-details";
import {notFound} from "next/navigation";
import {Inputs} from "@/app/coffee/actions/coffee-form/form-schema";
import {undefined} from "zod";
import {getFreezeEntry} from "@/lib/db/freeze-entries/get-freeze-entry";
import {FreezeEntryInput} from "@/components/forms/freeze-entries/schema";
import {FreezeEntryForm} from "@/components/forms/freeze-entries/form";

export default async function EditFreezeEntryPage({ params }: { params: { entryId: string } }) {
    const user: User | null = await currentUser();

    if (!user) return notFound();

    const entry =  await getFreezeEntry(params.entryId, user.publicMetadata.databaseId as number)

    if (!entry) return notFound();

    const values: FreezeEntryInput = {
        publicId: entry.publicId,
        label: entry.label ?? "",
        beanPublicId: entry.beanPublicId as string,
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