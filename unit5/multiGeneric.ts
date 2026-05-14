export{}

function pair<K,V>(key: K,value:V): [K,V]
{
    return [key,value];
}

let result=pair<string,number>("Age",21);

document.getElementById("output")!.innerHTML=`
Key: ${result[0]}<br>
Value: ${result[1]}
`;
console.log("Key: ",result[0]);
console.log("Value: ",result[1]);