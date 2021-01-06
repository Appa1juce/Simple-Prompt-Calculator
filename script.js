const x = prompt("first number");

console.log(x);

const y = prompt("second number");

console.log(y);

const z = prompt("Add,Subtract,Multiply,Divide?")

let total = null
let number = null
if (z == ("+")){

     total = +x + +y;

} else if (z == ("-")){

     total = x - y;

}  else if (z == ("*")){

     total = x * y;

} else if (z == ("/")){

     total = x / y;

}

document.getElementById("outcome").innerHTML = total;