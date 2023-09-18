"use client"
import { UserButton as ClerkButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import {NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu";
import {useClerkTheme} from "@/lib/hooks/clerk";

export default function UserButtonMenuItem() {
    const auth = useUser();
    const clerkTheme = useClerkTheme();

    if (!auth.isLoaded || !auth.isSignedIn) {
        return (
            <NavigationMenuItem>
                <Link href="/account/sign-in" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {auth.isLoaded ? "Sign in" : "Account"}
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        )
    }

    return (
        <NavigationMenuItem>
            <Link href={"/account"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <ClerkButton afterSignOutUrl={"/"} appearance={{
                        baseTheme: clerkTheme,
                    }} />
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    )
}