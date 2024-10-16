import { useExperience } from "../api/useExperience.ts"
import { ExperienceCard } from "./ExperienceCard.tsx"

import { List } from "../components/List.tsx"

export function ExperienceList() {
    const experiences = useExperience()
    return (
        <List>
            {experiences.map((experience) => (
                <ExperienceCard key={experience.slug} experience={experience}/>
            ))}
        </List>
    )
}