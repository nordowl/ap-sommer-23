"use client";

import { IconSwimming, IconPool, IconCalendarStar } from "@tabler/icons-react";
import Img1 from "@/public/images/tab-img-1.webp";
import Img2 from "@/public/images/tab-img-2.webp";
import Img3 from "@/public/images/tab-img-3.webp";
import Img4 from "@/public/images/tab-img-4.webp";
import Image from "next/image";
import { Fragment, useEffect } from "react";

const TeaserTabs = () => {
    useEffect(() => {
        if (window.innerWidth >= 800) {
        const images = document.querySelectorAll(".teaser-tabs img");
        document
            .querySelector(".teaser-tabs")
            ?.addEventListener("mousemove", (e: any) => {
            const left = e.clientX;
            const top = e.clientY;
            images.forEach((img: any) => {
                img.style.left = left + "px";
                img.style.top = top + "px";
            });
            });
        }
    }, []);

  const items = [
    {
        icon: <IconSwimming />,
        title: "Schwimmkurse für Kinder und Erwachsene",
        btnText: "Preise ansehen",
        btnLink: "/angebote-events",
        img: Img1,
    },
    {
        icon: <IconPool />,
        title: "Das Freibad mit Liegewiese ist von Mai bis Oktober geöffnet",
        btnText: "Öffnungszeiten ansehen",
        btnLink: "/oeffnungszeiten-preise",
        img: Img2,
    },
    {
        icon: <IconSwimming />,
        title: "Aqua-Fitness-Angebote",
        btnText: "Kurse entdecken",
        btnLink: "/kurse/aqua-fitness",
        img: Img3,
    },
    {
        icon: <IconCalendarStar />,
        title: "Spezielle Events für Groß und Klein. Bleiben Sie neugierig!",
        btnText: "Jetzt Event planen",
        btnLink: "/angebote-events/kindergeburtstag",
        img: Img4,
    },
  ];

  return (
    <section>
      <h2>Wir bieten außerdem</h2>
      <div className="columns columns--2">
        <div className="teaser-tabs">
          {items.map((item) => (
            <Fragment key={item.title}>
              <div className="teaser-tab">
                {item.icon}
                <div className="content">
                  <h4>{item.title}</h4>
                  <a href={item.btnLink} className="link">
                    {item.btnText}
                  </a>
                </div>
              </div>
              <Image src={item.img} alt="Bild: Person im Schwimmbad" />
            </Fragment>
          ))}
        </div>
        <div className="teaser-tabs-fallback-image">
          <Image src={Img2} alt="Bild: Person im Schwimmbad" />
        </div>
      </div>
    </section>
  );
};

export default TeaserTabs;
