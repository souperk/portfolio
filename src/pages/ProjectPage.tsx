import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import { useProject } from "../api/useProjects.ts"
import { Carousel, CarouselItem } from "../components/Carousel.tsx"
import { TagGroup } from "../components/TagGroup.tsx"
import { TagBySlug } from "../features/TagBySlug.tsx"
import { Error404Page } from "./Error404Page.tsx"

import "./ProjectPage.css"

export interface ProjectPageProps {
    params: {
        slug: string
    }
}

export function ProjectPage({ params: { slug } }: ProjectPageProps) {

    const project = useProject(slug)

    if (!project) {
        return <Error404Page/>
    }

    return (
        <div className="project-page">
            <div className="project-page__header">
                <h2 className="project-page__title">
                    {project.title}
                </h2>
                <div className="project-page__links">
                    {project.githubUrl && (
                        <a className="project-page__link"
                           href={project.githubUrl} target="_blank">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    )}
                </div>
            </div>

            <TagGroup>
                {project.tags.map(tag => <TagBySlug key={tag} slug={tag}/>)}
            </TagGroup>
            <p className="project-page__description">
                {project.description}
            </p>

            {project.screenshots.length > 0 && (
                <>
                    <h2>Screenshots</h2>
                    <Carousel>
                        {project.screenshots.map((screenshot, idx) => (
                            <CarouselItem
                                key={idx}
                                src={screenshot.src}
                                title={screenshot.title}
                                description={screenshot.description}
                            />
                        ))}
                    </Carousel>
                </>
            )}

            {project.features.length > 0 && (
                <>
                    <h2>Features</h2>
                    {project.features.map((feature, idx) => (
                        <section className="project-page__feature" key={idx}>
                            <h3>{feature.title}</h3>
                            {feature.description && (
                                <p>{feature.description}</p>
                            )}
                            <Carousel>
                                {feature.screenshots.map((screenshot, idx) => (
                                    <CarouselItem
                                        key={idx}
                                        src={screenshot.src}
                                        title={screenshot.title}
                                        description={screenshot.description}
                                    />
                                ))}
                            </Carousel>
                        </section>
                    ))}
                </>
            )}
        </div>
    )
}