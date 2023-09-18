import {auth} from "@clerk/nextjs";
import {notFound} from "next/navigation";

import SignOutButton from "@/components/account/signout-button";

export default async function Page() {
    const {userId} = auth();

    if (!userId) return notFound();

    return (
        <div className={"w-full space-y-2"}>
            <div className={"flex justify-between items-center"}>
                <h1 className={"text-4xl font-bold"}>Account</h1>
                <SignOutButton/>
            </div>
            <section>
                This is where you will be able to set some user preferences
            </section>
        </div>
    )
}