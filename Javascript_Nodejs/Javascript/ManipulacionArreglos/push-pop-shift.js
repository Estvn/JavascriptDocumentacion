/**
 * Los arreglos son mutables
 */

let arreglo = [1,2,3,4,5,6,7,8];
arreglo.push(9); // Agrega un elemento al arreglo
console.log(arreglo[arreglo.length-1]);

console.log(arreglo.shift()); // Quita el primer elemento del arreglo
console.log(arreglo.shift());
console.log(arreglo);

console.log(arreglo.pop()); // Quita el último elemento del arreglo.
console.log(arreglo);
