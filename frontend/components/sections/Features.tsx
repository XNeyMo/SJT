import { AutoAwesome, SelfImprovement, Update } from "@mui/icons-material";

export default function FeatureSection() {
	return (
		<section
			className="min-h-screen flex flex-col items-center justify-center gap-10 px-6 md:px-12 lg:px-20 py-16"
			id="features"
		>
			<h2 className="text-3xl sm:text-4xl font-bold text-center">
				Why Choose <span className="text-gradient">Us?</span>
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
				<div className="p-6 flex flex-col gap-5 items-center bg-gradient-to-b from-[#FEE3D5]/4 to-[#FFA5C1]/4 rounded-3xl border border-white/10 shadow-md">
					<div className="bg-gradient-to-br from-[#FEECE3] to-[#FFA9CC] rounded-2xl p-4 flex items-center justify-center">
						<Update fontSize="large" className="text-black" />
					</div>
					<h3 className="text-lg font-semibold text-center">Optimized Scheduling</h3>
					<p className="text-center text-sm sm:text-base">
						Get the most efficient schedule possible, avoiding unnecessary gaps between classes.
					</p>
				</div>

				<div className="p-6 flex flex-col gap-5 items-center bg-gradient-to-b from-[#FEE3D5]/4 to-[#FFA5C1]/4 rounded-3xl border border-white/10 shadow-md">
					<div className="bg-gradient-to-br from-[#FEECE3] to-[#FFA9CC] rounded-2xl p-4 flex items-center justify-center">
						<SelfImprovement fontSize="large" className="text-black" />
					</div>
					<h3 className="text-lg font-semibold text-center">Save Time & Effort</h3>
					<p className="text-center text-sm sm:text-base">
						No more trial and error—our algorithm does the hard work for you in seconds.
					</p>
				</div>

				<div className="p-6 flex flex-col gap-5 items-center bg-gradient-to-b from-[#FEE3D5]/4 to-[#FFA5C1]/4 rounded-3xl border border-white/10 shadow-md">
					<div className="bg-gradient-to-br from-[#FEECE3] to-[#FFA9CC] rounded-2xl p-4 flex items-center justify-center">
						<AutoAwesome fontSize="large" className="text-black" />
					</div>
					<h3 className="text-lg font-semibold text-center">Fully Customizable</h3>
					<p className="text-center text-sm sm:text-base">
						Choose your ideal schedule—less time on campus, free days, or the perfect balance.
					</p>
				</div>
			</div>
		</section>
	);
}

