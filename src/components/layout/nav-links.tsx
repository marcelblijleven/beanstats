import Link, { type LinkProps } from "next/link";

type HeaderNavLink = {
  href: string;
  title: string;
};

const headerNavLinks: HeaderNavLink[] = [{ href: "/", title: "Home" }];

export default headerNavLinks;

export interface NavLinkProps extends Omit<LinkProps, "href"> {
  link: HeaderNavLink;
}

export function NavLink({ link, ...props }: NavLinkProps) {
  return (
    <Link
      href={link.href}
      className="hidden font-medium text-gray-900 text-sm dark:text-gray-100 sm:block hover:font-semibold"
      {...props}
    >
      {link.title}
    </Link>
  );
}
