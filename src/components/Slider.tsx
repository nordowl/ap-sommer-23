"use client"

import Slide1 from "@/src/images/slide-1.webp"
import Slide2 from "@/src/images/slide-2.webp"
import Slide3 from "@/src/images/slide-3.webp"
import Slide4 from "@/src/images/slide-4.webp"
import Slide5 from "@/src/images/slide-5.webp"

import { useState, useEffect } from "react"
import { register } from "swiper/element/bundle"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

register()

const Slider = () => {

    useEffect(()=> {
        const swiperEl = document.querySelector('swiper-container');

        swiperEl?.addEventListener('slidechange', (event) => {
            console.log(event);
        });
    },[])

    const slides = [
        {
            img: Slide1,
            title: "Seepferdchen (5-10 Jahre)",
            text: "Wir wollen nicht baden gehen. Wendig wie ein Seepferdchen im Wasser."
        },
        {
            img: Slide2,
            title: "Kindergeburtstag feiern",
            text: "Wasservergnügen ohne Ende. Eine fröhliche Rutschpartie zum Kindergeburtstag."
        },
        {
            img: Slide3,
            title: "Jugend holt Silber",
            text: "Wer tauchen kann, geht nicht unter. Silberstreif am Horizont."
        },
        {
            img: Slide4,
            title: "Filmnacht am Pool",
            text: "Einfach gemeinsam abtauchen. Ein Familienvergnügen par excellence."
        },
        {
            img: Slide5,
            title: "Aqua-Fitness für Erwachsene",
            text: "Wer cool ist, scheut das Wasser nicht. Es muss nicht immer nur Schwimmen sein."
        },
    ]

    return (
        <swiper-container
            pagination={{
                type: "progressbar"
            }}
            navigation
            loop
            autoplay-delay="5000"
            spaceBetween={64}
            speed={1000}
            draggable="false"
            allowSlideNext="false"
            allowSlidePrev="false"
            allowTouchMove="false"
            noSwiping="true"
        >
            {slides.map(slide =>
                <swiper-slide key={slide.title} style={{pointerEvents: "none"}}>
                    <div className="slide-image">
                        <Image src={slide.img} alt={slide.title}/>
                    </div>
                    <div className="slide-content">
                        <h2>{slide.title}</h2>
                        <p>{slide.text}</p>
                    </div>
                </swiper-slide>
            )}
        </swiper-container>
    );
}
 
export default Slider;