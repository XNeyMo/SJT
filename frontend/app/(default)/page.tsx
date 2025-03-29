'use client';

import { useState } from "react";
import Header from "@components/Header";
import Wizard from "@components/Wizard";
import ImportFile from "@components/ImportFile";

export default function Home() {
  const [useWizard, setUseWizard] = useState(true);

  return (
    <main>
      <Header />

      <section className="h-auto md:h-[calc(100vh-7.5rem)] flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 p-6 md:p-10 text-center md:text-left">
        <div className="flex flex-col items-center justify-center text-center gap-5 w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl w-full md:w-4/5">
            Find the best possible <span className="text-gradient font-bold">Schedule</span>
          </h1>

          <p className="text-lg md:text-xl w-full md:w-3/4">
            Enter all possible subjects and timetables to find the best combination for your semester.
          </p>

          <button
            onClick={() => setUseWizard(!useWizard)}
            className="
              py-2 px-6 w-2/3 md:w-1/3
              bg-gradient-to-r from-[#FEECE3] to-[#FFA9CC] rounded-3xl
              hover:from-[#FFA9CC] hover:to-[#FEECE3]
              text-black font-semibold
              transition duration-500 cursor-pointer text-sm md:text-base
            "
          >
            {useWizard ? "Use File" : "Use Wizard"}
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          {useWizard ? <Wizard /> : <ImportFile />}
        </div>
      </section>
    </main>
  );
}

