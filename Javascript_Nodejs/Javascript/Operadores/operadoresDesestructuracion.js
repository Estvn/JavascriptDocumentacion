/**
 * Operador de desestructuración para objetos
 * Obtiene una propiedad específica de un objeto
 */
let persona = {nombre:"Estiven", apellido:"Mejia"};
let {nombre:name, apellido:last_name} = persona;

console.log(name);
console.log(last_name);
console.log(persona);

// ! Esto no modifica los valores del objeto
name = "Josue"; 
last_name = "Rodriguez";
console.log(persona); 

// Operador de desestructuración para arreglos
var arreglo = [1,2,3,4,5,6];
var [primero, segundo] = arreglo;
console.log(primero);
