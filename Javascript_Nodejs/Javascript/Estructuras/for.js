'use strict';

// for
for(let i=1; i<=10; i++){
    console.log("Hola, mundo!");
}

let a = [1,2,3,4,5,6,7,8,9];

// for in - itera sobre los índices o claves
for(let indice in a){
    console.log(indice + " " + a[indice]);
}

// for of - itera sobre el valor del índice o clave
for(let indice of a){ 
    console.log(indice);
}

let nombre = "Estiven";
for(let valor of nombre){
    console.log(valor);
}