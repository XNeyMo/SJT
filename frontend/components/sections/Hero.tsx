import Link from "next/link";

export default function HeroSection() {
	return (
		<section className="h-[calc(100vh-7.5rem)] flex flex-col items-center justify-center gap-10 px-6 text-center">
			<div className="bg-gradient-to-r from-[#FEECE3]/7 to-[#FFA9CC]/7 rounded-3xl px-6 py-1">
				<p className="text-gradient text-sm md:text-base">Powerful Scheduling Tools</p>
			</div>

			<h1 className="text-3xl md:text-5xl w-full md:w-1/3">
				Optimize Your Semester with the
				<span className="text-gradient font-bold"> Perfect Schedule</span>
			</h1>

			<p className="w-full md:w-2/3 text-sm md:text-base">
				With so many course options, building the perfect schedule can be overwhelming. Our platform finds the most efficient timetable for you—so you save time and avoid the hassle.
			</p>

			<Link
				href="/"
				className="py-2 px-6 md:w-1/6 bg-gradient-to-r from-[#FEECE3] to-[#FFA9CC] rounded-3xl hover:from-[#FFA9CC] hover:to-[#FEECE3] text-black font-semibold text-center transition duration-500 cursor-pointer text-sm md:text-base"
			>
				Get Started Now
			</Link>
		</section>
	);
}

