import { createContext, useCallback, useContext, useState } from "react"

interface CarouselItem {
    src: string
    title: string
    description?: string
}

export interface UseCarouselProps {
    onItemSelected?: (item: CarouselItem | undefined) => void
}

export interface UseCarousel {
    selectedItem: CarouselItem | undefined
    selectItem: (selectedItem: CarouselItem | undefined) => void
}

export function useCarousel({ onItemSelected }: UseCarouselProps): UseCarousel {
    const [selectedItem, setSelectedItem] = useState<CarouselItem>()
    const selectItem = useCallback((item: CarouselItem | undefined) => {
        setSelectedItem(item)
        if (onItemSelected) {
            onItemSelected(item)
        }
    }, [onItemSelected])
    return { selectedItem, selectItem }
}

export const CarouselContext = createContext<UseCarousel | null>(null)

export function useCarouselContext(): UseCarousel {
    const context = useContext(CarouselContext)
    if (!context) {
        throw new Error("CarouselContext not defined")
    }

    return context
}