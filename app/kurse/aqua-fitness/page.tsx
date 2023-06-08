"use client";

import Hero from "@/src/components/Hero";
import HeaderImg from "@/public/images/slide-5.webp";
import Calendar from "@/src/components/Calendar";

const Page = () => {
    return (
        <>
            <Hero
                img={HeaderImg}
                imgAlt="Headerbild: Person im Wasser"
                title="Aqua-Fitness für Erwachsene"
                text="Machen Sie mit bei der klassischen Wassergymnastik oder kräftigen Sie die Muskulatur beim Joggen und Radfahren im Wasser. Sie üben in leicht erwärmtem Wasser in der Halle - völlig wetterunabhängig in kleinen Gruppen."
            />
            <section>
                <Calendar
                    legend={[
                        {
                            title: "Immer dienstags: 10 x 45 Minuten EUR 64,- ab 6. Juni 2023, 12.30 Uhr",
                            border: "blue",
                        },
                    ]}
                    months={[
                        {
                            name: "Juni",
                            range: 30,
                            skipFirst: 3,
                            bookableDays: [
                                {
                                    day: 6,
                                    info: "12:30 - 13:15 (45 Minuten)",
                                    isStart: true,
                                    border: "blue",
                                },
                                {
                                    day: 13,
                                    info: "12:30 - 13:15 (45 Minuten)",
                                    border: "blue",
                                },
                                {
                                    day: 20,
                                    info: "12:30 - 13:15 (45 Minuten)",
                                    border: "blue",
                                },
                                {
                                    day: 27,
                                    info: "12:30 - 13:15 (45 Minuten)",
                                    border: "blue",
                                },
                            ]
                        },
                        {
                            name: "Juli",
                            range: 31,
                            skipFirst: 5,
                            bookableDays: [
                                {
                                    day: 4,
                                    info: "12:30 - 13:15 (45 Minuten)",
                                    isStart: true,
                                    border: "blue",
                                },
                                {
                                    day: 11,
                                    info: "12:30 - 13:15 (45 Minuten)",
                                    border: "blue",
                                },
                                {
                                    day: 18,
                                    info: "12:30 - 13:15 (45 Minuten)",
                                    border: "blue",
                                },
                                {
                                    day: 25,
                                    info: "12:30 - 13:15 (45 Minuten)",
                                    border: "blue",
                                },
                            ]
                        },
                        {
                            name: "August",
                            range: 31,
                            skipFirst: 1,
                            bookableDays: [
                                {
                                    day: 1,
                                    info: "12:30 - 13:15 (45 Minuten)",
                                    isStart: true,
                                    border: "blue",
                                },
                                {
                                    day: 8,
                                    info: "12:30 - 13:15 (45 Minuten)",
                                    border: "blue",
                                },
                            ]
                        },
                    ]}
                />
            </section>
        </>
    );
};

export default Page;
