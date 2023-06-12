"use client"
import {motion} from "framer-motion";

const getWidth = (value: number, total: number) => `${(value / (total || 0)) * 100}%`

const ProgressComponent = (props: { label: string, value: number, total: number }) => (
    <div className="flex items-center justify-between gap-2">
        <div className="relative flex items-center w-full">
            <span className="flex items-center h-10 px-2 z-10 text-sm capitalize">{props.label}</span>
            <motion.div
                className="absolute origin-left h-8 bg-orange-100"
                style={{width: getWidth(props.value, props.total)}}
                initial={{transform: "scaleX(0)"}}
                animate={{transform: "scaleX(1)"}}
                transition={{ease: "easeOut", duration: 0.5}}
            />
        </div>
        <p className="text-sm">{props.value}</p>
    </div>
)

export default ProgressComponent;