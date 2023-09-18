"use client"

import {useClerk} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";

export default function SignOutButton() {
    const clerk = useClerk();

    return (
        <Button
            variant={"outline"}
            onClick={async () => await clerk.signOut()}
        >
            Sign out
        </Button>

    )
}