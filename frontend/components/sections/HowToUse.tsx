import { useState } from "react";

export default function HowToUseSection() {
	const [isManual, setIsManual] = useState(false);

	return (
		<section
			className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10 lg:p-16"
			id="htu"
		>
			<div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
				<h2 className="text-3xl sm:text-4xl font-bold">
					How It <span className="text-gradient">Works</span>
				</h2>

				<p className="text-base sm:text-lg">
					Creating your perfect schedule is simple. Just follow these steps and let our system do the rest.
				</p>

				<button
					onClick={() => setIsManual(!isManual)}
					className="py-2 px-4 w-60 cursor-pointer mx-auto md:mx-0 bg-gradient-to-r from-[#FEECE3] to-[#FFA9CC] rounded-3xl hover:from-[#FFA9CC] hover:to-[#FEECE3] text-black font-semibold! transition-all duration-300"
				>
					Change to {isManual ? "File" : "Wizard"} Mode
				</button>

				<div className="flex flex-col gap-5">
					<ul className="space-y-4 w-full">
						{isManual ? (
							<>
								<Step number="1" text="Select your preferred schedule type." />
								<Step number="2" text="Enter the number of subjects." />
								<Step number="3" text="Add subjects, courses, and time slots." />
								<Step number="4" text="Submit and get the best schedule." />
							</>
						) : (
							<>
								<Step number="1" text="Select your preferred schedule type." />
								<Step number="2" text="Download the provided Excel template." />
								<Step number="3" text="Fill in your subjects, courses, and time slots." />
								<Step number="4" text="Submit the file and get your optimized schedule instantly." />
							</>
						)}
					</ul>
				</div>
			</div>

			<video
				key={isManual ? "manual" : "file"}
				className="rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg"
				controls
				autoPlay
				loop
				muted
			>
				<source src={isManual ? "/videos/wizard.mp4" : "/videos/file.mp4"} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</section>
	);
}

function Step({ number, text }: { number: string; text: string }) {
	return (
		<li className="flex items-center text-start gap-3 text-sm sm:text-base">
			<span className="bg-[#FFA9CC] text-black font-bold min-w-8 h-8 flex items-center justify-center rounded-full">
				{number}
			</span>

			{text}
		</li>
	);
}
