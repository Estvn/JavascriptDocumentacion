function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido
    };
}

let Estudiante = new Persona('Estiven', 'Mejía', 22);
Estudiante.altura = 1.75;// Agregando un nuevo atributo al objeto.
console.log(Estudiante);

//------------------------------------------------------------------------------------------------------------------------------------
let Profesor = new Persona('Antony','Mejía',17);
// Enviando datos en formato JSON.
console.log(JSON.stringify(Profesor));
// Enviando datos en formato de arreglo.
console.log(Object.values(Profesor));
console.log(Profesor.nombreCompleto());

//Creación de un objeto en memoria.
let Alumno = new Object();
Alumno.nombre = 'Estiven Mejía';
console.log(Alumno);

let objeto = new Object();
let funcion = new Function();
let arreglo = new Array();
let cadena = new String();
let numero = new Number();

//Forma más eficiente para declarar tipos de datos
let objeto2 = {};
let funcion2 = function(){return 1};
let arreglo2 = [1,2,3,4,5];
let cadena2 = 'Esto es una cadena';
let numero2 = 30;

let self = (function(a,b){return a+b})(2,3);
console.log(self);