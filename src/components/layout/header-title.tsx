"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HeaderTitle() {
  const currentPath = usePathname();

  if (currentPath === "/") {
    return (
      <div className={"flex shrink gap-2 items-center"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
        </svg>
        <Link
          href={"/"}
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-xl md:text-2xl font-extrabold"
          aria-label="Back to home"
        >
          Beanstats
        </Link>
      </div>
    );
  }

  return (
    <Link
      href={"/"}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      aria-label="Back to home"
    >
      &larr; Back to home
    </Link>
  );
}
