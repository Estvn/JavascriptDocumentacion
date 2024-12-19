let cadena = "Hola mundo";
cadena.length;

for (const caracter in cadena) {

    console.log(cadena.charAt(caracter));
    
}

for (const caracter of cadena) {

    console.log(caracter);
    
}

console.log(cadena.substring(0,4));

// Parseos en JS

let a = 10, b = '20';
console.log(a);
console.log(typeof(parseInt(b)));
a.toString;


let c = -50;
console.log(Math.abs(c));

// Redondeo y truncado

let d = 44.75;
console.log(Math.round(d));
console.log(Math.trunc(d));
