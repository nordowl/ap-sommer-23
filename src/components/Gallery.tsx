"use client"

import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { useParallax } from 'react-scroll-parallax';
import Img1 from "@/src/images/gallery-1.webp"
import Img2 from "@/src/images/gallery-2.webp"
import Img3 from "@/src/images/gallery-3.webp"
import Img4 from "@/src/images/gallery-4.webp"
import Img5 from "@/src/images/gallery-5.webp"

const Gallery = () => {
    return (
        <section className="gallery">
            <GalleryImage
                speed={10}
                img={Img1}
                alt="Personen im Schwimmbad"
                className=""
            />
            <GalleryImage
                speed={5}
                img={Img2}
                alt="Personen im Schwimmbad"
                className=""
            />
            <GalleryImage
                speed={20}
                img={Img4}
                alt="Personen im Schwimmbad"
                className=""
            />
            <GalleryImage
                speed={15}
                img={Img3}
                alt="Personen im Schwimmbad"
                className=""
            />
            <GalleryImage
                speed={8}
                img={Img5}
                alt="Personen im Schwimmbad"
                className=""
            />
        </section>
    );
}



interface GalleryImage {
    speed: number,
    className?: string,
    img: StaticImageData,
    alt: string
}

const GalleryImage = ({
    speed,
    className,
    img,
    alt
}: GalleryImage ) => {

    const { ref } = useParallax<HTMLDivElement>({ speed: speed });

    return (
        <div className={clsx("gallery-img", className)} ref={ref}>
            <Image src={img} alt={alt}/>
        </div>
    )
}
 
export default Gallery;