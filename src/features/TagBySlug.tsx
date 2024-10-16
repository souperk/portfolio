import { useTag } from "../api/useTags.ts"
import { Tag, TagContent, TagIcon, TagProps } from "../components/Tag.tsx"


export interface TagBySlugProps extends TagProps {
    slug: string
}

export function TagBySlug({ slug, children, ...props }: TagBySlugProps) {

    const { title, icon } = useTag(slug) ?? { title: slug }
    return (
        <Tag {...props}>
            {icon && (<TagIcon src={icon}/>)}
            <TagContent>{title}</TagContent>
            {children}
        </Tag>
    )
}
