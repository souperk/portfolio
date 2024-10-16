import { EducationList } from "../features/EducationList.tsx"
import { ExperienceList } from "../features/ExperienceList.tsx"
import { Introduction } from "../features/Introduction.tsx"
import { ProjectGrid } from "../features/ProjectGrid.tsx"


export function HomePage() {
    return (
        <div className="home-page">
            <Introduction/>
            <h2>Projects</h2>
            <ProjectGrid featuredOnly/>
            <h2>Experience</h2>
            <ExperienceList/>
            <h2>Education</h2>
            <EducationList/>
        </div>
    )
}