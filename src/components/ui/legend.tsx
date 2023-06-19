"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {HTMLAttributes} from "react";

const legendVariants = cva(
    "text-lg font-medium leading-none mb-3 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

export interface LegendProps extends HTMLAttributes<HTMLLegendElement> {}

const Legend = ({ className, ...props}: LegendProps ) => (
    <legend
        className={cn(legendVariants(), className)}
        {...props}
    />
);
Legend.displayName = "Legend"

export { Legend }
