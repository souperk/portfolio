export interface ProjectScreenshot {
    title: string
    description?: string
    src: string
}

export interface ProjectFeature {
    title: string
    description?: string
    screenshots: ProjectScreenshot[]
}

export interface Project {
    slug: string
    title: string
    description: string
    duration?: string
    githubUrl?: string
    tags: string[]
    screenshots: ProjectScreenshot[]
    features: ProjectFeature[]
    isFeatured: boolean
}