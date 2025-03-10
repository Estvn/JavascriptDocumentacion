/**
 * map crea un arreglo con nuevos valores a partir de otro arreglo, sin la necesidad de alterarlo.
 */

var estudiante = ["Dayana", "Maria", "Ada", "Lucía"];
var asistencia = estudiante.map((nombre) => {
    return {
        nombre: nombre,
        asistencia: false 
    };
});

asistencia.forEach((persona) => {
    console.log(persona);
});


