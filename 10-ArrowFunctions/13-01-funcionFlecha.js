'use strict';

miFunction();
function miFunction(){
    console.log("Esta es una función normal.");
}

let anonimousFunction = function(a = 4,b = 1){console.log('Esto es una función anónima'); return(a+b)}
console.log(anonimousFunction(3,4));
console.log(anonimousFunction instanceof Function);

//Ejemplos de funciones flecha.
//Si las funciones flecha solo tienen una línea de código dentro, se puede omitir las llaves y la palabra return.
//Si la función flecha tiene solo un paŕametro, entonces se pueden omitir los parentesis.
const af1 = () =>{console.log('Función flecha básica');}
af1();

const af2 = () => console.log("Función flecha sin llaves.\nSolo se omiten cuando hay solo una línea de código dentro de la flecha.");
af2();

const af3 = () => "Si una AF solo tiene como retorno una línea, no se define el return";
console.log(af3());

const af4 = param => console.log(param);
af4("Si una función flecha solo tiene un parámetro se pueden omitir los parentesis")

let params = (op1, op2) => console.log(op1 + op2);
params(2,2);