import {type ColumnDef} from "@tanstack/react-table";
import {type ReactNode} from "react";

export interface DataTableProps<TData> {
    columns?: ColumnDef<TData>[],
    data: TData[],
    inlineHeader?: ReactNode,
}
