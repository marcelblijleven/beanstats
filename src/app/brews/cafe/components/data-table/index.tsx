"use client"

import {
    ColumnDef,
    getCoreRowModel, getPaginationRowModel,
    useReactTable
} from "@tanstack/react-table";
import {useRouter, useSearchParams} from 'next/navigation'

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