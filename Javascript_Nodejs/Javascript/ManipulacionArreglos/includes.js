// ! includes ayuda a determinar si en un arreglo se encuentra un elemento, retornando un booleano.
var mascotas = ['perro', 'gato', 'conejo'];
console.log(mascotas.includes("conejo"));
console.log(mascotas.includes("iguana"));

// ! includes también trabaja con los strings
console.log("Estiven".includes('v') + "\n");

var buscador = (parametro) => {
    let ventas = [
        {nombre: "Camisa", precio: 50.00, totalVendido: 27},
        {nombre: "Chaqueta", precio: 345.60, totalVendido: 12},
        {nombre: "Pantalón", precio: 107.00 , totalVendido: 34},
        {nombre: "Zapatos", precio: 135.50 , totalVendido: 19},
    ];

    return ventas.filter((ventas) => ventas.nombre.includes(parametro));
}

buscador("C").forEach((producto)=>console.log(producto));