class Course {
    constructor(courseName) {
        this.courseName = courseName;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.courses = [];

    }

    enroll(course) {
        if (course instanceof Course) {
            this.courses.push(course);
            console.log(`${this.name} has enrolled in ${course.courseName}.`)
        } else {
            console.error("Invaild course object. Must be a instance of the Course class.")
        }
    }
}


let student1 = new Student('John Doe');
let course1 = new Course('Mathematics');
student1.enroll(course1);
console.log(`${student1.name} is enrolled in courses: ${student1.courses.map(c => c.courseName).join(', ')}`);