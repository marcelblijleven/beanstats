"use client"
import Link from "next/link";
import {UserButton as ClerkButton, useUser} from "@clerk/nextjs";
import {useClerkTheme} from "@/lib/hooks/clerk";
import {Button} from "@/components/ui/button";


export default function UserButton() {
    const auth = useUser();
    const clerkTheme = useClerkTheme();

    if (!auth.isLoaded) return <Button disabled variant={"outline"}>Loading</Button>

    if (!auth.isSignedIn) {
        return (
            <Link href="/sign-in" legacyBehavior passHref>
                <Button variant={"outline"} className={"w-20"}>
                    {auth.isLoaded ? "Sign in" : "Account"}
                </Button>
            </Link>
        )
    }

    return (
        <ClerkButton afterSignOutUrl={"/"} appearance={{
            baseTheme: clerkTheme,
        }}/>
    )
}