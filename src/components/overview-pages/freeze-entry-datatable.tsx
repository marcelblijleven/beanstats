"use client"

import {type DataTableProps} from "@/components/overview-pages/interfaces";
import {useRouter, useSearchParams} from "next/navigation";
import {type ColumnDef, getCoreRowModel, getPaginationRowModel, useReactTable} from "@tanstack/react-table";
import {Button} from "@/components/ui/button";
import {DataTableComponent} from "@/components/data-table";
import {createSelectSchema} from "drizzle-zod";
import {beans, freezeEntries} from "@/db/schema";
import {type z} from "zod";
import Link from "next/link";

const selectSchema = createSelectSchema(freezeEntries).extend({
    bean: createSelectSchema(beans)
});

export type FreezeEntry = z.infer<typeof selectSchema>

export const columns: ColumnDef<FreezeEntry>[] = [
    {
        accessorKey:  "publicId",
    },
    {
        accessorKey: "label",
        cell: ({row}) => {
            const value: string = row.getValue("publicId");
            return (
                <Link
                    href={`/coffee/freeze/${value}`}
                    className={"w-[200px] inline-block whitespace-nowrap truncate overflow-ellipsis hover:underline"}
                >
                    {row.getValue("label")}
                </Link>
            )
        },
        header: "Label",
    },
    {
        accessorFn: (row) => row.bean.name,
        header: "Coffee",
    },
    {
        accessorKey: "freezeDate",
        header: "Freeze date",
    },
    {
        accessorKey: "weight",
        header: "Weight",
    },
    {
        accessorFn: (row) => row.bean.roastDate ?? "-",
        header: "Roast date",
    },
    {
        accessorFn: (row) => !row.frozen ? "Yes" : "No",
        header: "Defrosted",
    }
]

export function FreezeEntryDataTable<TData, TValue>({columns, data}: DataTableProps<TData, TValue>) {
    const router = useRouter();
    const params = useSearchParams();
    const page = parseInt(params.get("page") ?? "1");
    const defrosted  = parseInt(params.get("defrosted") ?? "0");

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
                        onClick={() => router.push(`/coffee/freeze?page=1&defrosted=${!!defrosted ? 0 : 1}`)}>
                    {!!defrosted ? "Hide defrosted" : "Show defrosted"}
                </Button>
            </div>
            <DataTableComponent table={table} columns={columns} />
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    disabled={page < 2}
                    onClick={() => router.push(`/coffee/freeze?page=${Math.max(0, page - 1)}&archived=${defrosted}`)}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    disabled={!table.getCanNextPage()}
                    onClick={() => router.push(`/coffee/freeze?page=${page + 1}&defrosted=${defrosted}`)}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}