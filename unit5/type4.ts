let student: {name: string, age: number} = {
    name:"ABC",
    age:21
};

document.getElementById("demo")!.innerHTML = 
student.name + " " + student.age;