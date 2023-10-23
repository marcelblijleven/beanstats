import {currentUser} from "@clerk/nextjs";
import {type User} from "@clerk/nextjs/api";
import {notFound} from "next/navigation";

import {FreezeEntryForm} from "@/components/forms/freeze-entries/form";
import {Title} from "@/components/layout/title";
import {getCoffeeIdsForUsers} from "@/lib/db/beans/get-bean-details";

export default async function AddFreezeEntryPage({searchParams}: {searchParams: Record<string, string | undefined> }) {
    const user: User | null = await currentUser();

    if (!user) return notFound();

    const beanPublicID = searchParams.id;
    const beanName = searchParams.bean
    const forBean = !!beanPublicID && !!beanName;

    let beans;

    if (forBean) {
        beans = [{publicId: beanPublicID, name: beanName}];
    } else {
        beans = await getCoffeeIdsForUsers(user.publicMetadata.databaseId as number);
    }

    return (
        <>
            <Title
                title={"Freeze entry"}
                subtitle={"Add an entry to your frozen backlog 🥶"}
            />
            <FreezeEntryForm beans={beans} forBean={forBean} />
        </>
    )
}

