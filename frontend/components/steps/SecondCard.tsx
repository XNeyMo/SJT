interface SecondCardProps {
	currentSubject: number;
	numSubjects: number;
	handleNext: () => void;
	handleBack: () => void;
	updateSubjectName: (name: string) => void;
}

export default function SecondCard({
	currentSubject,
	numSubjects,
	handleNext,
	handleBack,
	updateSubjectName,
}: SecondCardProps) {
	return (
		<div
			className="
				p-5 flex flex-col gap-5
				bg-linear-to-b from-[#FEE3D5]/4 to-[#FFA5C1]/4 rounded-3xl
			"
		>
			<h3 className="text-sm font-bold">
				Subject {currentSubject} of {numSubjects}
			</h3>

			<div className="flex flex-col gap-2">
				<label className="text-sm">Subject name</label>
				<input
					placeholder="Ex: Math, Science, English"
					onChange={(e) => updateSubjectName(e.target.value)}
					className="
						bg-white/5
						border border-white/10 rounded-md
						px-3 py-1
						text-sm
					"
				/>
			</div>

			<div className="flex justify-end gap-5">
				<button
					onClick={handleBack}
					className="
						px-4 py-2 w-1/4
						text-white font-semibold
						ease-in-out duration-500
						hover:bg-linear-[135deg] hover:from-[#FEECE3]/7 hover:to-[#FFA9CC]/7
						bg-linear-[135deg] from-[#FEE3D5]/3 to-[#FFA9CC]/3 rounded-md
						cursor-pointer
					"
				>
					Back
				</button>

				<button
					onClick={handleNext}
					className="
						px-4 py-2 w-1/4
						bg-linear-[135deg] from-[#FEECE3] to-[#FFA9CC] rounded-md
						hover:from-[#FFA9CC] hover:to-[#FEECE3]
						text-black font-semibold
						ease-in-out duration-500
						cursor-pointer
					"
				>
					Next Step
				</button>
			</div>
		</div>
	);
}
