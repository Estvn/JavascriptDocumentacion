var ventas = [
    {nombre: "Camisa", precio: 50.00, totalVendido: 27},
    {nombre: "Chaqueta", precio: 345.60, totalVendido: 12},
    {nombre: "Pantalón", precio: 107.00 , totalVendido: 34},
    {nombre: "Zapatos", precio: 135.50 , totalVendido: 19},
];

// Calcula el total de las ventas realizadas por cada producto
var resultado = ventas.reduce((arregloObjetos, producto) => {
    let objeto = {};
    objeto.ombreProducto = producto.nombre;
    objeto["totalVentas"] = `$ ${producto.precio * producto.totalVendido}`;
    arregloObjetos[arregloObjetos.length] = objeto; 
    return arregloObjetos;
}, []);

ventas.forEach((venta)=>{
    console.log(venta)
});
console.log("\n");
resultado.forEach((producto)=>{
    console.log(producto)
});