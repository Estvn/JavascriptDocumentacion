// Esta es la forma más simple de una flecha
let a = nombre => console.log(`Me llamo ${nombre}`);
a("Estiven");

let b = () => console.log(`Me llamo Estiven`);
b();

let c = (a,b) => {
    let resultado = a + b;
    return resultado;
};
console.log(c(2,3));

// Tienen return implícito.
let d = (a,b) => a + b;
console.log(d(4,5));