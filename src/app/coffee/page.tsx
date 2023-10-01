import {Title} from "@/components/layout/title";
import {Coffee, columns} from "@/app/coffee/components/data-table/columns";
import {User} from "@clerk/nextjs/api";
import {currentUser} from "@clerk/nextjs";
import {db} from "@/db";
import {beans} from "@/db/schema";
import {and, eq} from "drizzle-orm";
import {DataTable} from "@/app/coffee/components/data-table";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";

async function getCoffee(userId: number): Promise<Coffee[]> {
    const bean = await db.query.beans.findMany({
        where: eq(beans.userId, userId),
        with: {
            varieties: true,
            roaster: true,
        },
    });

    return bean as unknown as Coffee[] // TODO: fix typing
}


export default async function CoffeePage() {
    const user: User | null = await currentUser();

    if (!user) return null;

    const data = await getCoffee(user.publicMetadata.databaseId as number);

    return (
        <>
            <Title
                title={"Coffee"}
                subtitle={"Track your coffee backlog"}
            />
            <section>
                <div className={"justify-between items-center space-x-2"}>
                    <Link href={"/coffee/add"} className={cn(buttonVariants({variant: "default", size: "default"}), "hidden md:inline-flex")}>Add coffee</Link>
                    <Link href={"/coffee/add"} className={cn(buttonVariants({variant: "default", size: "sm"}), "inline-flex md:hidden")}>Add coffee</Link>
                </div>
            </section>
            <section>
                <DataTable columns={columns} data={data} />
            </section>
        </>
    )
}