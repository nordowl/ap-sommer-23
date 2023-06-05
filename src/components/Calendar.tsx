"use client"

import { ReactNode, useEffect, useState } from "react"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import clsx from "clsx"

interface Calendar {
    months: {
        name: string
        range: 28 | 29 | 30 | 31
        skipFirst?: number
        bookableDays: {
            day: number
            isStart?: boolean
            isEnd?: boolean
            info: string | ReactNode
            onClickDay: (e?: any) => void
            border?: "blue" | "yellow" | "orange"
        }[]
    }[],
    legend: {
        title: string
        border?: "blue" | "yellow" | "orange"
    }[]
}

const Calendar = ({
    months,
    legend
}: Calendar) => {

    const [activeMonth, setActiveMonth] = useState(0)
    const [today, setToday] = useState(0)

    useEffect(()=> {
        setToday(new Date().getDate())
    }, [])

    return (
        <div className="calendar">
            <div className="calendar__legend">
                { legend.map(l =>
                    <div className={clsx(
                        "item",
                        l.border == "blue" && "is-blue",
                        l.border == "orange" && "is-orange",
                        l.border == "yellow" && "is-yellow",
                    )}>{l.title}</div>
                )}
            </div>
            { months.map((month, index)=> {
                const days = Array.from({length: month.range}, (_, i) => i + 1)
                const daysToSkip = month.skipFirst ? Array.from({length: month.skipFirst}) : undefined

                if (activeMonth == index) return (
                    <div className="calendar__month" key={index}>
                        <div className="calendar__header">
                            <div className={clsx(
                                "calendar__button",
                                activeMonth == 0 && "disabled"
                            )}>
                                <IconChevronLeft
                                    onClick={()=> {
                                        if (activeMonth > 0 && months.length > 1) {
                                            setActiveMonth(c => c - 1)
                                        }
                                    }}
                                    />
                            </div>
                            <h5>{month.name}</h5>
                            <div className={clsx(
                                "calendar__button",
                                activeMonth == months.length || months.length <= 1 && "disabled"
                            )}>
                                <IconChevronRight
                                    onClick={()=> {
                                        if (activeMonth < month.range && months.length > 1) {
                                            setActiveMonth(c => c + 1)
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className="calendar__weekdays">
                            <div>Montag</div>
                            <div>Dienstag</div>
                            <div>Mittwoch</div>
                            <div>Donnerstag</div>
                            <div>Freitag</div>
                            <div>Samstag</div>
                            <div>Sonntag</div>
                        </div>
                        <div className="calendar__days">
                            { daysToSkip?.map((skipDay, index) =>
                                <div></div>
                            )}
                            { days.map((day, index) => {
                                const dayInfo = month.bookableDays.find(d => d.day == index + 1)

                                return (
                                    <div
                                        className={clsx(
                                            "calendar__day",
                                            today == day && "calendar__day--today"
                                        )}
                                        key={index}
                                    >
                                        <div className="day__label">{day}</div>
                                        { dayInfo && (
                                            <div
                                                className={clsx(
                                                    "day-info",
                                                    day < today && "disabled",
                                                    dayInfo.border == "blue" && "is-blue",
                                                    dayInfo.border == "orange" && "is-orange",
                                                    dayInfo.border == "yellow" && "is-yellow",
                                                )}
                                                onClick={day >= today ? dayInfo.onClickDay : undefined}
                                            >
                                                {dayInfo.info}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
 
export default Calendar;