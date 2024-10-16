import clsx from "clsx"
import { useRef, useEffect, ReactEventHandler, useCallback, MouseEvent } from "react"

import { BoxProps } from "./Box.tsx"

import "./Modal.css"

export interface ModalProps extends BoxProps {
    className?: string
    isOpen?: boolean
    onCancel?: ReactEventHandler
    onClose?: ReactEventHandler
}

export function Modal({ isOpen = false, onCancel, onClose, children, className }: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (!dialogRef.current) return

        if (isOpen) {
            dialogRef.current.showModal()
        } else {
            dialogRef.current.close()
        }
    }, [isOpen])

    const handleOnClick = useCallback((event: MouseEvent<HTMLDialogElement>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const isWithin = (
            event.clientX >= rect.left
            && event.clientX <= rect.right
            && event.clientY >= rect.top
            && event.clientY <= rect.bottom
        )
        if(!isWithin) {
            event.preventDefault()
            event.currentTarget.close()
        }
    }, [])


    return (
        <dialog
            ref={dialogRef}
            className={clsx("modal", className)}
            onClose={onClose}
            onCancel={onCancel}
            onClick={handleOnClick}
        >
            <div className="modal__body">
                {children}
            </div>
        </dialog>
    )
}
