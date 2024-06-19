#![allow(warnings)]
use std::{collections::HashMap, io, u32};

#[derive(Debug)]
struct Subject {
    courses: Vec<Course>,
}

#[derive(Debug, Clone)]
struct Course {
    name: String,
    id: String,
    schedules: Vec<Schedule>,
}

#[derive(Debug, Clone)]
struct Schedule {
    day: Days,
    start: u32,
    end: u32,
}

#[derive(Debug, Clone, PartialEq, Eq, Hash)]
enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

fn schedule_information() -> Schedule {
    println!("1. Monday");
    println!("2. Tuesday");
    println!("3. Wednesday");
    println!("4. Thursday");
    println!("5. Friday");
    println!("6. Saturday");
    println!("7. Sunday");

    println!("\nChoise the number's option: ");
    let mut o_input = String::new();
    io::stdin().read_line(&mut o_input).unwrap();
    let option: u8 = o_input.trim().parse().unwrap();

    let day: Days = match option {
        1 => Days::Monday,
        2 => Days::Tuesday,
        3 => Days::Wednesday,
        4 => Days::Thursday,
        5 => Days::Friday,
        6 => Days::Saturday,
        7 => Days::Sunday,
        _ => panic!("Invalid option"),
    };

    println!("\nEnter the start time: ");
    let mut s_input = String::new();
    io::stdin().read_line(&mut s_input).unwrap();
    let start: u32 = s_input.trim().parse().unwrap();

    println!("\nEnter the end time: ");
    let mut e_input = String::new();
    io::stdin().read_line(&mut e_input).unwrap();
    let end: u32 = e_input.trim().parse().unwrap();

    let schedule: Schedule = Schedule { day, start, end };

    return schedule;
}

fn course_information(days: u8, name: String) -> Course {
    println!("\nEnter the ID of this course: ");
    let mut i_input = String::new();
    io::stdin().read_line(&mut i_input).unwrap();
    let id = i_input.trim().replace("\r\n", "");

    let mut schedules: Vec<Schedule> = Vec::new();

    for k in 0..days {
        println!("\nDay {}", k + 1);
        let schedule = schedule_information();
        schedules.push(schedule);
    }

    let course: Course = Course {
        name,
        id,
        schedules,
    };
    return course;
}

fn subject_information() -> Subject {
    println!("\nEnter the name of subject: ");
    let mut n_input = String::new();
    io::stdin().read_line(&mut n_input).unwrap();
    let name = n_input.trim().replace("\r\n", "");

    println!("\nEnter the number of {} courses: ", name);
    let mut c_input = String::new();
    io::stdin().read_line(&mut c_input).unwrap();
    let c_number: u8 = c_input.trim().parse().unwrap();

    println!("\nEnter the day's number of {}: ", name);
    let mut d_input = String::new();
    io::stdin().read_line(&mut d_input).unwrap();
    let days: u8 = d_input.trim().parse().unwrap();

    let mut courses: Vec<Course> = Vec::new();

    for j in 0..c_number {
        println!("\nCourse {} of {}", j + 1, name);
        let course: Course = course_information(days, name.clone());
        courses.push(course);
    }

    let subject: Subject = Subject { courses };
    return subject;
}

fn generate_combinations(
    subjects: &[Subject],
    index: usize,
    current_combination: &mut Vec<Course>,
    combinations: &mut Vec<Vec<Course>>,
) {
    if index >= subjects.len() {
        combinations.push(current_combination.clone());
        return;
    }

    for course in &subjects[index].courses {
        current_combination.push(course.clone());
        generate_combinations(subjects, index + 1, current_combination, combinations);
        current_combination.pop();
    }
}

fn validation(combination: &[Course]) -> bool {
    for i in 0..combination.len() {
        for j in (i + 1)..combination.len() {
            if courses_overlap(&combination[i], &combination[j]) {
                return false;
            }
        }
    }

    return true;
}

fn courses_overlap(first_course: &Course, second_course: &Course) -> bool {
    for first_schedule in &first_course.schedules {
        for second_schedule in &second_course.schedules {
            if first_schedule.day == second_schedule.day
                && time_overlap(first_schedule, second_schedule)
            {
                return true;
            }
        }
    }

    return false;
}

fn time_overlap(first_schedule: &Schedule, second_schedule: &Schedule) -> bool {
    first_schedule.day == second_schedule.day
        && !(first_schedule.end <= second_schedule.start
            || first_schedule.start >= second_schedule.end)
}

fn calculate_points(combination: &[Course]) -> u32 {
    let mut points = 0;

    let mut daily_min_start: HashMap<Days, u32> = HashMap::new();
    let mut daily_max_end: HashMap<Days, u32> = HashMap::new();

    for day in &[
        Days::Monday,
        Days::Tuesday,
        Days::Wednesday,
        Days::Thursday,
        Days::Friday,
        Days::Saturday,
        Days::Sunday,
    ] {
        daily_min_start.insert(day.clone(), u32::MAX);
        daily_max_end.insert(day.clone(), 0);
    }

    for course in combination {
        for schedule in &course.schedules {
            let day = schedule.day.clone();
            let start = schedule.start;
            let end = schedule.end;

            if start < *daily_min_start.get(&day).unwrap() {
                daily_min_start.insert(day.clone(), start);
            }

            if end > *daily_max_end.get(&day).unwrap() {
                daily_max_end.insert(day.clone(), end);
            }
        }
    }

    for day in &[
        Days::Monday,
        Days::Tuesday,
        Days::Wednesday,
        Days::Thursday,
        Days::Friday,
        Days::Saturday,
        Days::Sunday,
    ] {
        let min_start = *daily_min_start.get(&day).unwrap();
        let max_end = *daily_max_end.get(&day).unwrap();

        if max_end > min_start {
            points += (max_end - min_start);
        }
    }

    points
}

fn main() {
    println!("Enter the number of subject: ");
    let mut s_input = String::new();
    io::stdin().read_line(&mut s_input).unwrap();
    let s_number: u8 = s_input.trim().parse().unwrap();

    let mut subjects: Vec<Subject> = Vec::new();

    for i in 0..s_number {
        println!("\nSubject {}", i + 1);
        let subject: Subject = subject_information();
        subjects.push(subject);
    }

    let mut combinations: Vec<Vec<Course>> = Vec::new();
    let mut current_combination: Vec<Course> = Vec::new();

    generate_combinations(&subjects, 0, &mut current_combination, &mut combinations);

    let valid_combinations: Vec<Vec<Course>> = combinations
        .into_iter()
        .filter(|combination| validation(combination))
        .collect();

    let mut ranking: Vec<(Vec<Course>, u32)> = valid_combinations
        .iter()
        .map(|combination| {
            let points = calculate_points(combination);
            (combination.clone(), points)
        })
        .collect();

    ranking.sort_by(|(_, points1), (_, points2)| points1.cmp(points2));

    for (index, rank) in ranking.iter().enumerate() {
        println!("\nOpción {}:", index + 1);
        println!("- Courses: {}", format_courses(&rank.0));
        println!("- Points: {}", rank.1);
    }
}

fn format_courses(courses: &[Course]) -> String {
    let mut course_list = String::new();

    for (index, course) in courses.iter().enumerate() {
        if index > 0 {
            course_list.push_str(", ");
        }

        course_list.push_str(&format!("{} ({})", course.name, course.id));
    }

    return course_list;
}
