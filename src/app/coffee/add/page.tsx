import {CoffeeForm} from "@/app/coffee/components/coffee-form";
import {Title} from "@/components/layout/title";
import {getRoasters} from "@/lib/db/roasters/get-roasters";
import {currentUser} from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

export default async function AddCoffeePage({ params }: { params: { publicUserId: string }}) {
    const user: User | null = await currentUser();

    if (!user) return null;

    const roasters = await getRoasters(user.publicMetadata.databaseId) || [];

    return (
        <>
            <Title
                title={"Coffee"}
                subtitle={"Add a coffee to your coffee backlog"}
            />
            <CoffeeForm roasters={roasters} />
        </>
    )
}