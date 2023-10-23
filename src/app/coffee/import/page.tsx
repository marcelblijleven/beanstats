import {currentUser} from "@clerk/nextjs";
import {type User} from "@clerk/nextjs/api";

import BeanconquerorImport from "@/app/coffee/import/components/beanconqueror-import";
import {Title} from "@/components/layout/title";

export default async function AddCoffeePage() {
    const user: User | null = await currentUser();

    if (!user) return null;

    return (
        <>
            <Title
                title={"Coffee"}
                subtitle={"Import coffee from external sources"}
            />
            <BeanconquerorImport />
        </>
    )
}