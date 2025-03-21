class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getApellido(){
        return this.apellido
    }

    set setApellido(apellido){
        this.apellido = apellido;
    }

    nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this.departamento = departamento;
    }
    nombreCompleto(){
        //return this.nombre + ' ' + this.apellido + ' ' + this.departamento
        return super.nombreCompleto() + ' ' + this.departamento
    }
}

let empleado1 = new Empleado('Estiven','Mejía','Sistemas');
console.log(empleado1.departamento);
//Llamando un método heredado.
console.log(empleado1.nombreCompleto());