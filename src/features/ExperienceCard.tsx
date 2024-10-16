import { Experience } from "../api/Experience.ts"
import { useTags } from "../api/useTags.ts"
import { Card, CardContent } from "../components/Card.tsx"

import "./ExperienceCard.css"
import { Tag, TagContent, TagIcon } from "../components/Tag.tsx"

export interface ExperienceCardProps {
    experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
    const tags = useTags()
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
                    {experience.tags.map(tag => {
                        const { title, icon } = tags.find(x => x.slug === tag) ?? { title: tag }
                        return (
                            <Tag>
                                {icon && <TagIcon src={icon}/>}
                                <TagContent>{title}</TagContent>
                            </Tag>
                        )
                    })}
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