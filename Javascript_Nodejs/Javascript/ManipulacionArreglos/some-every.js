/**
 * some nos ayuda a verificar si algún elemento de un arreglo cumple con una condición específica.
 * Si al menos un valor del arreglo cumple la condición, se retornará True.
 */
var numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros.some((numeros) => numeros % 2 === 0));

// every retorna True si todos los elementos de un arreglo cumplen con la condición.
console.log(numeros.every((numeros) => numeros % 2 === 0));
