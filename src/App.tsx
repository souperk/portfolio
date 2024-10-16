import "@fontsource/roboto"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto-mono"

import { AppRouter } from "./AppRouter.tsx"
import { Navigation } from "./components/Navigation.tsx"

import './App.css'


export function App() {

  return (
      <div className="app-container">
          <Navigation/>
          <AppRouter/>
      </div>
  )
}
