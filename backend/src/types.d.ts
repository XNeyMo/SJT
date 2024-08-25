export enum Days {
	Monday = "Monday",
	Tuesday = "Tuesday",
	Wednesday = "Wednesday",
	Thursday = "Thursday",
	Friday = "Friday",
	Saturday = "Saturday",
	Sunday = "Sunday"
}

export interface Schedule {
	day: Days;
	start: number;
	end: number;
}

export interface Course {
	name: string;
	id: string;
	schedules: Schedule[];
}

export interface Subject {
	courses: Course[];
}
