import { useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"

import { BoxProps } from "./Box.tsx"
import { Modal } from "./Modal.tsx"
import { CarouselContext, useCarousel, useCarouselContext } from "./useCarousel.ts"

import "./Carousel.css"


export function Carousel({ children }: BoxProps) {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const context = useCarousel({
        onItemSelected: item => {
            if (!dialogRef.current) return
            if (item) {
                dialogRef.current.showModal()
            } else {
                dialogRef.current.close()
            }
        }
    })
    const { selectedItem, selectItem } = context

    return (
        <CarouselContext.Provider value={context}>
            <div className="carousel">
                {children}
            </div>
            {selectedItem && (
                <Modal
                    className="carousel-modal"
                    isOpen={!!selectedItem}
                    onClose={() => selectItem(undefined)}
                >
                    <div className="modal__header">
                        {selectedItem.title}
                        <button className="modal__close-button" onClick={() => selectItem(undefined)}>
                            <FontAwesomeIcon icon={faClose}/>
                        </button>
                    </div>
                    <img
                        className="carousel-modal__image"
                        src={selectedItem.src}
                        alt={selectedItem.title}
                    />
                    {/*<div className="carousel-modal__caption">*/}
                    {/*    <button className="carousel-modal__caption-button">*/}
                    {/*        <FontAwesomeIcon icon={faChevronLeft}/>*/}
                    {/*    </button>*/}
                    {/*    <div className="carousel-modal__description">*/}
                    {/*        {selectedItem.description}*/}
                    {/*    </div>*/}
                    {/*    <button className="carousel-modal__caption-button">*/}
                    {/*        <FontAwesomeIcon icon={faChevronRight}/>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </Modal>
            )}
        </CarouselContext.Provider>
    )
}

export interface CarouselItemProps {
    src: string
    title: string
    description?: string
}


export function CarouselItem({ src, title, description }: CarouselItemProps) {
    const { selectItem } = useCarouselContext()
    return (
        <div
            className="carousel-item"
            onClick={() => selectItem({ src, title, description })}
        >
            <img className="carousel-item__image" src={src} alt={title}/>
            <div className="carousel-item__overlay">
                <div className="carousel-item__caption">
                    <div className="carousel-item__title">
                        {title}
                    </div>
                    <div className="carousel-item__description">
                        {description}
                    </div>
                </div>
            </div>
        </div>

    )
}
