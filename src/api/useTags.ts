import { Tag } from "./Tag.ts"

const Tags: Tag[] = [
    { slug: "kotlin", title: "Kotlin", icon: "/icons/logo-kotlin.png" },
    { slug: "cpp", title: "C++", icon: "/icons/logo-cpp.png" },
    { slug: "python", title: "Python", icon: "/icons/logo-python.png" },
    { slug: "flask", title: "Flask", icon: "/icons/logo-python.png" },
    { slug: "sqlalchemy", title: "SQLAlchemy", icon: "/icons/logo-python.png" },
    { slug: "celery", title: "Celery", icon: "/icons/logo-python.png" },
    { slug: "django", title: "Django", icon: "/icons/logo-python.png" },
    { slug: "pycharm", title: "PyCharm", icon: "/icons/logo-pycharm.png" },
    { slug: "typescript", title: "TypeScript", icon: "/icons/logo-typescript.svg" },
    { slug: "react", title: "React", icon: "/icons/logo-react.png" },
    { slug: "chakra-ui", title: "Chakra UI", icon: "/icons/logo-chakra-ui.svg" },
    { slug: "angular", title: "Angular", icon: "/icons/logo-angular.svg" },
    { slug: "vite", title: "Vite", icon: "/icons/logo-vite.svg" },
    { slug: "csharp", title: "C#", icon: "/icons/logo-csharp.png" },
    { slug: "entity-framework", title: "EntityFramework", icon: "/icons/logo-csharp.png" },
    { slug: "k8s", title: "Kubernetes", icon: "/icons/logo-kubernetes.svg" },
    { slug: "helm", title: "Helm", icon: "/icons/logo-helm.png" },
    { slug: "docker", title: "Docker", icon: "/icons/logo-docker.svg" },
    { slug: "postgresql", title: "PostgreSQL", icon: "/icons/logo-postgresql.svg" },
    { slug: "rabbitmq", title: "RabbitMQ", icon: "/icons/logo-rabbitmq.svg" },
    { slug: "git", title: "git", icon: "/icons/logo-git.svg" },
    { slug: "tensorflow", title: "TensorFlow", icon: "/icons/logo-tensorflow.svg" },
]

export function useTags() {
    return Tags
}

export function useTag(slug: string): Tag | undefined {
    return Tags.find(tag => tag.slug === slug)
}