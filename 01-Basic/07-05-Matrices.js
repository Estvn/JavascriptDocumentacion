'use strict';
let matriz = [[],[]];
matriz[0][0] = 33;
matriz[0][1] = 34;

matriz[1][0] = 35;
matriz[1][1] = 36;

console.log(matriz);

// Matriz simplificada
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log("Mostrando la cantidad de filas en la matriz:\n" + matrix.length);
console.log("Mostrando la cantidad de elemento en una fila de la matriz:\n" + matrix[0].length);

for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
        console.log(matrix[i][j]);
    }
}
console.log(matrix);