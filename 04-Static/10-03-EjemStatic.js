class Persona{

    static contador = 0;

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.idPersona = ++Persona.contador;
    }

    nombreCompleto(){
        return `No. Persona: ${Persona.contador} \nNombre completo: ${this.nombre} ${this.apellido}`;
    }

    toString(){
        return this.nombreCompleto();
    }

    static getContador(){
        return Persona.contador;
    }
}

let per = new Persona('Estiven', 'Mejía');
console.log(per.toString());

console.log(Persona.contador);