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
