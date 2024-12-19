// Paso por valor
let x = 10;

function fun(a){
    a = 20;
    return a;
}
console.log(x);
console.log(fun(x));

// Paso por referencia
// Los objetos en JS se pasan por referencia de memoria.
const persona = {
    nombre: 'Estiven',
    apellido: 'Mejía'
}

function fun2(p1){
    p1.nombre = 'Josue';
    p1.apellido = 'Rodríguez';
    
}

//Se modifican los valores de persona porque dentro de la función se apunta a la dirección de memoria de los atributos del objeto.
//Una vez terminado el trabajo de la función, los atributos que están dentro se destruyen.
fun2(persona);
console.log(persona)

// Los arreglos son considerados objetos en JS. Por lo tanto, cuando se envían a una función, se pasan por referencia.
function cambioValor(arreglo){

    arreglo[0] = 20
    return arreglo[0];
}

let arr = [10];
console.log(arr[0]);

console.log(cambioValor(arr));
