"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel, getPaginationRowModel,
    useReactTable
} from "@tanstack/react-table";
import {useRouter, useSearchParams} from 'next/navigation'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {DataTableComponent} from "@/components/data-table";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[],
}

export function DataTable<TData, TValue>({columns, data}: DataTableProps<TData, TValue>) {
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
    })

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