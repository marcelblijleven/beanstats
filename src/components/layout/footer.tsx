import Link from "next/link";

import {getCurrentVersion, getSha} from "@/lib/versioning/utils";
import {Github} from "lucide-react";

export default async function Footer() {
    const version = await getCurrentVersion();
    const sha = await getSha();

    return (
        <footer className={"absolute bottom-0 px-2 md:px-24 bg-opacity-90 w-full"}>
            <div className={"flex justify-center items-center p-4 space-x-4 w-full"}>
                <Link
                    className={"text-xs text-gray-500 self-center"}
                    href={"/changelog"}
                >
                    {`${version} ${sha.substring(0, 7)}`}
                </Link>
                <Link href={"https://www.github.com/marcelblijleven/beanstats"}>
                        <Github className={"text-gray-500 h-4 w-4"}/>
                        <span className={"sr-only"}>View on GitHub</span>
                </Link>
            </div>
        </footer>
    )
}
