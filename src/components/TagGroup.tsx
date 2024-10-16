import clsx from "clsx"
import { BoxProps } from "./Box.tsx"


import "./TagGroup.css"

export interface TagGroupProps extends BoxProps {
    className?: string
}

export function TagGroup({ className, children }: TagGroupProps) {
    return (
        <div className={clsx("tag-group", className)}>{children}</div>
    )
}