import { Project } from "./Project.ts"

const Projects: Project[] = [
    {
        slug: "loryth", title: "Loryth",
        tags: ["python", "flask", "react", "chakra-ui", "postgresql",],
        duration: "2021 - Present",
        description: `
            A personal productivity suite featuring an issues tracker, a calendar,
            and a journal.
        `,
        screenshots: [
            { title: "Homepage", src: "/screenshots/loryth-homepage.png", },
        ],
        features: [
            {
                title: "Issue Tracking",
                description: `
                    Easily set up a new project and bring your team on board by inviting 
                    them to collaborate. Keep everyone aligned by managing tasks, tracking issues, 
                    and monitoring progress, all within a shared workspace.                
                `,
                screenshots: [
                    { title: "Project List", src: "/screenshots/loryth-project-list.png", },
                    { title: "Project", src: "/screenshots/loryth-project.png", },
                ]
            },
            {
                title: "Drive",
                description: `
                    Organize and store your project files securely with an integrated filesystem 
                    drive. Upload, manage, and share documents, code, and other resources within
                    your team.
                `,
                screenshots: [
                    { title: "Drive (grid)", src: "/screenshots/loryth-drive-grid.png", },
                    { title: "Drive (list)", src: "/screenshots/loryth-drive-grid.png", },
                ]
            },
            {
                title: "Time Tracking",
                description: `
                    Track your time effortlessly by logging hours into customizable categories 
                    that suit your workflow. Get detailed insights with built-in analytics to 
                    understand how time is spent across different tasks and projects. Use this 
                    data to boost productivity, manage resources more effectively, and make 
                    informed decisions to keep your projects on schedule.
                `,
                screenshots: [],
            },
        ],
        isFeatured: true,
    },
    {
        slug: "going-merry", title: "Going Merry",
        tags: ["python", "flask", "react", "postgresql"],
        duration: "Mar 2023 - Aug 2023 (5 months)",
        description: `
            A ride sharing platform.
        `,
        screenshots: [
            { title: "Homepage", src: "/screenshots/going-merry-search.png", },
            { title: "User Profile", src: "/screenshots/going-merry-user-profile.png", },
            { title: "User Reviews", src: "/screenshots/going-merry-user-reviews.png", },
            { title: "User History", src: "/screenshots/going-merry-user-history.png", },
        ],
        features: [],
        isFeatured: true,
    },
    {
        slug: "pycharm-sqlalchemy-plugin",
        title: "PyCharm SQLAlchemy Plugin",
        description: `A plugin for the PyCharm IDE that provides typing support for
        python's popular ORM library SQLAlchemy.`,
        duration: "Mar 2024 (1 month)",
        githubUrl: "https://github.com/souperk/pycharm-sqlalchemy-plugin",
        tags: ["kotlin", "pycharm"],
        screenshots: [],
        features: [],
        isFeatured: true,
    },
    {
        slug: "souperk-portfolio", title: "Portfolio", description: "This portfolio website.",
        duration: "Oct 2024",
        githubUrl: "https://github.com/souperk/portfolio",
        tags: ["react", "vite"],
        screenshots: [],
        features: [],
        isFeatured: false,
    },
    {
        slug: "tensorflow-demand-drive-execution",
        title: "TensorFlow: Demand Drive Execution",
        description: "Implemented a demand driven executor for TensorFlow as part of my undergraduate thesis.",
        duration: "",
        tags: ["cpp", "python", "tensorflow"],
        screenshots: [],
        features: [],
        isFeatured: false,
    },
    {
        slug: "sigmod-2020",
        title: "SIGMOD 2020 Database Programming Contest",
        description: `
            Represented UOA for the SIGMOD 2020 database programming contest, 
            which required the implementation of an AI based entity resolution 
            algorithm for unstructured online product data.
        `,
        duration: "",
        tags: ["python", "tensorflow"],
        screenshots: [],
        features: [],
        isFeatured: false,
    },
]

export function useProjects(): Project[] {
    return Projects
}

export function useProject(slug: string): Project | undefined {
    return Projects.find(x => x.slug === slug)
}