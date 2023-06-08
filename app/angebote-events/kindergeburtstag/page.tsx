import Hero from "@/src/components/Hero";
import HeroImg from "@/public/images/slide-2.webp";
import Button from "@/src/components/Button";

const Page = () => {
    return (
        <>
            <Hero
                img={HeroImg}
                imgAlt="Kinder im Schwimmbad"
                title="Kindergeburtstag feiern"
                text="Stellen Sie Ihre Wunschliste zusammen und wir machen Ihnen ein Preisangebot."
            />
            <section>
                <h3>Sie können zwischen drei Animationen wählen:</h3>
                <ul className="mt-4 list-disc pl-4">
                    <li>Altersgerechte Wasserballspiele</li>
                    <li>Nach verborgenen Schätzen tauchen</li>
                    <li>Spielerisches Wettschwimmen</li>
                </ul>
                <p>Außerdem gibt es ein Programm mit oder ohne Fotobegleitung, mit oder ohne Bewirtung. Informieren Sie uns, wie viele Kinder und wie viele Erwachsene an dem Event teilnehmen werden. Und besprechen Sie mit uns Ihren Lieblingstermin.</p>
            </section>
            <section>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="mb-8">Meine Wunschliste für den Kindergeburtstag:</h2>
                            <div>
                                <div className="flex gap-4 items-center">
                                    <input type="radio" name="animation" id="animation-mit"/>
                                    <label htmlFor="animation-mit" className="mb-0 font-bold">Mit Animation</label>
                                </div>
                                <div className="ml-8">
                                    <div className="flex gap-4 items-center">
                                        <input type="checkbox" name="wasserball" id="wasserball"/>
                                        <label htmlFor="wasserball" className="mb-0">Altersgerechte Wasserballspiele</label>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <input type="checkbox" name="tauchen" id="tauchen"/>
                                        <label htmlFor="tauchen" className="mb-0">Nach verborgenen Schätzen tauchen</label>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <input type="checkbox" name="schwimmen" id="schwimmen"/>
                                        <label htmlFor="schwimmen" className="mb-0">Spielerisches Wettschwimmen</label>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center mt-4">
                                    <input type="radio" name="animation" id="animation-ohne"/>
                                    <label htmlFor="animation-ohne" className="mb-0 font-bold">Ohne Animation, selbstgestaltet</label>
                                </div>
                                <div className="flex gap-4 items-center mt-4">
                                    <input type="radio" name="bewirtung" id="bewirtung-mit"/>
                                    <label htmlFor="bewirtung-mit" className="mb-0 font-bold">Mit Bewirtung (Sie erstellen das Menü)</label>
                                </div>
                                <div className="ml-8">
                                    <h3 className="my-4">Essen</h3>
                                    <div className="flex gap-4 items-center">
                                        <input type="checkbox" name="pommes" id="pommes"/>
                                        <label htmlFor="pommes" className="mb-0">Pommes</label>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <input type="checkbox" name="würstchen" id="würstchen"/>
                                        <label htmlFor="würstchen" className="mb-0">Würstchen</label>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <input type="checkbox" name="veg-würstchen" id="veg-würstchen"/>
                                        <label htmlFor="veg-würstchen" className="mb-0">Vegetarische Würstchen</label>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <input type="checkbox" name="schnitzel" id="schnitzel"/>
                                        <label htmlFor="schnitzel" className="mb-0">Schnitzel</label>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <input type="checkbox" name="bratlinge" id="bratlinge"/>
                                        <label htmlFor="bratlinge" className="mb-0">Vegetarische Bratlinge</label>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <input type="checkbox" name="spaghetti" id="spaghetti"/>
                                        <label htmlFor="spaghetti" className="mb-0">Spaghetti mit Tomatensoße</label>
                                    </div>
                                    <h3 className="my-4">Getränke</h3>
                                    <div className="flex gap-4 items-center">
                                        <input type="checkbox" name="wasser-s" id="wasser-s"/>
                                        <label htmlFor="wasser-s" className="mb-0">Wasser (still)</label>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <input type="checkbox" name="wasser-m" id="wasser-m"/>
                                        <label htmlFor="wasser-m" className="mb-0">Wasser (medium)</label>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <input type="checkbox" name="apfelsaft" id="apfelsaft"/>
                                        <label htmlFor="apfelsaft" className="mb-0">Apfelsaft</label>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <input type="checkbox" name="orangensaft" id="orangensaft"/>
                                        <label htmlFor="orangensaft" className="mb-0">Orangensaft</label>
                                    </div>
                                    <h4 className="my-2">Limonaden</h4>
                                    <div className="ml-4">
                                        <div className="flex gap-4 items-center">
                                            <input type="checkbox" name="zitrone" id="zitrone"/>
                                            <label htmlFor="zitrone" className="mb-0">Zitrone</label>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <input type="checkbox" name="orange" id="orange"/>
                                            <label htmlFor="orange" className="mb-0">Orange</label>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <input type="checkbox" name="himbeere" id="himbeere"/>
                                            <label htmlFor="himbeere" className="mb-0">Himbeere</label>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <input type="checkbox" name="waldmeister" id="waldmeister"/>
                                            <label htmlFor="waldmeister" className="mb-0">Waldmeister</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center mt-4">
                                    <input type="radio" name="bewirtung" id="bewirtung-ohne"/>
                                    <label htmlFor="bewirtung-ohne" className="mb-0 font-bold">Ohne Bewirtung</label>
                                </div>
                                <div className="flex gap-4 items-center mt-4">
                                    <input type="checkbox" name="foto" id="foto"/>
                                    <label htmlFor="foto" className="mb-0 font-bold">Mit Fotobegleitung</label>
                                </div>
                            </div>
                        </div>
                        <div className="sticky top-16 self-start">
                            <h2 className="mb-8">Angaben zur Person:</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-4">
                                <div className="field">
                                    <label htmlFor="anrede">Anrede (optional)</label>
                                    <select name="anrede" id="anrede">
                                        <option value="" selected disabled>Auswählen...</option>
                                        <option value="frau">Frau</option>
                                        <option value="herr">Herr</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="vorname">Vorname *</label>
                                    <input type="text" name="vorname" id="vorname" required/>
                                </div>
                                <div className="field">
                                    <label htmlFor="nachname">Nachname *</label>
                                    <input type="text" name="nachname" id="nachname" required/>
                                </div>
                            </div>
                            <div className="mb-4 field">
                                <label htmlFor="termin">Wunschtermin *</label>
                                <div className="flex gap-2">
                                    <select name="tag" id="tag" required>
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="5">05</option>
                                        <option value="6">06</option>
                                        <option value="7">07</option>
                                        <option value="8">08</option>
                                        <option value="9">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                    <select name="monat" id="monat" required>
                                        <option value="1">Januar</option>
                                        <option value="2">Februar</option>
                                        <option value="3">März</option>
                                        <option value="4">April</option>
                                        <option value="5">Mai</option>
                                        <option value="6">Juni</option>
                                        <option value="7">Juli</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">Oktober</option>
                                        <option value="11">November</option>
                                        <option value="12">Dezember</option>
                                    </select>
                                    <select name="jahr" id="jahr" required>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field mb-4">
                                <label htmlFor="email">E-Mail-Adresse *</label>
                                <input type="email" name="email" id="email" required/>
                            </div>
                            <div className="field mb-4">
                                <label htmlFor="telefon">Telefonnummer *</label>
                                <input type="tel" name="telefon" id="telefon" required/>
                            </div>
                            <p>* Pflichtfelder</p>
                            <Button
                                className="mt-8"
                                label="Anfrage senden"
                                primary
                            />
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}
 
export default Page;