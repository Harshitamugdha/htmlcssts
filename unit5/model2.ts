export{}
//simple data model
interface Student{
    name:string;
    age:number
}

//function to handle button click
function addStudent(): void{
    const name=(document.getElementById("name") as HTMLInputElement).value;
    const age=Number((document.getElementById("age") as HTMLInputElement).value);
    //create the object
    const student: Student = {
        name: name,
        age: age
    };

    //display output
    const output=document.getElementById("output")!;
    output.innerHTML=`
    Name: ${student.name}<br>
    Age: ${student.age}
    `;
}

//make the fun accessible in html
(window as any).addStudent=addStudent;