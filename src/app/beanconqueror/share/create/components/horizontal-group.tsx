import {HTMLAttributes} from "react";

const HorizontalGroup = ({children, ...props}: HTMLAttributes<HTMLDivElement>) => (
    <div className={"grid grid-cols-1 md:grid-cols-2 gap-2 items-center"} {...props}>
        {children}
    </div>
)

export default HorizontalGroup