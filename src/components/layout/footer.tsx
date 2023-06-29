import Link from "next/link";

import {getCurrentVersion, getSha} from "@/lib/versioning/utils";

export default async function Footer() {
    const version = await getCurrentVersion();
    const sha = await getSha();

    return (
        <footer className={"absolute bottom-0 px-2 md:px-24 bg-opacity-90 w-full"}>
            <div className={"flex justify-center p-4 w-full"}>
                <Link
                    className={"text-xs text-gray-500 self-center"}
                    href={"/changelog"}>{`${version} ${sha.substring(0, 7)}`}</Link>
            </div>
        </footer>
    )
}
