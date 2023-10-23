"use client"

import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {type HTMLAttributes} from "react";

const legendVariants = cva(
    "text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

export type LegendProps = HTMLAttributes<HTMLLegendElement>

const Legend = ({ className, ...props}: LegendProps ) => (
    <legend
        className={cn(legendVariants(), className)}
        {...props}
    />
);
Legend.displayName = "Legend"

export { Legend }
