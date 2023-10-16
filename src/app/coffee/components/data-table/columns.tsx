"use client"

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export type Coffee = {
    publicId: string,
    name: string,
    roastDate: string | undefined,
    buyDate: string | undefined,
    weight: number | undefined,
    price: number | undefined,
    roaster: {
        name: string
    },
    varieties: {
       name: string | undefined,
    }[],
    isArchived: boolean,
    isPublic: boolean,
}

export const columns: ColumnDef<Coffee>[] = [
    {
        accessorKey: "publicId",
    },
    {
        accessorKey: "name",
        cell: ({row}) => (
                <Link
                    className={"w-[200px] inline-block whitespace-nowrap truncate overflow-ellipsis hover:underline"}
                    href={`/coffee/${row.getValue("publicId")}`}>{row.getValue("name")}
                </Link>
        ),
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