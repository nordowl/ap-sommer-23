"use client"

import Slider from "@/src/components/Slider";
import TeaserTabs from "@/src/components/TeaserTabs";
import Gallery from "@/src/components/Gallery";
import CtaBanner from "@/src/components/CtaBanner";
import { Metadata } from "next";
import { ParallaxProvider } from 'react-scroll-parallax';
import Button from "@/src/components/Button";

export const metadata: Metadata = {
    title: "Schwimmspaß Freibad und Schwimmhalle | Badespaß in Wasserland"
}

const Page = () => {
    return (
        <ParallaxProvider>
            <div className="page">
                <Slider/>

                <section>
                    <div className="columns columns--2 mt-8">
                        <div>
                            <h1>Schwimmspaß GmbH<br/>in Wasserland</h1>
                            <h5 className="mt-4 font-bold">Einfach gemeinsam abtauchen</h5>
                        </div>
                        <div className="mt-4">
                            <p>Wir betreiben ein öffentliches <b>Schwimmbad für die ganze Familie</b>.</p>
                            <p>Egal, ob Sie mit Ihrem Kleinkind kommen, Jugendliche/r sind oder Sportschwimmer/-in, unsere Becken bieten allen einen passenden Ort. Dazu kommen Sprungtürme im Innen- und Außenbereich.</p>
                            <p>Über die <b>Sauna</b> erfahren Sie alles Wichtige hier: <a href="http://www.sauna-wasserland.de" className="link">www.sauna-wasserland.de</a>.</p>
                            <p>Das Freibad mit Liegewiese ist <a href="" className="link">von Mai bis Oktober</a> geöffnet. Wir bieten außerdem: <a href="" className="link">Schwimmkurse für Kinder und Erwachsene</a>, <a href="" className="link">Aqua-Fitness-Angebote</a> sowie <a href="" className="link">spezielle Events für Groß und Klein</a>. Bleiben Sie neugierig!</p>
                        </div>
                    </div>
                </section>

                <TeaserTabs/>

                <CtaBanner>
                    <div>
                        <h2 className="mb-4">Angebote + Events</h2>
                        <Button
                            label="Alle Angebote ansehen"
                            link=""
                            primary
                        />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium alias eaque labore ea maxime asperiores natus magnam magni doloremque?</p>
                    </div>
                </CtaBanner>

                <Gallery/>
            </div>
        </ParallaxProvider>
    );
}
 
export default Page;