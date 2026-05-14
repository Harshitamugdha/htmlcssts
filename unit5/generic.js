function identity(value) {
    return value;
}
let numResult = identity(100);
let strResult = identity("Hello this is TS");
let result = `
Number Value: ${numResult}<br>
String Value: ${strResult}`;
document.getElementById("output").innerHTML = result;
console.log("Number Value: ", numResult);
console.log("String Value: ", strResult);
export {};
