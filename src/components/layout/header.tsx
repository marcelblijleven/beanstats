import headerNavLinks from "@/components/layout/nav-links";
import MobileNav from "./mobile-nav";
import HeaderTitle from "@/components/layout/header-title";
import Link from "next/link";
import UserButton from "@/components/account/user-button";
import ThemeSwitcher from "@/components/theme/theme-switcher";

const Header = () => {
  return (
    <header className="sticky z-20 flex items-center justify-between p-4 bg-opacity-95 bg-background/95 border-b-2 border-accent w-full py-4">
      <div>
        <HeaderTitle />
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== "/")
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 text-sm dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <div className={"flex items-center space-x-2"}>
          <UserButton />
          <ThemeSwitcher/>
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
