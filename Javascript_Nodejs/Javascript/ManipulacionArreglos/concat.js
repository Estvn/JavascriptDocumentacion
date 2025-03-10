// concat concatena dos arreglos
let a = [1,2,3,4,5];
let b = [6,7,8,9,0];
let c = a.concat(b);
console.log(c);
console.log(a.concat(b));

// split operator expande el contenido de un elemento dentro de uno nuevo.
let d = [...a, ...b]; // otra forma de concatenar arreglos
console.log(d);
