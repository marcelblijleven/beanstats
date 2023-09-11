import Link from "next/link";

import {getCurrentVersion} from "@/lib/versioning/utils";
import {Github} from "lucide-react";

export default async function Footer() {
    const version = await getCurrentVersion();

    return (
        <footer className={"absolute bottom-0 px-2 md:px-24 bg-opacity-90 w-full"}>
            <div className={"flex justify-center items-center p-4 space-x-4 w-full"}>
                <Link
                    className={"text-xs text-gray-500 self-center"}
                    href={"/changelog"}
                >
                    {version}
                </Link>
                <Link href={"https://www.github.com/marcelblijleven/beanstats"}>
                        <Github className={"text-gray-500 h-4 w-4"}/>
                        <span className={"sr-only"}>View on GitHub</span>
                </Link>
            </div>
        </footer>
    )
}
