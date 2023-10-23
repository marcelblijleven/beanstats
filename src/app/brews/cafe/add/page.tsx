import {currentUser} from "@clerk/nextjs";
import {type User} from "@clerk/nextjs/api";

import {CafeBrewForm} from "@/components/forms/cafe-brew-form/form";
import {Title} from "@/components/layout/title";

export default async function AddCoffeePage() {
    const user: User | null = await currentUser();

    if (!user) return null;

    return (
        <>
            <Title
                title={"Cafe brews"}
                subtitle={"Add a cafe brew"}
            />
            <CafeBrewForm />
        </>
    )
}