#[macro_use]
extern crate rocket;

enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

struct Space {
    day: Days,
    start: u8,
    end: u8,
}

struct Course {
    id: String,
    space: Vec<Space>,
}

struct Subject {
    name: String,
    course: Vec<Course>,
}

struct InputData {
    subject: Vec<Subject>,
}

#[post("/subjects")]
fn obtain_subjects() -> &'static str {
    "Obtaining subjects"
}

#[get("/schedule/less_hours")]
fn less_hours() -> &'static str {
    "Less hours"
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![obtain_subjects, less_hours])
}
