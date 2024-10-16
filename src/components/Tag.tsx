import { ReactNode } from "react"

import "./Tag.css"

export interface TagProps {
    children?: ReactNode
}

export function Tag({ children }: TagProps) {
    return (
        <div className="tag">
            {children}
        </div>
    )
}

export interface TagContentProps {
    children?: ReactNode
}

export function TagContent({ children }: TagContentProps) {
    return (
        <div className="tag__content">{children}</div>
    )
}

export interface TagIconProps {
    src: string
}

export function TagIcon({ src }: TagIconProps) {
    return (
        <img className="tag__icon" src={src} alt="icon"/>
    )
}