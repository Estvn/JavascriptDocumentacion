/**
 * Filtrará los elementos de un arreglo en base a una condición.
 * filter es inmutable
 * 
 * Hace lo mismo que map, con la diferencia que modifica los valores que cumplan con la condición puesta.
 */

var estudiantes = [
    {nombre: "Ada", edad: 20, matriculado: true},
    {nombre: "Alex", edad: 19, matriculado: true},
    {nombre: "Jose", edad: 18, matriculado: false},
    {nombre: "Josue", edad: 17, matriculado: false},
    {nombre: "Denisse", edad: 16, matriculado: true}
]

// let filtrado = estudiantes.filter((estudiantes) => estudiantes.edad >= 18);
let filtrado = estudiantes.filter((estudiantes) => estudiantes.edad >= 18 && estudiantes.matriculado == true);

filtrado.forEach(estudiante => {
    console.log(estudiante);
});
