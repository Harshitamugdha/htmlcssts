//import from default export
import calculateArea from "./defaultExport";

const result=calculateArea(5);
console.log("Area of circle:" ,result);

//dislay on webpage
document.getElementById("output").innerHTML="Area of circle: "+result;