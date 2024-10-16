import { Education } from "./Education.ts"


export function useEducation(): Education[] {
    return [
        {
            slug: "uoa",
            institution: "University of Athens",
            institutionLogo: "/icons/logo-uoa.png",
            title: "BSc Computer Science & Telecommunications",
            duration: "2016 - 2021",
            description: "",
        }
    ]
}