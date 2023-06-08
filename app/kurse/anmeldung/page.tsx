import Button from "@/src/components/Button";

const Page = () => {
    return (
        <section className="narrow">
            <h1 className="mb-8">Anmeldeformular</h1>
            <form>
                <div className="mb-4 field">
                    <label htmlFor="kurs" className="font-bold">Kurs wählen</label>
                    <select name="kurs" id="kurs">
                        <option value="seepferdchen">Seepferdchen (5-10 Jahre)</option>
                        <option value="silber">Jugend holt Silber</option>
                        <option value="filmnacht">Filmnacht</option>
                        <option value="fitness">Aqua-Fitness für Erwachsene</option>
                    </select>
                </div>
                <div className="mb-6">
                    <p>Kurs beginnt ab Donnerstag, 6. Juli 2023</p>
                    <p>10 x 45 Min. 9.30 bis 10.15 Uhr, Sa/So inklusive</p>
                    <p className="text-xl font-bold">EUR 64,-</p>
                </div>
                <p className="font-bold">Anzumeldene Person:</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 mb-4">
                    <div className="field">
                        <label htmlFor="vorname">Vorname</label>
                        <input type="text" name="vorname" id="vorname"/>
                    </div>
                    <div className="field">
                        <label htmlFor="nachname">Nachname</label>
                        <input type="text" name="nachname" id="nachname"/>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 mb-4">
                    <div className="field">
                        <label htmlFor="strasse">Straße + Hausnummer</label>
                        <input type="text" name="strasse" id="strasse"/>
                    </div>
                    <div className="field">
                        <label htmlFor="plz">PLZ</label>
                        <input type="number" name="plz" id="plz"/>
                    </div>
                    <div className="field">
                        <label htmlFor="stadt">Stadt</label>
                        <input type="text" name="stadt" id="stadt"/>
                    </div>
                </div>
                <div className="field mb-6">
                    <label htmlFor="telefon">Telefon</label>
                    <input type="tel" name="telefon" id="telefon"/>
                </div>
                <p className="font-bold">Falls ein Elternteil ein Kind anmeldet, bitte Namen des Elternteils angeben:</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="field">
                        <label htmlFor="vorname-eltern">Vorname Elternteil</label>
                        <input type="text" name="vorname-eltern" id="vorname-eltern"/>
                    </div>
                    <div className="field">
                        <label htmlFor="nachname-eltern">Nachname Elternteil</label>
                        <input type="text" name="nachname-eltern" id="nachname-eltern"/>
                    </div>
                </div>
                <Button
                    label="Jetzt verbindlich buchen"
                    primary
                    className="mt-8"
                    type="submit"
                />
            </form>
        </section>
    );
}
 
export default Page;