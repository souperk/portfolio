import "@fontsource/roboto"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto-mono"
import { useEffect } from "react"

import { AppRouter } from "./AppRouter.tsx"
import { Navigation } from "./components/Navigation.tsx"

import './App.css'


export function App() {

    useEffect(() => {
        if (document) {
            document.title = "Kostas Alexopoulos"
        }
    }, []);

    return (
        <div className="app-container">
            <Navigation/>
            <AppRouter/>
        </div>
    )
}
