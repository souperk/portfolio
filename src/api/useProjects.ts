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
                title: "Issue Tracker", description: "", screenshots: [
                    { title: "Project List", src: "/screenshots/loryth-project-list.png", },
                    { title: "Project", src: "/screenshots/loryth-project.png", },
                ]
            },
            {
                title: "Drive", description: "", screenshots: [
                    { title: "Drive (grid)", src: "/screenshots/loryth-drive-grid.png", },
                    { title: "Drive (list)", src: "/screenshots/loryth-drive-grid.png", },
                ]
            },
        ],
        isFeatured: true,
    },
    {
        slug: "going-merry", title: "Going Merry",
        tags: ["python", "flask", "react", "postgresql",],
        duration: "Mar 2023 - Aug 2023 (5 months)",
        description: `
            A ride sharing platform.
        `,
        screenshots: [],
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
        githubUrl: "https://github.com/souperk/souperk-portfolio",
        tags: ["react"],
        screenshots: [],
        features: [],
        isFeatured: false,
    },
    {
        slug: "tensorflow-demand-drive-execution",
        title: "TensorFlow: Demand Drive Execution",
        description: "",
        duration: "",
        tags: ["cpp", "python", "tensorflow"],
        screenshots: [],
        features: [],
        isFeatured: false,
    },
    {
        slug: "sigmod-2020",
        title: "SIGMOD 2020 Database Programming Contest",
        description: "",
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