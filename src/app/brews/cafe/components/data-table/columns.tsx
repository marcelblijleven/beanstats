"use client"

import {type ColumnDef} from "@tanstack/react-table";
import Link from "next/link";

export type CafeBrew = {
    publicId: string;
    name: string | undefined;
    type: string | undefined;
    variety: string | undefined;
    date: string | undefined;
    cafe: string | undefined;
    cafeCity: string | undefined;
    cafeCountry: string | undefined;
    price: string;
    rating: number | undefined;
}

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