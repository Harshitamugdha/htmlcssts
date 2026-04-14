//arrays
let A = [1, 2, 3, 6];
let B = [3, 4, 5, 6];
//Union function
function getUnione(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
//Intersection
function getIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
//results
let unionResult = getUnione(A, B);
let intersectionResult = getIntersection(A, B);
//display on webpage
let result = `Array A: [${A}] <br>
Array B: [${B}] <br>

<b>Union: </b> [${unionResult}] <br>
<b>Intersection: </b> [${intersectionResult}]
`;
document.getElementById("output").innerHTML = result;
//console
console.log("Unione: ", unionResult);
console.log("Intersection: ", intersectionResult);
export {};
