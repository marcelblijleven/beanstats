import {currentUser} from "@clerk/nextjs";
import {type User} from "@clerk/nextjs/api";
import {notFound} from "next/navigation";

import {CafeBrewForm, type Inputs} from "@/app/brews/cafe/components/cafe-brew-form";
import {Title} from "@/components/layout/title";
import {getCafeBrewDetails} from "@/lib/db/brews/get-cafe-brew-details";

export default async function EditCoffeePage({ params }: { params: { brewId: string } }) {
    const user: User | null = await currentUser();

    if (!user) return notFound();

    const brew =  await getCafeBrewDetails(params.brewId, user.publicMetadata.databaseId as number)

    if (!brew) return notFound();

    const values: Inputs = {
        publicId: brew.publicId,
        type: brew.type,
        coffeeVariety: brew.coffeeVariety ?? "",
        coffeeOrigin: brew.coffeeOrigin ?? "",
        date: brew.date ?? undefined,
        notes: brew.notes ?? "",
        cafe: brew.cafe ?? "",
        cafeCity: brew.cafeCity ?? "",
        cafeCountry: brew.cafeCountry ?? "",
        price: brew.price ?? "",
        rating: brew.rating !== null ? [brew.rating] : undefined,
        isPublic: brew.isPublic,
    }

    return (
        <>
            <Title
                title={"Coffee"}
                subtitle={"Add a coffee to your coffee backlog"}
            />
            <CafeBrewForm values={values}/>
        </>
    )
}