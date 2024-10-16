import { useProjects } from "../api/useProjects.ts"
import { ProjectCard } from "./ProjectCard.tsx"

import "./ProjectGrid.css"

export interface ProjectGridProps {
    featuredOnly?: boolean
}

export function ProjectGrid({ featuredOnly = false }: ProjectGridProps) {
    const projects = useProjects()
    return (
        <div className="project-grid">
            {projects.filter(project => project.isFeatured || !featuredOnly).map((project) => (
                <ProjectCard
                    key={project.slug}
                    project={project}
                />
            ))}
        </div>
    )
}