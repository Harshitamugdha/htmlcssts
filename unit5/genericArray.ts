export{}

function getarray<T>(arr: T[]): T[] {
    return arr;
}

let numbers= [10,20,30]
let strings=["A","G","I"]
let numResult=getarray(numbers)
let strResult=getarray(strings)

document.getElementById("output")!.innerHTML=`
Number array: ${numResult}
String array: ${strResult}
`;

console.log(" Number array: ",numResult);
console.log(" String array: ",strResult);