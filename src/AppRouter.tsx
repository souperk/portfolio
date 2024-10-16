import { Redirect, Route, Router, Switch } from "wouter"
import { AboutPage } from "./pages/AboutPage.tsx"

import { ArticleListPage } from "./pages/ArticleListPage.tsx"
import { ContactPage } from "./pages/ContactPage.tsx"
import { HomePage } from "./pages/HomePage.tsx"
import { ProjectListPage } from "./pages/ProjectListPage.tsx"
import { ProjectPage } from "./pages/ProjectPage.tsx"
import { ResumePage } from "./pages/ResumePage.tsx"


export function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/articles" component={ArticleListPage}/>
                <Route path="/projects" component={ProjectListPage}/>
                <Route path="/projects/:slug" component={ProjectPage}/>
                <Route path="/resume" component={ResumePage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/">
                    <Redirect to="/home"/>
                </Route>
                <Route>
                    404 Page Not Found
                </Route>
            </Switch>
        </Router>
    )
}