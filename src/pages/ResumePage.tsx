import { EducationList } from "../features/EducationList.tsx"
import { ExperienceList } from "../features/ExperienceList.tsx"
import { ProjectGrid } from "../features/ProjectGrid.tsx"


export function ResumePage() {
    return (
        <div className="resume-page">
            <h2>Experience</h2>
            <ExperienceList/>
            <h2>Education</h2>
            <EducationList/>
            <h2>Projects</h2>
            <ProjectGrid featuredOnly/>
        </div>
    )
}