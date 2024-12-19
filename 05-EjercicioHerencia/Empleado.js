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
