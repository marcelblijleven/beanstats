import {currentUser} from "@clerk/nextjs";
import {type User} from "@clerk/nextjs/api";
import {notFound} from "next/navigation";

import {type Inputs} from "@/app/coffee/actions/coffee-form/form-schema";
import {CoffeeForm} from "@/app/coffee/components/coffee-form";
import {Title} from "@/components/layout/title";
import {getBeanDetails} from "@/lib/db/beans/get-bean-details";



export default async function EditCoffeePage({ params }: { params: { coffeeId: string } }) {
    const user: User | null = await currentUser();

    if (!user) return notFound();

    const bean =  await getBeanDetails(params.coffeeId, user.publicMetadata.databaseId as number)

    if (!bean) return notFound();

    const values: Inputs = {
        buyDate: bean.buyDate,
        isArchived: bean.isArchived,
        isPublic: bean.isPublic,
        name: bean.name,
        notes: bean.notes,
        price: bean.price,
        publicId: bean.publicId,
        roastDate: bean.roastDate,
        roaster: bean.roaster.name,
        roasterId: bean.roasterId,
        varieties: bean.varieties,
        weight: bean.weight

    }

    return (
        <>
            <Title
                title={"Coffee"}
                subtitle={"Add a coffee to your coffee backlog"}
            />
            <CoffeeForm roasters={[]} values={values}/>
        </>
    )
}