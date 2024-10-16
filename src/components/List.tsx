import { BoxProps } from "./Box.tsx"

import "./List.css"


export function List({ children }: BoxProps) {
    return (
        <div className="list">{children}</div>
    )
}