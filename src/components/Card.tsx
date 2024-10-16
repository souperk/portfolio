import clsx from "clsx"
import { BoxProps } from "./Box.tsx"

import "./Card.css"

export interface CardProps extends BoxProps {
    className?: string
}


export function Card({ className, children }: CardProps) {
    return (
        <div className={clsx("card", className)}>
            {children}
        </div>
    )
}

export function CardHeader({ children }: BoxProps) {
    return (
        <div className="card__header">{children}</div>
    )
}

export interface CardContentProps extends BoxProps {
    className?: string
}

export function CardContent({ className, children }: CardContentProps) {
    return (
        <div className={clsx("card__content", className)}>
            {children}
        </div>
    )
}