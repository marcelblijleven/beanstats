import {forwardRef, HTMLAttributes} from "react";
import {cn} from "@/lib/utils";
import styles from "./headings.module.css";


export const H1 = forwardRef<
    HTMLHeadingElement,
    HTMLAttributes<HTMLHeadingElement>
>(({className, ...props}, ref) => (
    <h1
        className={cn("text-5xl font-extrabold tracking-tight leading-none", styles.balance, className)}
        ref={ref}
    >
        {props.children}
    </h1>
));

export const H2 = forwardRef<
    HTMLHeadingElement,
    HTMLAttributes<HTMLHeadingElement>
    >(({className, ...props}, ref) => (
    <h2
        className={cn("text-4xl font-bold tracking-tight leading-none", styles.balance, className)}
        ref={ref}
    >
        {props.children}
    </h2>
));

export const H3 = forwardRef<
    HTMLHeadingElement,
    HTMLAttributes<HTMLHeadingElement>
    >(({className, ...props}, ref) => (
    <h3
        className={cn("text-3xl font-bold tracking-tight leading-none", styles.balance, className)}
        ref={ref}
    >
        {props.children}
    </h3>
));

H1.displayName = "H1";
H2.displayName = "H2";
H3.displayName = "H3";
