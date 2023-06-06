"use client";

import Hero from "@/src/components/Hero";
import HeaderImg from "@/public/images/header-kurs-silber.webp";
import Calendar from "@/src/components/Calendar";

const Page = () => {
  return (
    <>
      <Hero
        img={HeaderImg}
        imgAlt="Headerbild: Person im Wasser"
        title="Jugend holt Silber"
        text="In dem Kurs übst du, 20 Minuten am Stück zu schwimmen. In dieser Zeit musst du mindestens 
                400 m zurücklegen, davon 300 m in Bauch- oder Rückenlage und dann weitere 100 m in der anderen Körperlage. Dein Schwimmstil soll erkennbar sein. Außerdem gehört Tief- und Streckentauchen zum Lernprogramm, sowie der sichere Sprung vom Beckenrand."
      />
      <section>
        <Calendar
          legend={[
            {
              title:
                "Schwimmabzeichen Silber: Ab Donnerstag, 6. Juli 2023 | 10 x 45 Min. 11.30 bis 12.15 Uhr, Sa/So inklusive | EUR 76,-",
              border: "blue",
            },
            {
              title:
                "Schwimmabzeichen Silber: Ab Donnerstag, 20. Juli 2023 | 10 x 45 Min. 11.30 bis 12.15 Uhr, Sa/So inklusive | EUR 76,-",
              border: "orange",
            },
            {
              title:
                "Schwimmabzeichen Silber: Montag, 31. Juli bis Freitag, 11. August 2023 | 10 x 45 Min. 11.30 bis 12.15 Uhr, ohne Sa/So | EUR 76,-",
              border: "yellow",
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
                  info: "11:30 - 12:15 (45 Minuten)",
                  isStart: true,
                  border: "blue",
                },
                {
                  day: 7,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "blue",
                },
                {
                  day: 8,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "blue",
                },
                {
                  day: 9,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "blue",
                },
                {
                  day: 10,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "blue",
                },
                {
                  day: 11,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "blue",
                },
                {
                  day: 12,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "blue",
                },
                {
                  day: 13,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "blue",
                },
                {
                  day: 14,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "blue",
                },
                {
                  day: 15,
                  info: "11:30 - 12:15 (45 Minuten)",
                  isEnd: true,
                  border: "blue",
                },
                {
                  day: 20,
                  info: "11:30 - 12:15 (45 Minuten)",
                  isStart: true,
                  border: "orange",
                },
                {
                  day: 21,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "orange",
                },
                {
                  day: 22,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "orange",
                },
                {
                  day: 23,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "orange",
                },
                {
                  day: 24,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "orange",
                },
                {
                  day: 25,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "orange",
                },
                {
                  day: 26,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "orange",
                },
                {
                  day: 27,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "orange",
                },
                {
                  day: 28,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "orange",
                },
                {
                  day: 29,
                  info: "11:30 - 12:15 (45 Minuten)",
                  isEnd: true,
                  border: "orange",
                },
                {
                  day: 31,
                  info: "11:30 - 12:15 (45 Minuten)",
                  isEnd: true,
                  border: "yellow",
                },
              ],
            },
            {
              name: "August",
              range: 31,
              skipFirst: 1,
              bookableDays: [
                {
                  day: 1,
                  info: "11:30 - 12:15 (45 Minuten)",
                  isStart: true,
                  border: "yellow",
                },
                {
                  day: 2,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "yellow",
                },
                {
                  day: 3,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "yellow",
                },
                {
                  day: 4,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "yellow",
                },
                {
                  day: 5,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "yellow",
                },
                {
                  day: 6,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "yellow",
                },
                {
                  day: 7,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "yellow",
                },
                {
                  day: 8,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "yellow",
                },
                {
                  day: 9,
                  info: "11:30 - 12:15 (45 Minuten)",
                  border: "yellow",
                },
                {
                  day: 10,
                  info: "11:30 - 12:15 (45 Minuten)",
                  isEnd: true,
                  border: "yellow",
                },
                {
                  day: 11,
                  info: "11:30 - 12:15 (45 Minuten)",
                  isStart: true,
                  border: "yellow",
                },
              ],
            },
          ]}
        />
      </section>
    </>
  );
};

export default Page;
