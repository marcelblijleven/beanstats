import {type User} from "@clerk/nextjs/api";
import {currentUser} from "@clerk/nextjs";
import {Title} from "@/components/layout/title";
import BeanconquerorImport from "@/app/coffee/import/components/beanconqueror-import";

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