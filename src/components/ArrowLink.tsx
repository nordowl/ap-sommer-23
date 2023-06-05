import { IconArrowRight } from "@tabler/icons-react"

interface Link {
    link: string
    title: string
}

const ArrowLink = ({
    link,
    title
}: Link) => {
    return (
        <a href={link} className="arrow-link">
            <IconArrowRight/>
            <span className="label">{title}</span>
        </a>
    );
}
 
export default ArrowLink;