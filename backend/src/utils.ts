import { Subject, Course, Schedule, Days } from '@src/types';

export function timeOverlap(firstSchedule: Schedule, secondSchedule: Schedule): boolean {
	return firstSchedule.day === secondSchedule.day &&
		!(firstSchedule.end <= secondSchedule.start || firstSchedule.start >= secondSchedule.end);
}

export function coursesOverlap(firstCourse: Course, secondCourse: Course): boolean {
	for (const firstSchedule of firstCourse.schedules) {
		for (const secondSchedule of secondCourse.schedules) {
			if (timeOverlap(firstSchedule, secondSchedule)) {
				return true;
			}
		}
	}
	return false;
}

export function validation(combination: Course[]): boolean {
	for (let i = 0; i < combination.length; i++) {
		for (let j = i + 1; j < combination.length; j++) {
			if (coursesOverlap(combination[i], combination[j])) {
				return false;
			}
		}
	}
	return true;
}

export function calculatePoints(combination: Course[]): number {
	const dailyMinStart: Map<Days, number> = new Map();
	const dailyMaxEnd: Map<Days, number> = new Map();

	for (const day of Object.values(Days)) {
		dailyMinStart.set(day, Number.MAX_VALUE);
		dailyMaxEnd.set(day, 0);
	}

	for (const course of combination) {
		for (const schedule of course.schedules) {
			const { day, start, end } = schedule;
			if (start < dailyMinStart.get(day)!) {
				dailyMinStart.set(day, start);
			}
			if (end > dailyMaxEnd.get(day)!) {
				dailyMaxEnd.set(day, end);
			}
		}
	}

	let points = 0;
	for (const day of Object.values(Days)) {
		const minStart = dailyMinStart.get(day)!;
		const maxEnd = dailyMaxEnd.get(day)!;
		if (maxEnd > minStart) {
			points += maxEnd - minStart;
		}
	}

	return points;
}

export function generateCombinations(
	subjects: Subject[],
	index: number,
	currentCombination: Course[],
	combinations: Course[][]
): void {
	if (index >= subjects.length) {
		combinations.push([...currentCombination]);
		return;
	}

	for (const course of subjects[index].courses) {
		currentCombination.push(course);
		generateCombinations(subjects, index + 1, currentCombination, combinations);
		currentCombination.pop();
	}
}
