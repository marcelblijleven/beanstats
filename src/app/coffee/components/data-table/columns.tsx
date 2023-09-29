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
                className={"hover:underline"}
                href={`/coffee/${row.getValue("publicId")}`}>{row.getValue("name")}
            </Link>
        ),
        header: "Name",
    },
    {
        accessorKey: "roastDate",
        header: "Roast date",
    },
    {
        accessorKey: "buyDate",
        header: "Buy date",
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
            row.roaster.name
        ),
        header: "Roaster",
    },
    {
        accessorFn: (row) => row.varieties.map(variety => variety.name).join(", "),
        header: "Varieties",
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