let a = 3, b = 4, c = "3";

//Esta comparación verifica si el contenido de ambas variables es igual sin importar su tipo de dato.
//Si los datos son distintos, internamente uno será casteado al tipo de dato del otro.
let comparacion = a == c;

console.log(comparacion);

//La comparación estricta verifica si las variables son del mismo tipo de dato y tienen el mismo contenido.
let comp = a === c;
console.log(comp);

//Los operadores de distinción funcionan al contrario a los de comparación
//Existe un operador de distinción simple y estricto con la misma lógica que los de comparación
let distincion = a != b;
console.log(distincion)

let dist = a !== c;
console.log(dist)

let x = 10;
if(x % 2 == 0){
    console.log("Es un número par.")
}else{
    console.log("Es un número impar.")
}

let edad = 18;

if (edad >= 18){
    console.log("La persona es mayor de edad")
}
else{
    console.log("La persona es menor de edad")
}

//Operador ternario
let resultado = (3>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 24
let ter = (numero%2 == 0) ? "Es un número par." : "Es un número impar.";
console.log(ter);