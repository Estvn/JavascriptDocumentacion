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

}
let Persona1 = new Persona('Estiven', 'Mejía');
console.log(JSON.stringify(Persona1));
Persona1.setNombre =  'Josue';
console.log(Persona1.getNombre);

