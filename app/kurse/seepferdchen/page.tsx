"use client"

import Hero from "@/src/components/Hero";
import HeaderImg from "@/src/images/slide-3.webp"
import Calendar from "@/src/components/Calendar";

const Page = () => {
    return (
        <>
            <Hero
                img={HeaderImg}
                imgAlt="Headerbild: Person im Wasser"
                title="Seepferdchen (5-10 Jahre)"
                text="Die Kinder lernen, Arme und Beine im Wasser zu koordinieren und sie trainieren Kraft und Ausdauer. Bei der Seepferdchenprüfung müssen sie vom Beckenrand springen und sofort 25 Meter Schwimmen. Außerdem müssen sie einen Gegenstand aus dem schultertiefen Wasser holen und zeigen, dass sie die wichtigsten Baderegeln kennen."
            />
            <section>
                <Calendar
                    legend={[
                        {
                            title: "ab Donnerstag, 6. Juli 2023 | 10 x 45 Min. 9.30 bis 10.15 Uhr, Sa/So inklusive | EUR 64,-",
                            border: "blue"
                        },
                        {
                            title: "ab Donnerstag, 20. Juli 2023 | 10 x 45 Min. 9.30 bis 10.15 Uhr, Sa/So inklusive | EUR 64,-",
                            border: "orange"
                        },
                        {
                            title: "Montag, 31. Juli bis Freitag, 11. August 2023 | 10 x 45 Min. 9.30 bis 10.15 Uhr, ohne Sa/So | EUR 64,-",
                            border: "yellow"
                        },
                    ]}
                    months={[
                        {
                            name: "Juli",
                            range: 31,
                            skipFirst: 5,
                            bookableDays: [
                                {
                                    day: 6,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    isStart: true,
                                    onClickDay: ()=> undefined,
                                    border: "blue"
                                },
                                {
                                    day: 7,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "blue"
                                },
                                {
                                    day: 8,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "blue"
                                },
                                {
                                    day: 9,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "blue"
                                },
                                {
                                    day: 10,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "blue"
                                },
                                {
                                    day: 11,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "blue"
                                },
                                {
                                    day: 12,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "blue"
                                },
                                {
                                    day: 13,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "blue"
                                },
                                {
                                    day: 14,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "blue"
                                },
                                {
                                    day: 15,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    isEnd: true,
                                    onClickDay: ()=> undefined,
                                    border: "blue"
                                },
                                {
                                    day: 20,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    isStart: true,
                                    onClickDay: ()=> undefined,
                                    border: "orange"
                                },
                                {
                                    day: 21,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "orange"
                                },
                                {
                                    day: 22,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "orange"
                                },
                                {
                                    day: 23,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "orange"
                                },
                                {
                                    day: 24,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "orange"
                                },
                                {
                                    day: 25,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "orange"
                                },
                                {
                                    day: 26,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "orange"
                                },
                                {
                                    day: 27,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "orange"
                                },
                                {
                                    day: 28,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    onClickDay: ()=> undefined,
                                    border: "orange"
                                },
                                {
                                    day: 29,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    isEnd: true,
                                    onClickDay: ()=> undefined,
                                    border: "orange"
                                },
                                {
                                    day: 31,
                                    info: "09:30 - 10:15 (45 Minuten)",
                                    isEnd: true,
                                    onClickDay: ()=> undefined,
                                    border: "yellow"
                                },
                            ]
                        }
                    ]}
                />
            </section>
        </>
    );
}
 
export default Page;