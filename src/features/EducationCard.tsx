import { Education } from "../api/Education.ts"
import { Card, CardContent } from "../components/Card.tsx"


import "./EducationCard.css"

export interface EducationCardProps {
    education: Education
}

export function EducationCard({ education }: EducationCardProps) {
    return (
        <Card className="education-card">
            <CardContent className="education-card__header">
                <div className="education-card__title">
                    {education.title}
                </div>
                <img className="education-card__logo" src={education.institutionLogo} alt="Instituion Logo"/>
                <div className="education-card__institution">
                    {education.institution}
                </div>
                <div className="education-card__duration">
                    {education.duration}
                </div>
            </CardContent>
            {education.description && (
                <CardContent className="education-card__description">
                    {education.description}
                </CardContent>
            )}
        </Card>
    )
}