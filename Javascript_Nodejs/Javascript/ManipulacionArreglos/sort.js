// sort ordena los elemento dentro de un arreglo
let a = [1,2,3,4,5];
let b = [6,7,8,9,0];
let c = a.concat(b);

console.log(c.sort());

let meses = ["Dic", "Mar" ,"Ene", "Feb"];
console.log(meses.sort());

let numeros = [1, 10000, 23, 12, 98];
console.log(numeros.sort()); // ordena en base a los valores ASCII
console.log(numeros.sort((a,b) => a-b));
console.log(numeros.sort((a,b) => b-a));
