"use client"

import {
    type ColumnDef,
    getCoreRowModel, getPaginationRowModel,
    useReactTable
} from "@tanstack/react-table";
import {useRouter, useSearchParams} from 'next/navigation'

import {Button} from "@/components/ui/button";
import {DataTableComponent} from "@/components/data-table";
import Link from "next/link";
import {createSelectSchema} from "drizzle-zod";
import {cafeBrews} from "@/db/schema";
import {type z} from "zod";
import {type DataTableProps} from "@/components/overview-pages/interfaces";

const selectSchema = createSelectSchema(cafeBrews);

export type CafeBrew = z.infer<typeof selectSchema>;

export const columns: ColumnDef<CafeBrew>[] = [
    {
        accessorKey: "publicId",
    },
    {
        accessorKey: "type",
        cell: ({row}) => {
            const publicId: string = row.getValue("publicId");
            return (
                <Link
                    className={"w-[200px] inline-block whitespace-nowrap truncate overflow-ellipsis hover:underline"}
                    href={`/brews/cafe/${publicId}`}>{row.getValue("type")}
                </Link>
            )
        },
        header: "Type",
    },
    {
        accessorKey: "date",
        header: "Date",
        cell: ({row}) => (
            <div className={"w-[90px]"}>{row.getValue("date")}</div>
        )
    },
    {
        accessorKey: "cafe",
        header: "Cafe",
        cell: ({row}) => (
            <div className={"w-[200px] whitespace-nowrap truncate overflow-ellipsis"}>{row.getValue("cafe")}</div>
        )
    },
    {
        accessorKey: "cafeCity",
        header: "City",
    },
    {
        accessorKey: "cafeCountry",
        header: "Country",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "rating",
        header: "Rating",
    },
]

export function CafeBrewDataTable({data}: DataTableProps<CafeBrew>) {
    const router = useRouter();
    const params = useSearchParams();
    const page = parseInt(params.get("page") ?? "1");

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
    })

    return (
        <div>
            <DataTableComponent table={table} columns={columns} />
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    disabled={page < 2}
                    onClick={() => router.push(`/brews/cafe?page=${Math.max(0, page - 1)}`)}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    disabled={!table.getCanNextPage()}
                    onClick={() => router.push(`/brews/cafe?page=${page + 1}`)}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}