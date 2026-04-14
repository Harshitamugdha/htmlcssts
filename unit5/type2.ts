// function add(a: number, b: number): number {
//     return a + b;
// }

// let result: number = add(5, 10);

// document.getElementById("demo")!.innerHTML = result.toString();

// ------------

let personName: string = "Aakash"
function display(name :string) {
    return "Hello " + personName;
}
let result: string = display(personName);
document.getElementById("demo")!.innerHTML = result.toString();