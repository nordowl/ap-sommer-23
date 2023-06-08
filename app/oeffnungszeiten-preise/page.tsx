import Image from "next/image";
import Img from "@/public/images/tab-img-2.webp"

const Page = () => {
    return (
        <section>
            <h1 className="mb-8">Öffnungszeiten & Preise</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 xl:gap-32">
                <div className="max-w-[34rem]">
                    <h2>Freibadsaison 2023:</h2>
                    <p>Von Donnerstag, 18. Mai bis Ende September (wetterabhängig)</p>
                    <div className="flex justify-between gap-4 mt-4">
                        <div className="font-bold">Mo, Di, Mi, Fr, So</div>
                        <div className="text-right">10 Uhr bis 18 Uhr</div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-bold">Do und Sa</div>
                        <div className="text-right">10 Uhr bis 21.30 Uhr</div>
                    </div>
                    <h2 className="mt-8">Öffnungszeiten Innenbereich:</h2>
                    <div className="flex justify-between gap-4 mt-4">
                        <div className="font-bold">Frühschwimmer</div>
                        <div className="text-right">6 Uhr bis 9 Uhr, Monatskarte 60,- EUR</div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-bold">Do und Sa</div>
                        <div className="text-right">10 Uhr bis 21.30 Uhr</div>
                    </div>
                    <h2 className="mt-8">Preise:</h2>
                    <div className="flex justify-between gap-4 mt-4">
                        <div className="font-bold">Erwachsene (ab 16 J.)</div>
                        <div className="text-right">2 Std. 5,50 EUR, Tageskarte 11,- EUR</div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-bold">Kinder</div>
                        <div className="text-right">2 Std. 3,50 EUR, Tageskarte 8,- EUR</div>
                    </div>
                    <h2 className="mt-8">Eintritt in der Freibadesaison für den Außenbereich:</h2>
                    <div className="flex justify-between gap-4 mt-4">
                        <div className="font-bold">Kinder bis 15 J.</div>
                        <div className="text-right">1,- EUR</div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-bold">Kinder ab 16 J.</div>
                        <div className="text-right">3,- EUR</div>
                    </div>
                    <p>Achtung: Ermäßigungen und Jahreskarten bitte an der Kasse erfragen!</p>
                </div>
                <div className="w-full max-h-[32rem] flex items-center justify-center overflow-hidden rounded-[1rem]">
                    <Image src={Img} alt="Personen im Schwimmbad" className="rounded-[1rem] w-full"/>
                </div>
            </div>
        </section>
    );
}
 
export default Page;