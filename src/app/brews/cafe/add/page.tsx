import {type User} from "@clerk/nextjs/api";
import {currentUser} from "@clerk/nextjs";
import {Title} from "@/components/layout/title";
import {CafeBrewForm} from "@/app/brews/cafe/components/cafe-brew-form";

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