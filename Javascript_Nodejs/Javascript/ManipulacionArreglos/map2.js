let productos = [
    {nombre: "Camisa", precio: 11.45},
    {nombre: "Camisa", precio: 10.45},
    {nombre: "Camisa", precio: 9.45},
    {nombre: "Camisa", precio: 8.45}
];

let productosActualizados = productos.map((productos)=>{
    let precioFinal = productos.precio + productos.precio * 0.12;
    return{
        ...productos, // Obtiene los elementos del arreglo original. Se evita escribirlos a mano.
        precio: precioFinal
    };
});

console.log("Arreglo actualizado:");
productosActualizados.forEach((productoActualizado)=>{
    console.log(productoActualizado);
});

console.log("\nArreglo original:");
for (const producto of productos) {
    console.log(producto);
}

// Crea un arreglo solo con los precios.
let precios = productos.map((productos) => productos.precio);
console.log("\nPrecios:");
console.log(precios);

let a = [1,2,3,4,5,6,7];
let b = a.map((a)=>{ return {valor:a*a}; });
console.log("\n");
b.forEach((i)=>console.log(i));