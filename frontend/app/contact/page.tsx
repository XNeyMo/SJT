'use client';

import Header from "@components/Header";
import { Email, GitHub, LinkedIn, Send, X } from "@mui/icons-material";
import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <Header />

      <section className="h-auto md:h-[calc(100vh-7.5rem)] flex flex-col items-center justify-center p-6 md:p-10 gap-10">
        <div className="flex flex-col items-center text-center gap-5 w-full md:w-2/3">
          <h1 className="text-3xl md:text-5xl w-full md:w-4/5">
            Contact <span className="text-gradient font-bold">Me</span>
          </h1>
          <p className="text-lg md:text-xl w-full md:w-3/4">
            Do you have suggestions or need help for improving Saijitan?
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-4xl *:h-full">
          <div className="p-5 flex flex-col gap-5 bg-gradient-to-b from-[#FEE3D5]/4 to-[#FFA5C1]/4 rounded-3xl w-full md:w-1/2">
            <h3 className="text-sm font-bold">Enter your details</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm">Name</label>
                <input
                  placeholder="Enter your name"
                  className="bg-white/5 border border-white/10 rounded-md px-3 py-1 text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Email</label>
                <input
                  placeholder="Enter your email"
                  type="email"
                  className="bg-white/5 border border-white/10 rounded-md px-3 py-1 text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Subject</label>
                <select className="bg-white/5 border border-white/10 rounded-md px-3 py-1 text-sm cursor-pointer *:bg-black">
                  <option value="Suggestion">Suggestion</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Help">Help</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm">Message</label>
              <textarea
                placeholder="Enter your message"
                className="bg-white/5 border border-white/10 rounded-md px-3 py-1 text-sm"
              />
            </div>

            <button
              className="px-4 py-2 w-full md:w-2/5 bg-gradient-to-r from-[#FEECE3] to-[#FFA9CC] rounded-md hover:from-[#FFA9CC] hover:to-[#FEECE3] text-black font-semibold ease-in-out duration-500 cursor-pointer flex items-center justify-center gap-2"
            >
              <Send /> Send
            </button>
          </div>

          <div className="p-5 flex flex-col gap-5 bg-gradient-to-b from-[#FEE3D5]/4 to-[#FFA5C1]/4 rounded-3xl w-full md:w-1/2">
            <h3 className="text-sm font-bold">SAIJITAN</h3>

            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
              <p className="text-sm">
                Saijitan is a software specialised in generating optimal schedules based on user preferences and constraints.
              </p>

              <div className="bg-linear-[135deg] from-[#FEECE3]/7 to-[#FFA9CC]/7 rounded-md p-5">
                <p className="text-gradient text-sm">
                  Your suggestions are essential to continue improving our tool and adapting it to your needs.
                </p>
              </div>
            </div>

            <h3 className="text-sm font-bold">Personal Links</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link
                href="https://www.linkedin.com/in/neyanmontes/"
                target="_blank" rel="noopener noreferrer"
                className="p-2 bg-gradient-to-r from-[#FEECE3] to-[#FFA9CC] rounded-md hover:from-[#FFA9CC] hover:to-[#FEECE3] text-black font-semibold ease-in-out duration-500 flex justify-center"
              >
                <LinkedIn />
              </Link>

              <Link href="https://www.github.com/XNeyMo/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gradient-to-r from-[#FEECE3] to-[#FFA9CC] rounded-md hover:from-[#FFA9CC] hover:to-[#FEECE3] text-black font-semibold ease-in-out duration-500 flex justify-center">
                <GitHub />
              </Link>

              <Link
                href="https://www.x.com/xneymodev/"
                target="_blank" rel="noopener noreferrer"
                className="p-2 bg-gradient-to-r from-[#FEECE3] to-[#FFA9CC] rounded-md hover:from-[#FFA9CC] hover:to-[#FEECE3] text-black font-semibold ease-in-out duration-500 flex justify-center"
              >
                <X />
              </Link>

              <Link
                href="mailto:xneymodev@protonmail.com"
                target="_blank" rel="noopener noreferrer"
                className="p-2 bg-gradient-to-r from-[#FEECE3] to-[#FFA9CC] rounded-md hover:from-[#FFA9CC] hover:to-[#FEECE3] text-black font-semibold ease-in-out duration-500 flex justify-center"
              >
                <Email />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
