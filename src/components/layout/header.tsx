"use client"
import Link from "next/link";
import ThemeSwitcher from "@/components/theme-switcher";
import {Navigation} from "@/components/layout/navigation";

// Header has z-20 because of progress bars

const Header = () => (
    <header className={"sticky z-20 top-0 px-2 md:px-24 bg-opacity-90 w-full"}>
        <div className={"flex align-middle items-center justify-between p-4 w-full bg-background/95"}>
            <Link className={"text-xl md:text-2xl font-extrabold"} href={"/"}>beanstats</Link>
            <div className={"flex items-center gap-1"}>
                <Navigation />
                <ThemeSwitcher />
            </div>
        </div>
    </header>
);

export default Header;