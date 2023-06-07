import Link from "next/link";
import ThemeSwitcher from "@/components/theme-switcher";

const Header = () => (
    <header className={"sticky top-0 px-2 md:px-24"}>
        <div className={"flex align-middle items-center justify-between p-4 w-full bg-background"}>
            <Link className={"text-xl md:text-2xl font-extrabold"} href={"/"}>beanstats</Link>
            <ThemeSwitcher />
        </div>
    </header>
);

export default Header;