let car = {
    marca: 'Toyota',
    nPuertas: 4,
    cilindraje: 8,
    motor: 'V12',
    nombre: function(){return this.marca + ' ' + this.variante}
}

car.variante = 'Supra';
delete car.cilindraje;

for(atr in car){
    console.log(car[atr]);
}

console.log(car['nPuertas']);
console.log(car.nombre())