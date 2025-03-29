interface ThirdCardProps {
	courses: {
		code: string;
		schedule: {
			day: string;
			startTime: string;
			endTime: string
		}[]
	}[];
	handleNext: () => void;
	handleBack: () => void;
	currentSubject: number;
	setIsModalOpen: (isOpen: boolean) => void;
	setEditingCourse: (
		course: {
			code: string;
			schedule: {
				day: string;
				startTime: string;
				endTime: string
			}[]
		}
	) => void;
}

export default function ThirdCard({
	courses,
	handleNext,
	handleBack,
	currentSubject,
	setIsModalOpen,
	setEditingCourse,
}: ThirdCardProps) {
	return (
		<div
			className="
				p-5 flex flex-col gap-5
				bg-linear-to-b from-[#FEE3D5]/4 to-[#FFA5C1]/4 rounded-3xl
			"
		>
			<h3 className="text-sm font-bold">
				Courses for Subject {currentSubject}
			</h3>

			<div className="flex flex-col gap-2">
				<div className="flex items-center justify-between">
					<h4 className="text-sm">Course details</h4>

					<button
						onClick={() => setIsModalOpen(true)}
						className="
							px-4 py-2 w-1/4
							bg-linear-[135deg] from-[#FEECE3] to-[#FFA9CC]
							rounded-md
							hover:from-[#FFA9CC] hover:to-[#FEECE3]
							text-black font-semibold
							ease-in-out duration-500
							cursor-pointer
						"
					>
						Add Course
					</button>
				</div>

				{courses.length > 0 ? (
					<ul className="grid grid-cols-4 gap-2">
						{courses.map((course, idx) => (
							<li
								key={idx}
								onClick={() => {
									setEditingCourse(course)
									setIsModalOpen(true)
								}}
								className="
									text-sm cursor-pointer
									p-3 border border-white/10 rounded-md
									bg-white/5
								"
							>
								<strong>{course.code}</strong>

								<ul className="text-xs mt-1">
									{course.schedule.map((s, i) => (
										<li key={i}>
											{`${s.day}: ${s.startTime} - ${s.endTime}`}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				) : (
					<p className="text-sm text-gray-300 italic">No courses added yet.</p>
				)}
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
