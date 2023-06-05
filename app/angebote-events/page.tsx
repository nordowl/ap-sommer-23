import Hero from "@/src/components/Hero";
import HeaderImg from "@/src/images/slide-1.webp"
import ArrowLink from "@/src/components/ArrowLink";

const Page = () => {
    return (
        <>
            <Hero
                img={HeaderImg}
                imgAlt="Headerbild: Person im Wasser"
                title="Paddeln, Prusten, Tauchen, Springen, Schwimmen"
                text="Ermöglichen Sie sich und Ihrem Kind Freude und Sicherheit im nassen Element - von der Wassergewöhnung für die Allerkleinsten über das Seepferdchen-Abzeichen vor dem Schulanfang bis zur Wassergymnastik für die Älteren. Machen Sie sich und Ihre Kinder fit für die Wasserwelt. Wir bieten Schwimm- und Aquakurse für alle Altersgruppen und Klassen."
            />
            <section>
                <div className="grid grid-cols-2 gap-16">
                    <div>
                        <h2>I. Unsere Angebote für Kinder und Jugendliche</h2>
                        <div className="mt-4">
                            <ArrowLink link="" title="Babyschwimmen"/>
                            <ArrowLink link="" title="Wassergewöhnungskurse"/>
                            <ArrowLink link="" title="Ferienkurse Sommer"/>
                        </div>
                    </div>
                    <div>
                        <h2>II. Schwimmabzeichen für Kinder und Jugendliche</h2>
                        <div className="mt-4">
                            <ArrowLink link="" title="Vorbereitung Seepferdchen (ab 4 Jahre)"/>
                            <ArrowLink link="/kurse/seepferdchen" title="Seepferdchen (5-10 Jahre)"/>
                            <ArrowLink link="" title="Schwimmabzeichen Bronze (7-14 Jahre)"/>
                            <ArrowLink link="" title="Schwimmabzeichen Silber (7-14 Jahre)"/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-16 mt-8">
                    <div>
                        <h2>III. Unsere Angebote für die ganze Familie</h2>
                        <div className="mt-4">
                            <ArrowLink link="" title="Kindergeburtstag feiern"/>
                            <ArrowLink link="" title="Schwimmtanz und Wasserspiele"/>
                            <ArrowLink link="" title="Filmnacht für Familien"/>
                        </div>
                    </div>
                    <div>
                        <h2>IV. Unsere Angebote für Erwachsene</h2>
                        <div className="mt-4">
                            <ArrowLink link="" title="Schwimmkurs Einstieg"/>
                            <ArrowLink link="" title="Schwimmkurs Stilschwimmen"/>
                            <ArrowLink link="" title="Schwimmkurs Leistungsgruppe"/>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h2>V. Unsere Angebote im Fitnessbereich</h2>
                    <div className="grid grid-cols-3 gap-16 mt-4">
                        <div>
                            <ArrowLink link="" title="Aqua-Fitness"/>
                            <ArrowLink link="" title="Wasser-Rehabilitation"/>
                            <ArrowLink link="" title="Wassergymnastik klassisch"/>
                        </div>
                        <div>
                            <ArrowLink link="" title="Aquafit spezial: Joggen und Krafttraining"/>
                            <ArrowLink link="" title="Aquafit spezial: Radfahren und Krafttraining"/>
                            <ArrowLink link="" title="Aquafit spezial: Mix"/>
                        </div>
                        <div>
                            <ArrowLink link="" title="Wassergymnastik in der Schwangerschaft"/>
                            <ArrowLink link="" title="Wassergymnastik für Übergewichtige"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Page;