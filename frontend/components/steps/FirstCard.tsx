interface FirstCardProps {
	numSubjects: number;
	setNumSubjects: any;
	handleNext: any;
}

export default function FirstCard({
	numSubjects,
	setNumSubjects,
	handleNext
}: FirstCardProps) {
	return (
		<div
			className="
				p-5 flex flex-col gap-5
				bg-linear-to-b from-[#FEE3D5]/4 to-[#FFA5C1]/4 rounded-3xl
			"
		>
			<h3 className="text-sm font-bold">Enter your subjects</h3>

			<div className="flex flex-col gap-2">
				<label className="text-sm">Number of subjects</label>
				<input
					placeholder="Enter number of subjects"
					value={numSubjects}
					onChange={(e) => setNumSubjects(e.target.value)}
					type="number"
					className="
						bg-white/5
						border border-white/10 rounded-md
						px-3 py-1
						text-sm
					"
				/>
			</div>

			<div className="flex justify-end">
				<button
					onClick={handleNext}
					className="
						px-4 py-2 w-1/4
						bg-linear-[135deg] from-[#FEECE3] to-[#FFA9CC] rounded-md
						hover:from-[#FFA9CC] hover:to-[#FEECE3]
						text-black font-semibold!
						ease-in-out duration-500
						cursor-pointer
					"
				>
					Next
				</button>
			</div>
		</div>
	)
}
