interface Employee {
    id: number;
    name: string;
    salary?: number; // make it non-compulsory to include this value in definitions
}

let emp: Employee = {
    id: 1,
    name: "ABC"
}

const e1=document.getElementById("output");
if(e1){
    e1.innerHTML=
    "ID : "+emp.id +
    "<br> Name : "+emp.name +
    "<br> Salary : "+(emp.salary ?? "Not Provided");
}