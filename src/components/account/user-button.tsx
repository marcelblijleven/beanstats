"use client";
import {UserButton as ClerkButton, useUser} from "@clerk/nextjs";
import Link from "next/link";

import {Button} from "@/components/ui/button";
import {useClerkTheme} from "@/lib/hooks/clerk";


export default function UserButton() {
    const auth = useUser();
    const clerkTheme = useClerkTheme();

    if (!auth.isLoaded) return <Button disabled variant={"outline"}>Loading</Button>;

    if (!auth.isSignedIn) {
        return (
            <Link href="/sign-in" legacyBehavior passHref>
                <Button variant={"outline"} className={"w-20"}>
                    {auth.isLoaded ? "Sign in" : "Account"}
                </Button>
            </Link>
        );
    }

    return (
        <ClerkButton afterSignOutUrl={"/"} appearance={{
            baseTheme: clerkTheme,
        }}/>
    );
}