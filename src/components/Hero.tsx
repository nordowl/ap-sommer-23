import { StaticImageData } from "next/image";
import Image from "next/image";

interface Hero {
    img: StaticImageData
    imgAlt: string
    title: string
    text: string
}

const Hero = ({
    img,
    imgAlt,
    title,
    text
}: Hero) => {
    return (
        <section className="pt-0">
            <div className="hero">
                <Image src={img} alt={imgAlt}/>
                <div className="hero__content">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;