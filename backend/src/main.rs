use actix_web::{get, post, web, App, HttpServer, Responder};
use std::collections::HashMap;
use std::io;

#[derive(Debug)]
struct Subject {
    name: String,
    course: Vec<Course>,
    //  laboratory: Vec<Laboratory>,
}

#[derive(Debug)]
struct Course {
    space: Vec<Space>,
    nrc: String,
}

// #[derive(Debug)]
// struct Laboratory {
//     course_nrc: String,
//     space: Vec<Space>,
//     nrc: String,
// }

#[derive(Debug)]
struct Space {
    day: String,
    start_time: u32,
    ending_time: u32,
}

fn generate_combinations<'a>(
    subjects: &'a [Subject],
    current_index: usize,
    current_combination: &mut Vec<&'a Course>,
    combinations: &mut Vec<Vec<&'a Course>>,
) {
    if current_index >= subjects.len() {
        combinations.push(current_combination.clone());
        return;
    }

    for course in &subjects[current_index].course {
        if current_combination
            .iter()
            .all(|c| !conflicts_with(course, c))
        {
            current_combination.push(course);
            generate_combinations(
                subjects,
                current_index + 1,
                current_combination,
                combinations,
            );
            current_combination.pop();
        }
    }
}

fn conflicts_with(course1: &Course, course2: &Course) -> bool {
    course1.space.iter().any(|space1| {
        course2.space.iter().any(|space2| {
            space1.day == space2.day
                && space1.start_time < space2.ending_time
                && space1.ending_time > space2.start_time
        })
    })
}

fn calculate_points(combination: &[&Course]) -> u32 {
    let mut total_points = 0;
    let mut day_schedule = HashMap::new();

    for day in ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].iter() {
        day_schedule.insert(*day, (0, 0));
    }

    for course in combination {
        for space in &course.space {
            let (start, end) = day_schedule.entry(&space.day).or_insert((0, 0));
            *start = (*start).min(space.start_time);
            *end = (*end).max(space.ending_time);
        }
    }

    for (_, (start, end)) in &day_schedule {
        if *start != 0 && *end != 0 {
            total_points += end - start;
        }
    }

    total_points
}

fn main() {
    println!("------------ Schedule Maker ------------");

    let subjects: Vec<Subject> = get_subjects();

    let mut combinations = Vec::new();
    generate_combinations(&subjects, 0, &mut Vec::new(), &mut combinations);

    if let Some(best_combination) = combinations
        .into_iter()
        .min_by_key(|comb| calculate_points(comb))
    {
        println!("\nThe best schedule is made up of the following NRC:");
        for course in best_combination {
            println!("NRC: {}", course.nrc);
        }
    } else {
        println!("No valid schedule found");
    }
}

fn get_subjects() -> Vec<Subject> {
    println!("\nHow many subjects do you want?: ");
    let mut s = String::new();
    io::stdin().read_line(&mut s).unwrap();
    let s: usize = s.trim().parse().unwrap();

    (1..=s)
        .map(|_| {
            println!("\nEnter the subject's name: ");
            let mut name = String::new();
            io::stdin().read_line(&mut name).unwrap();

            println!("\nHow many courses does it have?: ");
            let mut c = String::new();
            io::stdin().read_line(&mut c).unwrap();
            let c: usize = c.trim().parse().unwrap();

            println!("\nHow many days a week is it repeated?: ");
            let mut d = String::new();
            io::stdin().read_line(&mut d).unwrap();
            let d: u8 = d.trim().parse().unwrap();

            let mut courses = Vec::with_capacity(c);
            for _ in 1..=c {
                let mut space = Vec::new();
                println!("\nCourse:");

                for _ in 1..=d {
                    println!("\nEnter the day's name: ");
                    let mut day = String::new();
                    io::stdin().read_line(&mut day).unwrap();

                    println!("\nEnter the start time: ");
                    let mut start_time = String::new();
                    io::stdin().read_line(&mut start_time).unwrap();
                    let start_time: u32 = start_time.trim().parse().unwrap();

                    println!("\nEnter the ending time: ");
                    let mut ending_time = String::new();
                    io::stdin().read_line(&mut ending_time).unwrap();
                    let ending_time: u32 = ending_time.trim().parse().unwrap();

                    space.push(Space {
                        day,
                        start_time,
                        ending_time,
                    });
                }

                println!("\nWrite the NRC: ");
                let mut nrc = String::new();
                io::stdin().read_line(&mut nrc).unwrap();

                courses.push(Course { space, nrc });
            }

            Subject {
                name,
                course: courses,
            }
        })
        .collect()
}
