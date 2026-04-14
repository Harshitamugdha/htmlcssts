interface Student {
    id: number;
    name: string;
    course: string;
    isActive: boolean;
}

let student1: Student = 
{
    id: 101,
    name: "ABC",
    course: "B.Tech CSE",
    isActive: true
};

function displayStudent(student: Student): string {
    return " ID: " + student.id +
    "<br> Name: " + student.name +
    "<br> Course " + student.course +
    "<br> Active " + student.isActive;
}

document.getElementById("output")!.innerHTML = displayStudent(student1);