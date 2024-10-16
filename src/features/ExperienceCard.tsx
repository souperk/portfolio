import { Experience } from "../api/Experience.ts"
import { Card, CardContent } from "../components/Card.tsx"
import { TagBySlug } from "./TagBySlug.tsx"

import "./ExperienceCard.css"

export interface ExperienceCardProps {
    experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <Card className="experience-card">
            <CardContent className="experience-card__header">
                {experience.companyLogo && (
                    <img className="experience-card__logo" src={experience.companyLogo} alt="company logo"/>
                )}
                <div className="experience-card__position">
                    {experience.position}
                </div>
                <div className="experience-card__company">
                    {experience.company}
                </div>
                <div className="experience-card__period">
                    {experience.start} - {experience.end}
                </div>
                <div className="experience-card__details">
                    <div className="experience-card__duration">
                        {experience.duration}
                    </div>
                    <div className="experience-card__location">
                        {experience.location}
                    </div>
                    <div className="experience-card__job-type">
                        {experience.jobType}
                    </div>
                </div>
            </CardContent>
            {experience.tags && (
                <CardContent className="experience-card__tags">
                    {experience.tags.map(tag => <TagBySlug key={tag} slug={tag}/>)}
                </CardContent>
            )}
            {experience.description && (
                <CardContent className="experience-card__description">
                    {experience.description}
                </CardContent>
            )}
            {experience.responsibilities && (
                <CardContent className="experience-card__responsibilities">
                    <h3>Responsibilities</h3>
                    <ul>
                        {experience.responsibilities.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </CardContent>
            )}
        </Card>
    )
}