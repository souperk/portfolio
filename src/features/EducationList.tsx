import { useEducation } from "../api/useEducation.ts"
import { List } from "../components/List.tsx"
import { EducationCard } from "./EducationCard.tsx"


export function EducationList() {
    const educations = useEducation()
    return (
        <List>
            {educations.map(education => (
                <EducationCard key={education.slug} education={education}/>
            ))}
        </List>
    )
}