let car = {
    marca: 'Toyota',
    nPuertas: 4,
    cilindraje: 8,
    motor: 'V12',
    nombre: function(){return this.marca + ' ' + this.variante}
}

//La forma más larga de imprimir atributos de un objeto.
console.log(car.marca + ', ' + car.nPuertas);

//Imprimir atributos usando "For In".
for(atr in car){
    console.log(car[atr]);
}

//Usando "Object.values".
//Devuelve un arreglo con los datos de los atributos.
console.log(Object.values(car))

//Imprimiendo datos usando JSON
let json = JSON.stringify(car);
console.log(json);