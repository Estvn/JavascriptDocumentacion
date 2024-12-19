"use strict";
class Empleado{

    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Nombre: ${this.nombre}\nSueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, depto){
        super(nombre, sueldo);
        this.depto = depto;
    }

    obtenerDetalles(){
        return `${super.obtenerDetalles()}\nDepartamento: ${this.depto}`;
    }
}

let gerente = new Gerente('Estiven Mejía', 16_000, 'Sistemas');
console.log(gerente.obtenerDetalles());

let empleado = new Empleado("Josúe Rodríguez", 14_000);
console.log(empleado.obtenerDetalles());