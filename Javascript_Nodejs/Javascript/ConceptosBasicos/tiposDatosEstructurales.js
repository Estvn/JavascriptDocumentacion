// object 
let objeto = {
    nombre:'Estiven',
    apellido:'Mejía',
    edad:27,
    ciudades:["tegucigalpa", "sps"],
    direccion:{calle:"Principal",municipio:"central"} 
};

console.log(objeto);
console.log(typeof objeto + '\n');

// arrays
let listas = [1,2,3,4,5,"Hola"];
for(lista of listas){console.log(lista);} // of itera sobre los valores.
for(lista in listas){console.log(listas[lista])} //in itera sobre los índices.