/**
 * 3 formas de definir variables:
 * - var
 * - let
 * - const
 */

// var da una vista global de la variable en el archivo
//-----------------------------------------------------
var nombre = "Estiven";
var x = 2;

console.log(nombre);
console.log(x);

var persona = {
    nombre: "Estiven",
    apellido: "Mejía",
    edad: 23,
    direccion: {
        calle:"Principal",
        nCasa: 1223344,
    },
    ciudadesVisitadas: ["Tegucigalpa", "Comayaguela"]
};

var ciudad;
ciudad = "Tegucigalpa";
ciudad = "Comayaguela";
console.log(ciudad);

// let restringe la vista de la variable al bloque donde se ha definido
//---------------------------------------------------------------------
{
    let saluti = 'Buongiorno a tuti!';
    console.log(saluti);
}
//console.log(saluti); // Esto dará error.

// const son variables que nunca cambiarán su valor
//-------------------------------------------------
const PI = 3.14159216;
console.log(PI);