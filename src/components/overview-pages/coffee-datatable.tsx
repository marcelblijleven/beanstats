"use client"

import {useRouter, useSearchParams} from "next/navigation";
import {type ColumnDef, getCoreRowModel, getPaginationRowModel, useReactTable} from "@tanstack/react-table";
import {Button} from "@/components/ui/button";
import {DataTableComponent} from "@/components/data-table";
import {type DataTableProps} from "@/components/overview-pages/interfaces";
import Link from "next/link";
import {createSelectSchema} from "drizzle-zod";
import {beans, beanVarieties, roasters} from "@/db/schema";
import {z} from "zod";

const selectSchema = createSelectSchema(beans).extend({
    roaster: createSelectSchema(roasters),
    varieties: z.array(createSelectSchema(beanVarieties)),
})

export type Coffee = z.infer<typeof selectSchema>

export const columns: ColumnDef<Coffee>[] = [
    {
        accessorKey: "publicId",
    },
    {
        accessorKey: "name",
        cell: ({row}) => {
            const value: string = row.getValue("publicId");
            return (
                <Link
                    className={"w-[200px] inline-block whitespace-nowrap truncate overflow-ellipsis hover:underline"}
                    href={`/coffee/${value}`}
                >
                    {row.getValue("name")}
                </Link>
            )
        },
        header: "Name",
    },
    {
        accessorKey: "roastDate",
        header: "Roast date",
        cell: ({row}) => (
            <div className={"w-[90px]"}>{row.getValue("roastDate")}</div>
        )
    },
    {
        accessorKey: "buyDate",
        header: "Buy date",
        cell: ({row}) => (
            <div className={"w-[90px]"}>{row.getValue("buyDate")}</div>
        )
    },
    {
        accessorKey: "weight",
        header: "Weight",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorFn: (row) => (
            row.roaster?.name ?? "-"
        ),
        header: "Roaster",
        cell: ({row}) => (
            <div className={"w-[200px] whitespace-nowrap truncate overflow-ellipsis"}>{row.getValue("Roaster")}</div>
        )
    },
    {
        accessorFn: (row) => row.varieties.map(variety => variety.name).join(", "),
        header: "Varieties",
        cell: ({row}) => (
            <div className={"w-[100px] whitespace-nowrap truncate overflow-ellipsis"}>{row.getValue("Varieties")}</div>
        )
    },
    {
        accessorFn: (row) => row.isArchived ? "Yes" : "No",
        header: "Archived",
    },
    {
        accessorFn: (row) => row.isPublic ? "Yes" : "No",
        header: "Public",
    },
]

export function CoffeeDataTable<TData, TValue>({columns, data}: DataTableProps<TData, TValue>) {
    const router = useRouter();
    const params = useSearchParams();
    const page = parseInt(params.get("page") ?? "1");
    const archived = parseInt(params.get("archived") ?? "0");

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        manualPagination: true,
        state: {
            columnVisibility: {
                publicId: false,
            }
        }
    });

    return (
        <div>
            <div className={"flex flex-row-reverse my-2"}>
                <Button variant={"outline"} size={"sm"}
                        onClick={() => router.push(`/coffee?page=1&archived=${!!archived ? 0 : 1}`)}>
                    {!!archived ? "Hide archived" : "Show archived"}
                </Button>
            </div>
            <DataTableComponent table={table} columns={columns} />
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    disabled={page < 2}
                    onClick={() => router.push(`/coffee?page=${Math.max(0, page - 1)}&archived=${archived}`)}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    disabled={!table.getCanNextPage()}
                    onClick={() => router.push(`/coffee?page=${page + 1}&archived=${archived}`)}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}