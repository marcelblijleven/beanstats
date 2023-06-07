"use client"

import { Button } from "@/components/ui/button";
import {useTheme} from "next-themes";
import {Laptop, MoonStar, Sun} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

const ThemeSwitcher = () => {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"}>
                    <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonStar className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className={"sr-only"}>Switch theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={"end"}>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun className={"mr-2 h-3 w-3"} />
                    <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <MoonStar className={"mr-2 h-3 w-3"} />
                    <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    <Laptop className={"mr-2 h-3 w-3"} />
                    <span>System</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )

}

export default ThemeSwitcher;