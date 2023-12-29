"use client";

import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";

type MenuItemProps = {
    href: string,
    label: string,
}

function MenuItem(props: MenuItemProps) {
    return (
        <NavigationMenuItem>
            <Link href={props.href} legacyBehavior passHref>
            <NavigationMenuLink className={"whitespace-nowrap active:scale-95 inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 hover:bg-accent hover:text-accent-foreground h-9 px-4"}>
                {props.label}
            </NavigationMenuLink>
        </Link>
        </NavigationMenuItem>
    );
}

export function Navigation() {
    const menuItems: MenuItemProps[] = [
        {
            href: "/dashboard",
            label: "Dashboard",
        },
        {
            href: "/coffee",
            label: "Coffee",
        },
        {
            href: "/coffee/freeze",
            label: "Freeze",
        },
        {
            href: "/brews/cafe",
            label: "Cafe brews",
        }
    ];

    return (
        <div className={"sm:mr-2"}>
            <NavigationMenu>
                <NavigationMenuList>
                    {menuItems.map(item => (
                        <MenuItem key={item.label} href={item.href} label={item.label} />
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>

    );
}




