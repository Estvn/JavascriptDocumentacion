/*
Las promesas en Javascript son objetos, que en sus parámetros se define una función flecha con cuerpo que recibe en sus parámetros
dos funciones que utilizarán el concepto callback; si sucede una condición, entonces se ejecutara la función con la lógica de resolución.
Si ocurre un problema, entonces se ejecutará la función con la lógica de rechazo.

La promesas tienen dos funciones: then y catch. A then se le envía como parámetro la función con la lógica de resolución, y a catch se
le envía en su parámetro la función con la lógica de rechazo.
*/

let promise = new Promise((resolved, rejected) =>{
    let response = true;
    if(response)
        resolved('Se ha resuelto correctamente.');
    else
        rejected('Ha ocurrido un error.')
});

promise.then(valor => console.log(valor)).catch(error => console.log(error));