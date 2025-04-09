import { Days } from "@constants/days";
import DaysGrid from "@utils/daysGrid";
import { useEffect, useState } from "react";

interface ModalProps {
	setIsModalOpen: (isOpen: boolean) => void;
	addCourseToSubject: (
		course: {
			code: string;
			schedule: {
				day: string;
				startTime: string;
				endTime: string
			}[]
		}
	) => void;
	editingCourse: {
		code: string;
		schedule: {
			day: string;
			startTime: string;
			endTime: string;
		}[];
	} | null;
	setEditingCourse: any;
	removeCourseFromSubject: (courseCode: string) => void;
}

export default function Modal({
	setIsModalOpen,
	addCourseToSubject,
	editingCourse,
	setEditingCourse,
	removeCourseFromSubject,
}: ModalProps) {
	const [selectedDays, setSelectedDays] = useState<string[]>([]);
	const [courseCode, setCourseCode] = useState("");
	const [schedule, setSchedule] = useState<{
		day: string;
		startTime: string;
		endTime: string
	}[]>([]);

	useEffect(() => {
		if (editingCourse) {
			setCourseCode(editingCourse.code);
			setSchedule(editingCourse.schedule);
			setSelectedDays(editingCourse.schedule.map((s) => s.day));
		}
	}, [editingCourse]);

	const toggleDay = (day: string) => {
		if (selectedDays.includes(day)) {
			setSelectedDays(selectedDays.filter(d => d !== day));
			setSchedule(schedule.filter(s => s.day !== day));
		} else {
			setSelectedDays([...selectedDays, day]);
			setSchedule([...schedule, { day, startTime: "", endTime: "" }]);
		}
	};

	const handleTimeChange = (day: string, type: "startTime" | "endTime", value: string) => {
		setSchedule((prevSchedule) =>
			prevSchedule.map((s) =>
				s.day === day ? { ...s, [type]: value } : s
			)
		);
	};

	const handleAddCourse = () => {
		if (courseCode.trim()) {
			addCourseToSubject({ code: courseCode, schedule });
			setIsModalOpen(false);
		}
	};

	const handleDeleteCourse = () => {
		if (editingCourse) {
			removeCourseFromSubject(editingCourse.code);
			setIsModalOpen(false);
			setEditingCourse(null);
		}
	};

	return (
		<div
			className="
				fixed inset-0 z-10
				flex items-center justify-center 
				bg-black
			"
		>
			<div
				className="
					w-2/3
					p-5 flex flex-col gap-5
					bg-linear-to-b from-[#FEE3D5]/4 to-[#FFA5C1]/4 rounded-3xl
				"
			>
				<h3 className="text-sm font-bold">
					Course information
				</h3>

				<div className="flex justify-between *:w-1/2 gap-5">
					<div className="flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<label className="text-sm">Course code</label>
							<input
								value={courseCode}
								onChange={(e) => setCourseCode(e.target.value)}
								placeholder="Ex: MATH101"
								className="
									bg-white/5
									border border-white/10 rounded-md
									px-3 py-1
									text-sm
								"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-sm">Days</label>
							<DaysGrid selectedDays={selectedDays} toggleDay={toggleDay} />
						</div>
					</div>

					<div className="flex flex-col gap-3">
						<p className="text-sm">Course schedule</p>
						{selectedDays.map((day) => (
							<div key={day} className="flex flex-col gap-2">
								<label className="text-sm">{Days.find(d => d.id === day)?.name}</label>
								<div className="flex w-full gap-2 *:w-1/2">
									<input
										value={schedule.find(s => s.day === day)?.startTime || ""}
										onChange={(e) => handleTimeChange(day, "startTime", e.target.value)}
										placeholder="Start time (24h format)"
										className="
											bg-white/5
											border border-white/10 rounded-md
											px-3 py-1
											text-sm
										"
									/>
									<input
										value={schedule.find(s => s.day === day)?.endTime || ""}
										onChange={(e) => handleTimeChange(day, "endTime", e.target.value)}
										placeholder="End time (24h format)"
										className="
											bg-white/5
											border border-white/10 rounded-md
											px-3 py-1
											text-sm
										"
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="flex justify-end gap-2">
					<button
						onClick={() => setIsModalOpen(false)}
						className="
							px-4 py-2 w-1/4
							text-white font-semibold!
							ease-in-out duration-500
							hover:bg-linear-[135deg] hover:from-[#FEECE3]/7 hover:to-[#FFA9CC]/7
							bg-linear-[135deg] from-[#FEECE3]/3 to-[#FFA9CC]/3 rounded-md
							cursor-pointer
						"
					>
						Cancel
					</button>

					{editingCourse && (
						<button
							onClick={handleDeleteCourse}
							className="
								px-4 py-2
								bg-red-500 hover:bg-red-600
								text-whitetext-sm font-semibold!
								rounded-md transition
							"
						>
							Delete Course
						</button>
					)}

					<button
						onClick={handleAddCourse}
						className="
							px-4 py-2 w-1/4
							bg-linear-[135deg] from-[#FEECE3] to-[#FFA9CC] rounded-md
							hover:from-[#FFA9CC] hover:to-[#FEECE3]
							text-black font-semibold!
							ease-in-out duration-500
							cursor-pointer
						"
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
}
