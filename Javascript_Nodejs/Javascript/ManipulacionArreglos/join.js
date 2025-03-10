// join une todos los elementos de un arreglo por medio de carácteres de separación

let arreglo = ["Hola", "que", "tal"];
console.log(arreglo.join(" "));

let clientes = [
    {id: 1, nombre: 'Ada'},
    {id: 2, nombre: 'Katrina'},
    {id: 3, nombre: 'Dayana'},
    {id: 4, nombre: 'Pamela'},
    {id: 5, nombre: 'Michelle'}
];

// ! Ejemplo con el uso de Object
console.log(Object.keys(clientes[0]).join(","));
clientes.forEach((cliente) => {
    console.log(Object.values(cliente).join(","));
}); console.log("\n");

// ! Simulando la generación de un .csv
let cvsGenerator = function(arreglo, separador=" "){
    console.log(Object.keys(clientes[0]).join(`${separador}`));
    clientes.forEach((cliente) => {
        console.log(Object.values(cliente).join(`${separador}`));
    });
};
cvsGenerator(clientes);

