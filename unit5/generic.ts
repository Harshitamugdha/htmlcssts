export{}

function identity<T>(value: T):T{
    return value;
}

let numResult: number= identity<number>(100);

let strResult: string=identity<string>("Hello this is TS");

let result: string=`
Number Value: ${numResult}<br>
String Value: ${strResult}`;

document.getElementById("output")!.innerHTML=result;
console.log("Number Value: ",numResult);
console.log("String Value: ",strResult);