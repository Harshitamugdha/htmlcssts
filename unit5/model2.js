//function to handle button click
function addStudent() {
    const name = document.getElementById("name").value;
    const age = Number(document.getElementById("age").value);
    //create the object
    const student = {
        name: name,
        age: age
    };
    //display output
    const output = document.getElementById("output");
    output.innerHTML = `
    Name: ${student.name}<br>
    Age: ${student.age}
    `;
}
//make the fun accessible in html
window.addStudent = addStudent;
export {};
