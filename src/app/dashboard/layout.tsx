import {type ReactNode} from "react";

import { Title } from "@/components/layout/title";

export default function Layout({children}: {children: ReactNode}) {
    return (
        <div className={"w-full max-w-7xl space-y-2 md:space-y-4"}>
            <Title
                title={"Dashboard"}
                subtitle={"A quick glance at all your coffee stats"}
            />
            {children}
        </div>
    )
}