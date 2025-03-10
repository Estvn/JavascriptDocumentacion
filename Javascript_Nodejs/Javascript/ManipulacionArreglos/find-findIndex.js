let clientes = [
    {id: 1, nombre: "Ada"},
    {id: 2, nombre: "Katrina"},
    {id: 3, nombre: "Dayana"},
    {id: 4, nombre: "Pamela"},
    {id: 1, nombre: "Michelle"}
];

// ! find Devuelve solo el primer elemento que coincida con la búsqueda.
let cliente = clientes.find((clientes) => clientes.id === 1);
console.log(cliente);
console.log("\n");

// En cambio, filter si le entrega los elementos que coincidan con la condición.
let clientesCoincididos = clientes.filter((clientes) => clientes.id === 1);
clientesCoincididos.forEach((cliente) => console.log(cliente));
console.log("\n");

// ! findIndex nos devuelve la posición del primer elemento que cumple una condición
console.log(clientes.findIndex((clientes) => clientes.id === 1));
console.log(clientes[clientes.findIndex((clientes) => clientes.id === 1)])
console.log("\n");