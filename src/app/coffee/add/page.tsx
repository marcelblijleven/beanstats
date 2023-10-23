import {currentUser} from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

import {CoffeeForm} from "@/components/forms/coffee-form/form";
import {Title} from "@/components/layout/title";
import {getRoasters} from "@/lib/db/roasters/get-roasters";

export default async function AddCoffeePage() {
    const user: User | null = await currentUser();

    if (!user) return null;

    const roasters = await getRoasters(user.publicMetadata.databaseId as number) ?? [];

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