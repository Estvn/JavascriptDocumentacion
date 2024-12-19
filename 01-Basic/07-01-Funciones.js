// Función normal
function miFunction(a,b){
    console.log("El resultado de la suma es " + (a+b));
}
miFunction(3,6);

// Función con retorno
function newFunction(a,b){return a + b}

let resultado = newFunction(34,16);
console.log(resultado);
console.log(newFunction(99,11));

// Función Anónima
let x = function(a,b){return a + b};
resultado = x(8,17);
console.log(resultado);
console.log(x(45,45));

// Función Self-Invoking
(function(a,b){
    console.log("El resultado de la suma es " + (a +b));
})(3,4);

// Función flecha
const arrow = (a,b) => a / b;
let m = arrow(10,5);
console.log(m)

function hola(mensaje){
    return mensaje;
}

let mensaje = hola("xdxdxddd");
console.log(mensaje)

// Función recursiva
function fun1(n){

    if(n == 1){
        console.log("La función recursiva ha alcanzado su caso base.")
    }else{
        console.log(n);
        fun1(n-1);
    }
}

console.log(fun1(10));