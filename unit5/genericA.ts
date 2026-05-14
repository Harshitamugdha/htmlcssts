export{}

function getFirstElement<T>(arr: T[]): T {
    return arr[0]
}

let numbers= [10,20,30]
let strings=["A","G","I"]
let numResult=getFirstElement(numbers)
let strResult=getFirstElement(strings)

document.getElementById("output")!.innerHTML=`
First number: ${numResult}
First string: ${strResult}
`;

console.log("First number: ",numResult);
console.log("First string: ",strResult);