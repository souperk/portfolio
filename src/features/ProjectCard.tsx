import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Link } from "wouter"
import { Project } from "../api/Project.ts"
import { Card, CardContent } from "../components/Card.tsx"

import "./ProjectCard.css"
import { TagGroup } from "../components/TagGroup.tsx"
import { TagBySlug } from "./TagBySlug.tsx"


export interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="project-card">
            <CardContent>
                <div className="project-card__header">
                    <div className="project-card__title">
                        <Link to={projectUrl(project)}>
                            {project.title}
                        </Link>
                    </div>
                    <div className="project-card__links">
                        {project.githubUrl && (
                            <a href={project.githubUrl}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        )}
                    </div>
                </div>
                {project.duration && (
                    <div className="project-card__duration">
                        {project.duration}
                    </div>
                )}
            </CardContent>
            <CardContent className="project-card__tags">
                <TagGroup>
                    {project.tags.map((tag) => <TagBySlug key={tag} slug={tag}/>)}
                </TagGroup>
            </CardContent>
            <CardContent className="project-card__description">
                {project.description}
            </CardContent>
        </Card>
    )
}


function projectUrl(project: Project) {
    return `/projects/${project.slug}`
}