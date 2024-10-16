import { useLayoutEffect, useState } from "react"

export type Breakpoint = "mobile" | "tablet" | "desktop";

export interface BreakpointValues<T> {
    mobile: T;
    tablet?: T;
    desktop?: T;
}

function useCurrentBreakpoint(): Breakpoint {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>("mobile")

    useLayoutEffect(() => {
        if (!window) {
            return
        }

        function updateBreakpoint() {
            if (window.innerWidth < 576) {
                setBreakpoint("mobile")
            } else if (window.innerWidth < 992) {
                setBreakpoint("tablet")
            } else {
                setBreakpoint("desktop")
            }
        }

        window.addEventListener("resize", updateBreakpoint)
        return () => {
            window.removeEventListener("resize", updateBreakpoint)
        }
    })

    return breakpoint
}

export function useBreakpoints<T>(values: BreakpointValues<T>): T {
    const breakpoint = useCurrentBreakpoint()
    if (breakpoint === "desktop") {
        return values.desktop ?? values.tablet ?? values.mobile
    }
    if (breakpoint === "tablet") {
        return values.tablet ?? values.mobile
    }
    return values.mobile
}