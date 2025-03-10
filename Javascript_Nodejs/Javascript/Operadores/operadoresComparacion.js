"use strict";

let a = 2;
let b = 1;

console.log((a == b) ? "Son iguales" : "No son iguales");
console.log((a < b) ? `${b} es mayor que ${a}` : 
            ((a > b) ? `${a} es mayor que ${b}` : "Son iguales"));

console.log(3 == '3'); // Operador comparativo de igualdad
console.log(3 === '3'); // Operador comparativo de igualdad estricta
console.log(3 != '3'); // Operador comparativo de desigualdad
console.log(3 !== '3'); // Operador comparativo de desigualdad estricta

console.log(3 < '3');
console.log(3 <= '3');
console.log(3 > '3');
console.log(3 >= '3');
