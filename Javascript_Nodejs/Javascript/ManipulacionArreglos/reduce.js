/**
 * reduce ayuda a reducir todo un arreglo a un solo valor.
 */

let arreglo = [1,2,3,4,5,6,7,8,9];
// Este reduce devolverá un valor numérico.
let suma = arreglo.reduce((sumador, arreglo) => sumador + arreglo, 0); // El 0 es el valor que inicializa el contador
console.log(suma/arreglo.length);

let edades = [23,23,45,67,45,21,12,10,11,21,45];
// Este reduce devolverá un objeto
let personasXedad = edades.reduce((contador, edades)=>{
    (!contador[edades]) ? contador[edades] = 1  : contador[edades] += 1;
    //contador++;
    return contador;
}, {});

console.log(edades);
console.log(personasXedad);

