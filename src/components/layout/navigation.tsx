import {NavigationMenu, NavigationMenuList} from "@/components/ui/navigation-menu";
import UserButtonMenuItem from "@/components/user/user-button";

export function Navigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <UserButtonMenuItem />
            </NavigationMenuList>
        </NavigationMenu>
    )
}