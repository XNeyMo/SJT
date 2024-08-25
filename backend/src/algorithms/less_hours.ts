import { Subject, Course } from '@src/types';
import { generateCombinations, validation, calculatePoints } from '@src/utils';

export function findLessHours(subjects: Subject[]): Course[] {
	const combinations: Course[][] = [];
	const currentCombination: Course[] = [];

	generateCombinations(subjects, 0, currentCombination, combinations);

	const validCombinations = combinations.filter(validation);

	const ranking = validCombinations.map(combination => ({
		combination,
		points: calculatePoints(combination)
	})).sort((a, b) => a.points - b.points);

	return ranking.length > 0 ? ranking[0].combination : [];
}
