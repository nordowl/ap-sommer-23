import Hero from "@/src/components/Hero";
import HeaderImg from "@/public/images/slide-4.webp";
import Button from "@/src/components/Button";

const Page = () => {
  return (
    <>
      <Hero
        img={HeaderImg}
        imgAlt="Headerbild: Person im Wasser"
        title="Filmnacht im Pool"
        text="Der Familienspaß ist garantiert, wenn Sie gemeinsam zur Filmnacht kommen. Unser Sommerhit: „Die Marx Brothers auf See“. Stellen Sie sich vor, wie Sie locker im Wasserbecken abhängen und sich über die Späße auf der Leinwand amüsieren. Jung und alt, dick und dünn."
      />
      <section>
        <div className="mb-8">
            <h2>Im Sommer, immer Freitags</h2>
            <p>Ab 16. Juni 2023, 20:00 Uhr</p>
        </div>
        <div className="columns columns--2">
            <div className="columns columns--2">
                <div>
                    <h3>Einzelperson</h3>
                    <div className="text-[2rem] font-bold">10,- EUR</div>
                    <Button
                        label="Jetzt buchen"
                        link="/kurse/anmeldung"
                        primary
                        className="mt-4"
                    />
                </div>
                <div>
                    <h3>Supersparpreis für Familien</h3>
                    <div className="text-[2rem] font-bold">15,- EUR</div>
                    <Button
                        label="Jetzt buchen"
                        link="/kurse/anmeldung"
                        primary
                        className="mt-4"
                    />
                </div>
            </div>
            <div>

            </div>
        </div>

      </section>
    </>
  );
};

export default Page;
