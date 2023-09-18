import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import UserButtonMenuItem from "@/components/user/user-button";
import Link from "next/link";

type MenuItemProps = {
    href: string,
    label: string,
}


function MenuItem(props: MenuItemProps) {
    return (
        <NavigationMenuItem>
            <Link href={props.href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {props.label}
            </NavigationMenuLink>
        </Link>
        </NavigationMenuItem>
    )
}


export function Navigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <MenuItem href={"/dashboard"} label={"Dashboard"} />
                <UserButtonMenuItem />
            </NavigationMenuList>
        </NavigationMenu>
    )
}