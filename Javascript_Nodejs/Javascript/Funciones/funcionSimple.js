'use strict';

// Función simple.
function saludo(){
    console.log("Hola, me llamo Estiven.");
}
saludo();

// Función simple con parámetro.
function saludoConNombre(nombre = "Josue"){
    console.log(`Hola, me llamo ${nombre}.`);
}
saludoConNombre("Estiven");

// Función simple con parámetro y retorno.
function retornarSaludo(nombre = "Josue"){
    return `Hola, me llamo ${nombre}.`;
}
console.log(retornarSaludo("Estiven"));