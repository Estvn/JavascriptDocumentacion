'use strict';

let llueve = false;
if(llueve){
    console.log("Necesito una sombrilla");
}else{
    console.log("No necesito nada.");}

var administrador = "Admin";
if(administrador === "Admin"){
    console.log("Bienvenido al sistema");
}

const MAYORIA_DE_EDAD = 18;
var edadPersona = 12;
if(edadPersona === MAYORIA_DE_EDAD){
    console.log("Es mayor de edad");
}else{
    console.log("Aún no es mayor de edad");
}

var semaforo = 'rojo';
if(semaforo === 'verde'){
    console.log("Puede pasar");
}else if(semaforo === "amarillo"){
    console.log("Detengase");
}else if(semaforo === "rojo"){
    console.log("No puede pasar");
}
