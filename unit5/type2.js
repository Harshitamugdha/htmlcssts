"use strict";
// function add(a: number, b: number): number {
//     return a + b;
// }
// let result: number = add(5, 10);
// document.getElementById("demo")!.innerHTML = result.toString();
// ------------
let personName = "Aakash";
function display(name) {
    return "Hello " + personName;
}
let result = display(personName);
document.getElementById("demo").innerHTML = result.toString();
