import {type HTMLAttributes} from "react";

import {cn} from "@/lib/utils";

export type CardGridProps = HTMLAttributes<HTMLDivElement>

const CardGrid = ({className, children, ...props}: CardGridProps) => (
    <div className={cn("flex flex-wrap gap-4 md:gap-6", className)} {...props}>
        {children}
    </div>
);

export default CardGrid