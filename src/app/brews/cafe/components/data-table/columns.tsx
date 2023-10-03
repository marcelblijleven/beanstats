"use client"

import {ColumnDef} from "@tanstack/react-table";
import Link from "next/link";

export type CafeBrew = {
    publicId: string;
    name: string | undefined;
    type: string | undefined;
    date: string | undefined;
    cafe: string | undefined;
    city: string | undefined;
    country: string | undefined;
    rating: number | undefined;
}

export const columns: ColumnDef<CafeBrew>[] = [
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
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "date",
        header: "Date",
        cell: ({row}) => (
            <div className={"w-[90px]"}>{row.getValue("Date")}</div>
        )
    },
    {
        accessorKey: "cafe",
        header: "Cafe",
        cell: ({row}) => (
            <div className={"w-[200px] whitespace-nowrap truncate overflow-ellipsis"}>{row.getValue("Cafe")}</div>
        )
    },
    {
        accessorKey: "city",
        header: "City",
    },
    {
        accessorKey: "country",
        header: "Country",
    },
    {
        accessorKey: "rating",
        header: "Rating",
    },
]