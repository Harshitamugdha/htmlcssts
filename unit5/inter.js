"use strict";
let student1 = {
    id: 101,
    name: "ABC",
    course: "B.Tech CSE",
    isActive: true
};
function displayStudent(student) {
    return " ID: " + student.id +
        "<br> Name: " + student.name +
        "<br> Course " + student.course +
        "<br> Active " + student.isActive;
}
document.getElementById("output").innerHTML = displayStudent(student1);
