import { Title } from "@/components/layout/title";
import {ReactNode} from "react";

export default function Layout({children}: {children: ReactNode}) {
    return (
        <div className={"w-full max-w-7xl space-y-2 md:space-y-4"}>
            {children}
        </div>
    )
}