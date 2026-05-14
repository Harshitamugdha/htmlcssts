"use strict";
//function to display student data
function displayStudent(student) {
    const output = document.getElementById("output");
    output.innerHTML =
        `<p><b>Name:</b> ${student.name}</p>
     <p><b>Age:</b> ${student.age}</p>
     <p><b>Email:</b> ${student.email}</p>
    `;
}
//handle form submission
document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    //get values from form inputs
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    //create student object
    const student = {
        name: name,
        age: parseInt(age),
        email: email
    };
    //display student data
    displayStudent(student);
});
