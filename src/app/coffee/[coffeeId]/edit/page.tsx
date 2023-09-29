import {CoffeeForm} from "@/app/coffee/components/coffee-form";
import {Title} from "@/components/layout/title";
import {User} from "@clerk/nextjs/api";
import {currentUser} from "@clerk/nextjs";
import {getBeanDetails} from "@/lib/db/beans/get-bean-details";
import {notFound} from "next/navigation";
import {Inputs} from "@/app/coffee/actions/coffee-form/form-schema";
import {undefined} from "zod";

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