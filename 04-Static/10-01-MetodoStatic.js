class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    static saludar(){
        console.log("hola");
    }
}

class Alumno extends Persona{
    constructor(nombre){
        super(nombre);
    }
}

let person = new Persona('Yo');
let alum = new Alumno('est');

//Todos los atributos del padre se heredan al hijo, incluyendo los atributos y métodos estáticos.
Persona.saludar();
Alumno.saludar();