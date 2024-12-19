class Persona{

    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.idPersona = ++Persona.contadorPersonas;
    }

    get getIdPersonas(){
        return this.idPersona;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getApellido(){
        return this.apellido;
    }

    set setApellido(apellido){
        this.apellido = apellido;
    }

    get getEdad(){
        return this.edad;
    }

    set setEdad(edad){
        this.edad = edad;
    }

    toString(){
        return `No. Persona: ${this.idPersona} \nNombre completo: ${this.nombre} ${this.apellido} \nEdad: ${this.edad}`;
    }
}
/*
class Empleado extends Persona{

    static contadorEmpleados = 0;
    sueldo = 0;
    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        this.idEmpleado = ++Empleado.contadorEmpleados;
    }

    get getIdEmpleado(){
        return this.idEmpleado;
    }

    get getSueldo(){
        return this.sueldo;
    }

    set setSueldo(sueldo){
        this.sueldo = sueldo;
    }

    toString(){
        return `No. Empleado: ${this.idEmpleado} \nNombre completo: ${this.nombre} ${this.apellido} \nEdad: ${this.edad} \nSalario: ${this.sueldo}`;
    }
}

class Cliente extends Persona{

    static contadorClientes = 0;
    fechaRegistro = 0;

    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        this.idCliente = ++Cliente.contadorClientes;
    }

    get getIdCliente(){
        return this.idCliente;
    }

    get getFechaRegistro(){
        return this.fechaRegistro;
    }

    set setFechaRegistro(fechaRegistro){
        this.fechaRegistro = fechaRegistro;
    }

    toString(){
        return `No. Cliente: ${this.idCliente} \nNombre completo: ${this.nombre} ${this.apellido} \nEdad: ${this.edad} \nFecha de Registro: ${this.fechaRegistro}`;

    }

}

let emp1 = new Empleado('Juan', 'Castillo', 27);
let emp2 = new Empleado('Estiven', 'Rodríguez', 23);

emp1.setSueldo = 20_000;
emp2.setSueldo = 25_000;
console.log(emp1.toString());
console.log(emp2.toString());


let cli1 = new Cliente('Tony', 'Montana', 18);
let cli2 = new Cliente('Tony', 'Mejía', 44);
let cli3 = new Cliente('Luc', 'Querty', 34);
cli1.setFechaRegistro = 20230908;
cli2.setFechaRegistro = 20230930;
cli1.setFechaRegistro = 20231003;

console.log(cli1.toString());
console.log(cli2.toString());
console.log(cli3.toString());

console.log(Persona.contadorPersonas)
*/