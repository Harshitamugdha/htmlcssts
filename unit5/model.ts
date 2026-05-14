export{}
//type-safe data-model
interface Student{
    name:string;
    age:number;
    email:string
}

//function to display student data
function displayStudent(student: Student): void{
    const output = document.getElementById("output")!;
    output.innerHTML=
    `<p><b>Name:</b> ${student.name}</p>
     <p><b>Age:</b> ${student.age}</p>
     <p><b>Email:</b> ${student.email}</p>
    `;
}

//handle form submission
document.getElementById("studentForm")!.addEventListener("submit", function(event)
{
    event.preventDefault();

    //get values from form inputs

    const name=(document.getElementById("name") as HTMLInputElement).value;
    const age=(document.getElementById("age") as HTMLInputElement).value;
    const email=(document.getElementById("email") as HTMLInputElement).value;

    //create student object
    const student: Student = {
        name: name,
        age: parseInt(age),
        email: email
    };

    //display student data
    displayStudent(student);
})