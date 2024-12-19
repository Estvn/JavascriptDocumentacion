//Dos formas de crear arreglos.
let autos = new Array('BMW','Mercedes','Toyota','Ford','Mazda');
let autos2 = ['BMW','Mercedes Benz','Toyota','Ford','Mazda'];

//Modificando un índice.
autos2[1] = "MercedesBenz";

console.log(autos2);

//Forma uno de añadir nuevo índice.
autos2.push("Audi");

for(let i=0; i<autos2.length; i++){
    console.log(i+1 +'. ' + autos2[i])
}

//Forma dos de añadir nuevo índice.
autos2[autos2.length] = "Porsche";

//Forma tres de añadir nuevo índice (no recomendable).
autos2[8] = "Ferrari";

for(let i=0; i<autos2.length; i++){
    console.log(i+1 +'. ' + autos2[i])
}

//Saber si es un arreglo
console.log(Array.isArray(autos2));
console.log(autos2 instanceof Array);