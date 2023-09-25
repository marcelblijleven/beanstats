"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {LucideMenu as MenuIcon, X as CloseIcon} from "lucide-react";
import {MouseEventHandler, ReactNode, useState} from "react";
import {cn} from "@/lib/utils";
import {Separator} from "@/components/ui/separator";
import UserButton from "@/components/user/user-button";
import {usePathname} from "next/navigation";

type MenuItemProps = {
    href: string,
    label: string,
}

type ButtonProps = {
    open: boolean;
    onClick:  MouseEventHandler<HTMLButtonElement>;
}

type BackdropProps = {
    open: boolean;
}

type MobileMenuItemsProps = {
    items: MenuItemProps[];
    open: boolean;
    onClick: MouseEventHandler<HTMLAnchorElement>;
}


function MenuItem(props: MenuItemProps) {
    return (
        <NavigationMenuItem>
            <Link href={props.href} legacyBehavior passHref>
            <NavigationMenuLink className={"active:scale-95 inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 hover:bg-accent hover:text-accent-foreground h-9 px-4"}>
                {props.label}
            </NavigationMenuLink>
        </Link>
        </NavigationMenuItem>
    )
}

function MobileMenuButton(props: ButtonProps) {
    return (
        <button
            className={"pointer-events-auto absolute right-4 top-4 z-20"}
            onClick={props.onClick} type={"button"}>
            {!props.open && <MenuIcon />}
            {props.open && <CloseIcon />}
        </button>
    )
}

function MobileMenuBackdrop(props: BackdropProps) {
    return (
        <div
            className={"absolute inset-0 left-0 w-full bg-background transition-all duration-500"}
            style={{
                clipPath: `circle(${props.open ? 2200 : 0}px at 100% 0%)`,
            }}
        ></div>
    )
}

function MobileMenuItems(props: MobileMenuItemsProps) {
    const pathname=  usePathname();

    return (
        <ul className={"absolute grid w-full gap-3 px-10 py-16"}>
            {props.items.reduce((previousValue, currentValue, currentIndex) => {
                previousValue.push(
                    <li key={currentValue.label + "-separator"} className={cn("transition-all", props.open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24")}>
                        <Link
                            data-active={currentValue.href.includes(pathname)}
                            onClick={props.onClick}
                            className={"w-full data-[active='true']:font-bold"} href={currentValue.href}>{currentValue.label}</Link>
                    </li>
                )

                if (currentIndex !== props.items.length -1) {
                    previousValue.push(
                        <li key={currentValue.label} className={cn("my-3 h-px w-full bg-gray-300 transition-all", props.open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24")}></li>
                    )
                }

                return previousValue
            }, [] as ReactNode[])}
        </ul>
    )
}


export function Navigation() {
    const [open, setOpen] = useState<boolean>(false);
    const menuItems: MenuItemProps[] = [
        {
            href: "/dashboard",
            label: "Dashboard",
        },
        {
            href: "/coffee",
            label: "Coffee",
        }
    ]

    return (
        <div className={"sm:mr-2"}>
            {/* Mobile */}
            <nav className={cn("fixed inset-0 z-50 w-full sm:hidden", open ? "pointer-events-auto" : "pointer-events-none")}>
                <MobileMenuButton open={open} onClick={() => setOpen(prevState => !prevState)} />
                <MobileMenuBackdrop open={open} />
                <MobileMenuItems items={menuItems} open={open} onClick={() => setOpen(false)} />
            </nav>
            {/* Other */}
            <NavigationMenu className={"hidden sm:flex"}>
                <NavigationMenuList>
                    {menuItems.map(item => (
                        <MenuItem key={item.label} href={item.href} label={item.label} />
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>

    )
}




