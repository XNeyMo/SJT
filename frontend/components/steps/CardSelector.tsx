'use client';

import { useState } from "react";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import Modal from "./Modal";
import { steps } from "@constants/steps";
import ForthCard from "./ForthCard";

interface Subject {
	name: string;
	courses: {
		code: string;
		schedule: { day: string; startTime: string; endTime: string }[];
	}[];
}

interface CardSelectorProps {
	activeStep: number;
	setActiveStep: any;
}

export default function CardSelector({
	activeStep,
	setActiveStep,
}: CardSelectorProps) {
	const [numSubjects, setNumSubjects] = useState(1);
	const [currentSubject, setCurrentSubject] = useState(1);
	const [subjects, setSubjects] = useState<Subject[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingCourse, setEditingCourse] = useState<Subject["courses"][0] | null>(null);

	const updateSubjectName = (name: string) => {
		setSubjects((prev) => {
			const updatedSubjects = [...prev];

			if (!updatedSubjects[currentSubject - 1]) {
				updatedSubjects[currentSubject - 1] = { name, courses: [] };
			} else {
				updatedSubjects[currentSubject - 1] = {
					...updatedSubjects[currentSubject - 1],
					name,
				};
			}

			return updatedSubjects;
		});
	};

	const addCourseToSubject = (course: Subject["courses"][0]) => {
		setSubjects((prev) =>
			prev.map((subject, index) =>
				index === currentSubject - 1
					? {
						...subject,
						courses: editingCourse
							? (subject.courses || []).map((c) => (c.code === editingCourse.code ? course : c))
							: [...(subject.courses || []), course],
					}
					: subject
			)
		);
		setEditingCourse(null);
	};

	const removeCourseFromSubject = (courseCode: string) => {
		setSubjects((prevSubjects) =>
			prevSubjects.map((subject, index) =>
				index === currentSubject - 1
					? {
						...subject,
						courses: subject.courses.filter((course) => course.code !== courseCode),
					}
					: subject
			)
		);
		setEditingCourse(null);
		setIsModalOpen(false);
	};

	const handleNext = () => {
		if (activeStep === 2) {
			if (currentSubject < numSubjects) {
				setCurrentSubject((prev) => prev + 1);
				setActiveStep(1);
			} else {
				setActiveStep((prevStep: any) => Math.min(prevStep + 1, steps.length - 1));
				setCurrentSubject(1);
			}
		} else {
			setActiveStep((prevStep: any) => Math.min(prevStep + 1, steps.length - 1));
		}
	};

	const handleBack = () => {
		setActiveStep((prevStep: any) => Math.max(prevStep - 1, 0));
	};

	return (
		<div className="w-full">
			{activeStep === 0 && (
				<FirstCard
					numSubjects={numSubjects}
					setNumSubjects={setNumSubjects}
					handleNext={() => {
						setSubjects(Array.from({ length: numSubjects }, () => ({ name: "", courses: [] })));
						handleNext();
					}}
				/>
			)}

			{activeStep === 1 && (
				<SecondCard
					currentSubject={currentSubject}
					numSubjects={numSubjects}
					handleNext={handleNext}
					handleBack={handleBack}
					updateSubjectName={updateSubjectName}
				/>
			)}

			{activeStep === 2 && (
				<ThirdCard
					courses={subjects[currentSubject - 1]?.courses || []}
					handleNext={handleNext}
					handleBack={handleBack}
					currentSubject={currentSubject}
					setIsModalOpen={setIsModalOpen}
					setEditingCourse={setEditingCourse}
				/>
			)}

			{isModalOpen && (
				<Modal
					setIsModalOpen={setIsModalOpen}
					addCourseToSubject={addCourseToSubject}
					editingCourse={editingCourse}
					setEditingCourse={setEditingCourse}
					removeCourseFromSubject={removeCourseFromSubject}
				/>
			)}

			{activeStep === 3 && (
				<ForthCard
					subjects={subjects}
				/>
			)}
		</div>
	);
}
