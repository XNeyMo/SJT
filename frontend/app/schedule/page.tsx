'use client';

import { useEffect, useMemo, useState, Fragment } from "react";
import Header from "@components/Header";

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const colors = [
  'bg-[#FEECE3] text-black',
  'bg-[#FCD5BF] text-black',
  'bg-[#FEAFAE] text-black',
  'bg-[#FFA4BD] text-black',
  'bg-[#FFA9CC] text-black',
  'bg-[#E4C1F9] text-black',
  'bg-[#D0F4DE] text-black',
  'bg-[#A9DEF9] text-black',
  'bg-[#FCF6BD] text-black',
];

export default function Schedule() {
  const [schedule, setSchedule] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("schedule");
    try {
      const parsed = JSON.parse(stored ?? "{}");
      const combination = parsed.combination ?? [];
      setSchedule(Array.isArray(combination) ? combination : []);
    } catch (e) {
      console.error("Error parsing schedule from localStorage:", e);
      setSchedule([]);
    }
  }, []);

  const computedHours = useMemo(() => {
    let minHour = Infinity;
    let maxHour = -Infinity;

    schedule.forEach((course) => {
      if (Array.isArray(course.schedule)) {
        course.schedule.forEach((block: any) => {
          const start = parseInt(block.startTime, 10);
          const end = parseInt(block.endTime, 10);
          if (!isNaN(start) && start < minHour) minHour = start;
          if (!isNaN(end) && end > maxHour) maxHour = end;
        });
      }
    });

    if (minHour === Infinity || maxHour === -Infinity) {
      minHour = 6;
      maxHour = 21;
    }

    const hoursArray = [];
    for (let h = minHour; h < maxHour; h++) {
      hoursArray.push(h);
    }
    return hoursArray;
  }, [schedule]);

  const getBlocksForHour = (day: string, hour: number) => {
    return schedule.filter((item) =>
      item.schedule?.some(
        (s: any) => s.day === day && s.startTime <= hour && s.endTime > hour
      )
    );
  };

  const subjectColorMap = useMemo(() => {
    const map = new Map<string, string>();
    let colorIndex = 0;
    schedule.forEach((course) => {
      if (!map.has(course.subjectName)) {
        map.set(course.subjectName, colors[colorIndex % colors.length]);
        colorIndex++;
      }
    });
    return map;
  }, [schedule]);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] fade-in">
      <Header />

      <section className="p-4 sm:p-6 md:p-10 flex flex-col-reverse lg:flex-row gap-8">
        <div className="flex-1 overflow-x-auto rounded-2xl border border-gray-800 shadow-lg bg-gradient-to-br from-[#0c0e13] via-[#0f111a] to-[#1a1c2c]">
          <div className="w-full overflow-x-auto">
            <div
              className="min-w-[700px] grid"
              style={{ gridTemplateColumns: `80px repeat(${days.length}, 1fr)` }}
            >
              <div className="h-12 flex items-center justify-center font-semibold text-sm text-gray-400 border border-gray-700 bg-black sticky left-0 z-10 backdrop-blur-md">
                Hour
              </div>
              {days.map((day) => (
                <div
                  key={day}
                  className="h-12 flex items-center justify-center font-semibold text-sm capitalize border border-gray-700 bg-black text-white"
                >
                  {day}
                </div>
              ))}

              {computedHours.map((hour) => (
                <Fragment key={hour}>
                  <div className="h-16 min-h-[64px] flex items-center justify-center text-sm text-gray-500 border border-gray-800 sticky left-0 z-10 bg-[var(--background)] backdrop-blur-md">
                    {hour}:00
                  </div>
                  {days.map((day) => {
                    const blocks = getBlocksForHour(day, hour);
                    return (
                      <div
                        key={`${day}-${hour}`}
                        className="relative h-16 min-h-[64px] border border-gray-800 bg-[var(--background)] transition-all duration-300 hover:bg-[#1a1c2c]"
                      >
                        {blocks.map((block, idx) => {
                          const colorClass = subjectColorMap.get(block.subjectName) ?? "bg-gray-300 text-white";
                          return (
                            <div
                              key={idx}
                              className={`absolute inset-1 text-xs rounded-lg px-1 py-0.5 flex items-center justify-center text-center font-semibold shadow-md transition-all duration-300 ${colorClass}`}
                            >
                              {block.subjectName}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-64 bg-[#0c0e13]/80 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl p-5">
          <h2 className="text-lg font-semibold mb-4 text-white">Resulting Courses</h2>
          <ul className="space-y-3">
            {schedule.map((item, idx) => {
              const colorClass = subjectColorMap.get(item.subjectName) ?? "bg-gray-300 text-black";
              return (
                <li
                  key={idx}
                  className={`p-3 rounded-xl ${colorClass} text-sm shadow-lg hover:scale-[1.03] transition-transform duration-200`}
                >
                  <p className="font-semibold">{item.subjectName}</p>
                  <p className="text-xs text-gray-800">Course: {item.code}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
