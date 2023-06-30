"use client"

import Link from "next/link";
import {NavigationMenu, NavigationMenuContent, NavigationMenuTrigger} from "@/components/ui/navigation-menu";
import {NavigationMenuItem, NavigationMenuLink} from "@radix-ui/react-navigation-menu";

interface NavigationItem {
    name: string;
    label?: string;
    href?: string;
    active?: boolean;
}

interface NavigationProps {
    items: NavigationItem[];
}

export default function Navigation({items}: NavigationProps) {
    return (
        <div className={"hidden gap-4 lg:flex h-12"}>
            <Link
                className={"hidden lg:flex"}
                href={"/"}
                aria-label={"Home"}
            >
                <span className={"hidden lg:inline-block text-xl md:text-2xl font-extrabold"}>beanstats</span>
            </Link>
            <NavigationMenu>
                {items.map(item => (
                    <NavigationMenuItem key={item.name}>
                        <Link href={item.href!} legacyBehavior passHref>
                            <NavigationMenuLink className={"h-auto"}>
                                {item.name}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    ))}
            </NavigationMenu>
        </div>
    )
}