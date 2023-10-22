import {Title} from "@/components/layout/title";
import {User} from "@clerk/nextjs/api";
import {currentUser} from "@clerk/nextjs";
import {db} from "@/db";
import {beans} from "@/db/schema";
import {and, eq} from "drizzle-orm";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {type Coffee, CoffeeDataTable, columns} from "@/components/overview-pages/coffee-datatable";

/**
 * Retrieve coffee for the user from the database
 * Limit is set to page size + 1 to eliminate the need for a total count query.
 * If size + 1 items are returned, there is a next page
 */
async function getCoffee(userId: number, page: number, archived: boolean): Promise<Coffee[]> {
    const pageSize = 10;
    return await db.query.beans.findMany({
        where: and(eq(beans.userId, userId), eq(beans.isArchived, archived)),
        with: {
            varieties: true,
            roaster: true,
        },
        orderBy: (beans, {desc}) => [desc(beans.created), desc(beans.id)],
        limit: pageSize + 1,
        offset: (page - 1) * pageSize
    })
}


export default async function CoffeePage({searchParams}: { searchParams: Record<string, string | string[] | undefined>}) {
    const user: User | null = await currentUser();

    if (!user) return null;

    const page = parseInt(searchParams?.page as string ?? 1);
    const archived = parseInt(searchParams?.archived as string ?? 0);

    const userId = user.publicMetadata.databaseId as number;
    const data = await getCoffee(userId, page, !!archived);

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
                    <Link href={"/coffee/import"} className={cn(buttonVariants({variant: "default", size: "default"}), "hidden md:inline-flex")}>Import coffee</Link>
                    <Link href={"/coffee/import"} className={cn(buttonVariants({variant: "default", size: "sm"}), "inline-flex md:hidden")}>Import coffee</Link>
                </div>
            </section>
            <section>
                <div
                    aria-hidden='true'
                    className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 opacity-20'>
                    <div
                        style={{
                            clipPath:
                                'polygon(17% 12%, 8% 11%, 0% 11%, 0% 20%, 0% 33%, 11% 35%, 17% 42%, 19% 50%, 12% 53%, 12% 62%, 10% 74%, 4% 78%, 4% 83%, 4% 99%, 18% 99%, 30% 95%, 31% 81%, 48% 73%, 63% 72%, 66% 80%, 67% 87%, 74% 93%, 83% 97%, 95% 96%, 99% 87%, 94% 74%, 86% 57%, 71% 42%, 78% 26%, 86% 15%, 95% 8%, 98% 4%, 94% 1%, 77% 0%, 67% 8%, 60% 22%, 49% 19%, 30% 18%)',
                        }}
                        className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#fc6b03] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                    />
                </div>
                <CoffeeDataTable columns={columns} data={data} />
            </section>
        </>
    )
}