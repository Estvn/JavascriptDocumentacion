let number = "17";
let edad = Number(number);

console.log(typeof edad);

//Método isNaN para verificar si una variable contiene un número.
if(isNaN(edad)){
    console.log("No es un número.")
}else{
    let resultado = (edad >= 18)? "Es mayor de edad.": "Es menor de edad.";
    console.log(resultado)
}

//Ejemplo de una variable con dato tipo NaN.
let number2 = "33x";
let edad2 = Number(number2);
console.log(edad2);
