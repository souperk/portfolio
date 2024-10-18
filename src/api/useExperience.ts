import { Experience } from "./Experience.ts"

const Experiences: Experience[] = [
    {
        slug: "forallsecure",
        position: "Software Engineer",
        company: "ForAllSecure",
        companyLogo: "/icons/logo-mayhem.png",
        start: "Dec 2021",
        end: "Jul 2024",
        duration: "2 years 9 months",
        location: "Pittsburgh (Remote)",
        jobType: "Full-time",
        description: "",
        responsibilities: [
            "Developed software as a member of an agile team, participating in scrum processes, bug triaging, and requirement setting.",
            "Participated in operations rotation, responding to incidents promptly and effectively.",
            "Modernized the web development stack using React and Chakra UI.",
            "Researched the applications of Multi-Armed Bandit (MAB) scheduling for black-box fuzzing.",
            "Took ownership of the job scheduling component, utilizing Python, Celery, and RabbitMQ.",
            "Implemented automated performance benchmarking using Python and Jenkins.",
            "Integrated over 500 open-source projects to mayhem’s grey-box fuzzing solution.",
            "Maintained and hardened third-party dependencies (RabbitMQ, PostgreSQL) in accordance with\nGameWarden’s cybersecurity guidelines.",
        ],
        tags: [
            "python", "flask", "sqlalchemy", "celery",
            "typescript", "react", "chakra-ui",
            "k8s", "docker", "helm",
            "postgresql", "rabbitmq",
            "git"
        ],
    },
    {
        slug: "sgdigital",
        position: "Senior Software Engineer",
        company: "SG Digital",
        companyLogo: "/icons/logo-sgdigital.png",
        start: "Feb 2021",
        end: "Nov 2021",
        duration: "9 months",
        location: "Athens (Remote)",
        jobType: "Full-time",
        description: "",
        responsibilities: [
            "Developed software as a member of an agile team, participating in scrum processes, bug triaging, and requirement setting.",
            "Designed and implemented authentication service integrations (Python, Django).",
            "Developed and implemented service health monitoring solutions using Python and Prometheus.",
            "Ensured compliance with regional online betting regulations.",
        ],
        tags: ["python", "django", "postgresql"],
    },
    {
        slug: "i2s",
        position: "Software Engineer",
        company: "i2s",
        companyLogo: "/icons/logo-i2s.png",
        start: "Jul 2017",
        end: "Jan 2021",
        duration: "3 years 7 months",
        location: "Athens",
        jobType: "Full-time",
        description: "",
        responsibilities: [
            "Developed software as part of an agile team, participating in scrum processes, bug triaging, and requirement setting.",
            "Refactored two projects from a monolithic architecture to a RESTful architecture.",
            "Led the engineering effort to improve application performance in preparation for the merger of three major customers (C#, EntityFramework, SQL).",
            "Modernized web interfaces by migrating from AngularJS to Angular and TypeScript, implementing best practices for responsiveness and accessibility.",
            "Led the engineering effort for developing an IoT data collection and processing platform for aquaculture devices using .NET, Flask, and Angular.",
            "Developed feed consumption prediction models using encoder-decoder neural networks with TensorFlow.",
            "Improved software development practices by introducing a ticketing system (GitLab), introducing git for version control, and creating operations documentation.",
        ],
        tags: ["csharp", "entity-framework", "typescript", "angular", "postgresql"],
    },
]

export function useExperience(): Experience[] {
    return Experiences
}