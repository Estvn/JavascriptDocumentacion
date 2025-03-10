'use strict';

// Operador de cadena o concatenación 
let a = "Mejía"
console.log("Estiven " + a);

// Operador condicional o ternario
console.log((true && true) ? "Sí" : "No");

// Notación punto
let persona = {nombre:"Estiven", apellido:"Mejia"};
console.log(persona.nombre + ' ' + persona.apellido);

// Notación por corchetes en objetos
console.log(persona['nombre'] + ' ' + persona['apellido']);

// Notación por corchetes en arreglos
let arreglo = [1,2,3,4,5,6,7];
console.log(arreglo[0]);

// Operación de determinación de tipo
console.log(typeof arreglo);
console.log(typeof persona);
