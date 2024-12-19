function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido
    };
}
//Uso del método prototype
Persona.prototype.tel = 1;

let Alumno = new Persona('Estiven', 'Mejia', 22,);
Alumno.tel = 55669988;
console.log(Alumno.tel);

let Profesor = new Persona('Josue','Rodriguez',20);
console.log(Profesor.tel);

