"use client"

import Slide1 from "@/src/images/slide-1.webp"
import Slide2 from "@/src/images/slide-2.webp"
import Slide3 from "@/src/images/slide-3.webp"
import Slide4 from "@/src/images/slide-4.webp"
import Slide5 from "@/src/images/slide-5.webp"

import Button from "./Button"
import Image from "next/image"
import { Navigation, Pagination, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation';

const Slider = () => {

    const slides = [
        {
            img: Slide1,
            title: "Seepferdchen (5-10 Jahre)",
            text: "Wir wollen nicht baden gehen. Wendig wie ein Seepferdchen im Wasser.",
            btnText: "Jetzt Kurs buchen",
            btnLink: "",
        },
        {
            img: Slide2,
            title: "Kindergeburtstag feiern",
            text: "Wasservergnügen ohne Ende. Eine fröhliche Rutschpartie zum Kindergeburtstag.",
            btnText: "Geburtstag anfragen",
            btnLink: "",
        },
        {
            img: Slide3,
            title: "Jugend holt Silber",
            text: "Wer tauchen kann, geht nicht unter. Silberstreif am Horizont.",
            btnText: "Jetzt Kurs buchen",
            btnLink: "",
        },
        {
            img: Slide4,
            title: "Filmnacht am Pool",
            text: "Einfach gemeinsam abtauchen. Ein Familienvergnügen par excellence.",
            btnText: "Jetzt reservieren",
            btnLink: "",
        },
        {
            img: Slide5,
            title: "Aqua-Fitness für Erwachsene",
            text: "Wer cool ist, scheut das Wasser nicht. Es muss nicht immer nur Schwimmen sein.",
            btnText: "Kurse ansehen",
            btnLink: "",
        },
    ]

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{
                clickable: true,
                type: "bullets"
            }}
            loop
            autoplay={{
                delay: 6000,
                disableOnInteraction: false
            }}
            spaceBetween={32}
            speed={1000}
            slidesPerView={1.4}
            centeredSlides={true}
            draggable={false}
        >
            {slides.map(slide =>
                <SwiperSlide key={slide.title} style={{pointerEvents: "none"}}>
                    <div className="slide-image">
                        <Image src={slide.img} alt={slide.title}/>
                    </div>
                    <div className="slide-content">
                        <h2>{slide.title}</h2>
                        <p>{slide.text}</p>
                        <div className="mt-4 button-wrapper">
                            <Button
                                primary
                                label={slide.btnText}
                                link={slide.btnLink}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    );
}
 
export default Slider;