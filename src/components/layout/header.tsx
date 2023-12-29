"use client";
import Link from "next/link";

import {Navigation} from "@/components/layout/navigation";
import ThemeSwitcher from "@/components/theme/theme-switcher";
import UserButton from "@/components/account/user-button";

// Header has z-20 because of progress bars

const Header = () => (
    <header className={"sticky z-20 top-0 p-2 bg-opacity-95 w-full bg-background/95 border-b-2 border-accent"}>
        <div className={"mx-auto py-2 flex items-center justify-between w-full max-w-[1600px]"}>
            <div className={"flex items-center gap-2"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
                <Link className={"text-xl md:text-2xl font-extrabold"} href={"/"}>beanstats</Link>
            </div>
            <div className={"flex items-center space-x-2"}>
                <UserButton />
                <ThemeSwitcher/>
            </div>
        </div>
        <div className={"mx-auto max-w-[1600px]"}>
            <Navigation/>
        </div>
    </header>
);

export default Header;