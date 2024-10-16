import { Link, matchRoute, useLocation, useRouter } from "wouter"

import "./Navigation.css"

export function Navigation() {
    return (
        <div className="navigation">
            <NavigationItem title="Home" to="/home"/>
            {/*<NavigationItem title="About" to="/about"/>*/}
            {/*<NavigationItem title="Articles" to="/articles"/>*/}
            <NavigationItem title="Projects" to="/projects"/>
            <NavigationItem title="Resume" to="/resume"/>
            <NavigationItem title="Contact" to="/contact"/>
        </div>
    )
}


export interface NavigationItemProps {
    title: string
    to: string
}

export function NavigationItem({ title, to }: NavigationItemProps) {
    const [location] = useLocation()
    const { parser} = useRouter()
    const [isMatch] = matchRoute(parser, to, location, true)
    return (
        <Link
            to={to}
            className="navigation-item"
            data-active={isMatch || undefined}
        >
            {title}
        </Link>
    )
}