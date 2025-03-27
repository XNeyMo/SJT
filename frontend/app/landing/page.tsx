'use client'

import { useState } from "react";
import LandingHeader from "@components/header/LandingHeader";
import { CalendarDays, Clock, Search, Sliders } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"software" | "me">("software");

  const tabs = [
    { id: "software", title: "Software" },
    { id: "me", title: "Me" },
  ];

  return (
    <main>
      <LandingHeader />

      <section className="min-h-screen p-20 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Make sure you have the best{" "}
            <span className="text-amethyst-600">schedule possible</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700">You can count on me</p>

          <Link href="/">
            <button
              className="
          px-4 py-2 md:px-5 md:py-3 cursor-pointer
          bg-amethyst-500 rounded-xl hover:bg-amethyst-800
          font-bold text-white text-lg md:text-xl
          ease-in-out duration-500
        "
            >
              Get Started
            </button>
          </Link>
        </div>

        {/* Imagen */}
        <Image
          width={500}
          height={500}
          className="w-full md:w-1/2 h-auto max-w-xs md:max-w-md"
          src="/assets/images/hero.svg"
          alt="Hero"
        />
      </section>

      <section className="min-h-screen p-20 flex flex-col items-center justify-center gap-14 bg-gray-100" id="features">
        <h2 className="text-4xl font-bold text-center">Why choose us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center">
            <CalendarDays className="w-12 h-12 text-amethyst-600" />
            <h3 className="text-xl font-semibold mt-4">Optimal Schedule Finder</h3>
            <p className="text-gray-600 mt-2">
              Our algorithm finds the best possible schedule for you based on your preferences.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center">
            <Clock className="w-12 h-12 text-amethyst-600" />
            <h3 className="text-xl font-semibold mt-4">Smart Time Management</h3>
            <p className="text-gray-600 mt-2">
              Avoid overlapping classes and get the most efficient schedule for your time.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center">
            <Sliders className="w-12 h-12 text-amethyst-600" />
            <h3 className="text-xl font-semibold mt-4">Customizable Filters</h3>
            <p className="text-gray-600 mt-2">
              Filter by professors, class times, locations, and more to match your needs.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center">
            <Search className="w-12 h-12 text-amethyst-600" />
            <h3 className="text-xl font-semibold mt-4">Fast & Easy Search</h3>
            <p className="text-gray-600 mt-2">
              Quickly find the subjects you need and generate an optimized schedule in seconds.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen p-20 flex flex-col items-center justify-center gap-14" id="htu">
        <h2 className="text-4xl font-bold text-center">How to Use</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
          <div className="relative p-6 bg-gray-100 rounded-xl shadow-lg flex flex-col items-center text-center">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amethyst-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg">
              1
            </span>
            <Image
              src="/assets/images/select-courses.png"
              width={300}
              height={200}
              className="rounded-lg mt-4"
              alt="Select Courses"
            />
            <h3 className="text-2xl font-semibold mt-4">Enter Available Courses</h3>
            <p className="text-gray-600 mt-2">
              Add all possible subjects, including different time slots for each.
            </p>
          </div>

          <div className="relative p-6 bg-gray-100 rounded-xl shadow-lg flex flex-col items-center text-center">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amethyst-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg">
              2
            </span>
            <Image
              src="/assets/images/apply-filters.png"
              width={300}
              height={200}
              className="rounded-lg mt-4"
              alt="Apply Filters"
            />
            <h3 className="text-2xl font-semibold mt-4">Choose Your Preferences</h3>
            <p className="text-gray-600 mt-2">
              Select filters such as fewer hours, free days, or preferred times.
            </p>
          </div>

          <div className="relative p-6 bg-gray-100 rounded-xl shadow-lg flex flex-col items-center text-center">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amethyst-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg">
              3
            </span>
            <Image
              src="/assets/images/get-schedule.png"
              width={300}
              height={200}
              className="rounded-lg mt-4"
              alt="Get Best Schedule"
            />
            <h3 className="text-2xl font-semibold mt-4">Get the Best Schedule</h3>
            <p className="text-gray-600 mt-2">
              Submit your choices, and let our algorithm find the most efficient schedule for you.
            </p>
          </div>
        </div>
      </section>

      <section className="h-screen p-20 flex flex-col justify-center items-center bg-gray-100" id="about">
        <h2 className="text-4xl font-bold text-center mb-10">About</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start h-full w-full max-w-5xl">
          {/* Left Side - Toggle Buttons */}
          <div className="space-y-4">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "software" | "me")}
                className={`flex items-center text-left w-full group p-4 border-b border-gray-300 last:border-0 rounded-lg transition ${activeTab === tab.id ? "bg-amethyst-200 text-amethyst-700" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
              >
                <span className={`flex items-center justify-center w-8 h-8 rounded-full mr-4 text-lg font-semibold ${activeTab === tab.id ? "bg-amethyst-500 text-white" : "bg-gray-400 text-gray-700"
                  }`}>
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold flex-grow">{tab.title}</h3>
              </button>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="bg-white p-6 rounded-xl shadow-lg min-h-[250px] flex flex-col justify-center">
            {activeTab === "software" ? (
              <>
                <h3 className="text-2xl font-semibold">Optimize Your Study Time</h3>
                <p className="text-gray-600 mt-4">
                  Our scheduling tool helps students find the most efficient schedule based on available courses and personal preferences.
                  No more conflicts or wasted time—just the perfect timetable.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-semibold">Hi There, 👋 I'm Neyan Montes</h3>
                <p className="text-gray-600 mt-4">
                  Also known as <strong>XNeyMo</strong>, I'm a software developer passionate about designing and building web applications.
                  As a university student, I always created my own schedules, but I wondered if they were truly optimal.
                  I started with an Excel sheet, but later, as a programmer, I developed this algorithm to find the perfect schedule.
                  After sharing it with friends, they encouraged me to publish it to help more students.
                  I will keep improving it with more features in the future!
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
