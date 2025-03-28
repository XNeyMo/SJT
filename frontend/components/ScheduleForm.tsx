"use client";

import { useState } from "react";
import { Plus, Trash2, BookOpen } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";

interface Schedule {
	day: string;
	startTime: string;
	endTime: string;
}

interface Course {
	code: string;
	schedules: Schedule[];
}

interface SubjectSchedule {
	subjectName: string;
	daysPerWeek: number;
	courses: Course[];
}

export default function ScheduleForm() {
	const [subjects, setSubjects] = useState<SubjectSchedule[]>([]);
	const [newCourse, setNewCourse] = useState<{
		code: string;
		schedules: Schedule[];
	}>({
		code: '',
		schedules: []
	});

	const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	const addSubject = () => {
		const newSubject: SubjectSchedule = {
			subjectName: "",
			daysPerWeek: 1,
			courses: []
		};

		setSubjects([...subjects, newSubject]);
	};

	const removeSubject = (index: number) => {
		const newSubjects = subjects.filter((_, i) => i !== index);
		setSubjects(newSubjects);
	};

	const updateSubjectField = (
		subjectIndex: number,
		field: keyof SubjectSchedule,
		value: string | number
	) => {
		const newSubjects = [...subjects];
		newSubjects[subjectIndex][field] = value as never;
		setSubjects(newSubjects);
	};

	const prepareCourseSchedules = (subjectIndex: number) => {
		const daysPerWeek = subjects[subjectIndex].daysPerWeek;
		const newCourseSchedules: Schedule[] = Array(daysPerWeek).fill(null).map(() => ({
			day: '',
			startTime: '',
			endTime: ''
		}));

		setNewCourse({
			code: '',
			schedules: newCourseSchedules
		});
	};

	const addCourseToSubject = (subjectIndex: number) => {
		const newSubjects = [...subjects];
		newSubjects[subjectIndex].courses.push({
			code: newCourse.code,
			schedules: newCourse.schedules
		});
		setSubjects(newSubjects);

		// Reset new course form
		setNewCourse({
			code: '',
			schedules: []
		});
	};

	const updateCourseSchedule = (scheduleIndex: number, field: keyof Schedule, value: string) => {
		const updatedSchedules = [...newCourse.schedules];
		updatedSchedules[scheduleIndex][field] = value;
		setNewCourse(prev => ({
			...prev,
			schedules: updatedSchedules
		}));
	};

	const removeCourseFromSubject = (subjectIndex: number, courseCode: string) => {
		const newSubjects = [...subjects];
		newSubjects[subjectIndex].courses = newSubjects[subjectIndex].courses.filter(
			course => course.code !== courseCode
		);
		setSubjects(newSubjects);
	};

	return (
		<div className="h-full">
			<div className="flex justify-end">
				<Button
					onClick={addSubject}
					className="flex items-center gap-2 bg-amethyst-600 hover:bg-amethyst-800 cursor-pointer"
				>
					<Plus className="w-5 h-5" />
					Add Subject
				</Button>
			</div>

			<div className="grid grid-cols-2 gap-4 overflow-y-auto">
				{subjects.map((subject, subjectIndex) => (
					<Card key={subjectIndex} className="w-full">
						<CardHeader className="flex flex-row items-center justify-between">
							<CardTitle>Subject Details</CardTitle>
							<Button
								variant="destructive"
								size="icon"
								onClick={() => removeSubject(subjectIndex)}
							>
								<Trash2 className="w-5 h-5" />
							</Button>
						</CardHeader>

						<CardContent className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div>
									<Label>Subject Name</Label>
									<Input
										placeholder="Enter subject name"
										value={subject.subjectName}
										onChange={(e) => updateSubjectField(
											subjectIndex,
											'subjectName',
											e.target.value
										)}
									/>
								</div>

								<div>
									<Label>Days per Week</Label>
									<Input
										type="number"
										min="1"
										max="7"
										value={subject.daysPerWeek}
										onChange={(e) => updateSubjectField(
											subjectIndex,
											'daysPerWeek',
											parseInt(e.target.value)
										)}
									/>
								</div>
							</div>

							<div className="border-t pt-4 mt-4">
								<div className="flex justify-between items-center mb-4">
									<h3 className="text-lg font-semibold">Courses</h3>
									<Dialog>
										<DialogTrigger asChild>
											<Button
												variant="outline"
												className="flex items-center gap-2"
												onClick={() => prepareCourseSchedules(subjectIndex)}
											>
												<Plus className="w-4 h-4" />
												Add Course
											</Button>
										</DialogTrigger>
										<DialogContent className="max-h-[80vh] overflow-y-auto">
											<DialogHeader>
												<DialogTitle>Add New Course</DialogTitle>
											</DialogHeader>
											<div className="space-y-4">
												<div>
													<Label>Course Code</Label>
													<Input
														placeholder="Enter course code"
														value={newCourse.code}
														onChange={(e) => setNewCourse(prev => ({
															...prev,
															code: e.target.value
														}))}
													/>
												</div>

												{newCourse.schedules.map((schedule, scheduleIndex) => (
													<div key={scheduleIndex} className="space-y-2 border p-4 rounded">
														<h4 className="font-semibold">
															Schedule {scheduleIndex + 1}
														</h4>
														<div>
															<Label>Day</Label>
															<Select
																value={schedule.day}
																onValueChange={(value) => updateCourseSchedule(
																	scheduleIndex,
																	'day',
																	value
																)}
															>
																<SelectTrigger>
																	<SelectValue placeholder="Select day" />
																</SelectTrigger>
																<SelectContent>
																	{days.map((day) => (
																		<SelectItem key={day} value={day}>
																			{day}
																		</SelectItem>
																	))}
																</SelectContent>
															</Select>
														</div>

														<div className="grid grid-cols-2 gap-2">
															<div>
																<Label>Start Time</Label>
																<Input
																	type="time"
																	value={schedule.startTime}
																	onChange={(e) => updateCourseSchedule(
																		scheduleIndex,
																		'startTime',
																		e.target.value
																	)}
																/>
															</div>
															<div>
																<Label>End Time</Label>
																<Input
																	type="time"
																	value={schedule.endTime}
																	onChange={(e) => updateCourseSchedule(
																		scheduleIndex,
																		'endTime',
																		e.target.value
																	)}
																/>
															</div>
														</div>
													</div>
												))}

												<Button
													onClick={() => addCourseToSubject(subjectIndex)}
													className="w-full"
													disabled={
														!newCourse.code ||
														newCourse.schedules.some(
															schedule =>
																!schedule.day ||
																!schedule.startTime ||
																!schedule.endTime
														)
													}
												>
													Save Course
												</Button>
											</div>
										</DialogContent>
									</Dialog>
								</div>

								{subject.courses.length === 0 ? (
									<div className="text-center text-gray-500 py-4">
										No courses added yet
									</div>
								) : (
									<div className="space-y-2">
										{subject.courses.map((course) => (
											<Card key={course.code} className="bg-gray-50 p-4">
												<CardContent>
													<div className="flex justify-between items-center mb-2">
														<div className="flex items-center gap-4">
															<BookOpen className="w-6 h-6 text-blue-500" />
															<div className="font-semibold">{course.code}</div>
														</div>
														<Button
															variant="destructive"
															size="icon"
															onClick={() => removeCourseFromSubject(subjectIndex, course.code)}
														>
															<Trash2 className="w-4 h-4" />
														</Button>
													</div>
													<div className="space-y-1">
														{course.schedules.map((schedule, index) => (
															<div
																key={index}
																className="text-sm text-gray-600"
															>
																{schedule.day}: {schedule.startTime} - {schedule.endTime}
															</div>
														))}
													</div>
												</CardContent>
											</Card>
										))}
									</div>
								)}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
