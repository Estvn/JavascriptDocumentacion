class Persona{

    static contador = 0;

    static get MAX_COUNTER(){
        return 5;
    }

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        if(Persona.contador < Persona.MAX_COUNTER){
            this.idPersona = ++Persona.contador;
        }else{
            console.log("Máximo de personas alcanzado");
        }
        
    }

    nombreCompleto(){
        return `No. Persona: ${this.idPersona} \nNombre completo: ${this.nombre} ${this.apellido}`;
    }

    toString(){
        return this.nombreCompleto();
    }

    static getContador(){
        return Persona.contador;
    }
}

let per1 = new Persona('Estiven', 'Mejía');
let per2 = new Persona('Estiven', 'Mejía');
let per3 = new Persona('Estiven', 'Mejía');
let per4 = new Persona('Estiven', 'Mejía');
let per5 = new Persona('Estiven', 'Mejía');
let per6 = new Persona('Estiven', 'Mejía');

console.log(per1.toString());
console.log(per2.toString());
console.log(per3.toString());
console.log(per4.toString());
console.log(per5.toString());
console.log(per6.toString());



console.log(Persona.contador);