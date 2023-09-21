"use client"
import Link from "next/link";
import ThemeSwitcher from "@/components/theme-switcher";
import {Navigation} from "@/components/layout/navigation";
import UserButton from "@/components/user/user-button";

// Header has z-20 because of progress bars

const Header = () => (
    <header className={"sticky z-20 top-0 px-2 bg-opacity-90 w-full"}>
        <div className={"mx-auto flex align-middle items-center justify-between p-4 w-full max-w-[1600px] bg-background/95"}>
            <div className={"flex items-center justify-between w-full"}>
                <Link className={"text-xl md:text-2xl font-extrabold"} href={"/"}>beanstats</Link>
                <Navigation/>
            </div>
            <div className={"flex items-center space-x-1"}>
                <UserButton />
                <ThemeSwitcher/>
            </div>
        </div>
    </header>
);

export default Header;