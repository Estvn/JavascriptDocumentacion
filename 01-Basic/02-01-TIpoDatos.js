//Ctrl + Shift + P para iniciar consola de Quokka.

//Tipo de dato String.
var nombre = "Estiven";
console.log(nombre);

//Tipo de dato numérico.
var numero = 1000;
console.log(numero);

//Tipo de dato objeto.
//En Javascript podemos usar comillas simples o dobles para definir una cadena.
var objeto = {
    nombre : "Estiven",
    apellido : "Mejía",
    edad : "22"
}
console.log(typeof objeto)
console.log( objeto)

//Tipo de dato booleano
var flag = true;
console.log(flag);
console.log(typeof flag);

//Tipo de dato function
function miFuncion(){}
console.log(miFuncion)

//Tipo de dato Symbol
var sim = Symbol("Tipo de dato Symbol");
console.log(typeof sim);

//Tipo de clase es una funcion
class clase{
    contructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

}

//undefined se establece cuando una variable no tiene ningun dato guardado.
//undefined puede ser asignado a una variable
var x;
console.log(x);
var z = undefined;
console.log(z);

//null se establece cuando una variable contiene un dato nulo.
//null es un tipo de dato object
var x = null;
console.log(x);

//Array es un objeto
//Array acepta datos mezclados dentro de los corchetes
//Los datos pueden estar dentro de comillas simples o dobles.
var array = ['Una cadena',4555, false, 66.12, 8];
console.log(array)

//Empty String
var cadena = '';
console.log(cadena);
console.log(typeof cadena);

//Concatenación
var nombre = 'Estiven';
var apellido = ' Mejía';
var completo = nombre + apellido;
console.log(completo);
console.log('Estiven' + apellido)

var suma = 'Cadena' + (45+55);
console.log(suma);
var nombre = 'Estiven ' + (56+44) + ' Mejía'
console.log(nombre);

const consante = 'Constante';

let xx, yy;
xx = 10, yy = 20;

//Js es sensible a la letras mayúsculas o minúsculas
//Al inicio de una variable se permiten letras, "_" y "$"
let $hola;
let hola;
let _hola;