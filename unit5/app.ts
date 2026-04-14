export {}
let message: string = "Hello, TypeScript!"; //variable declared with colon and type
document.getElementById("demo")!.innerHTML = message; //dot should be used with !.
// tsc app.ts ->compiling ts files
// compile ts file then it will automatically generate js file with the same name and same location. and js file will help to execute code oon browser