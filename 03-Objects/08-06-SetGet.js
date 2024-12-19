let car = {
    marca: 'Toyota',
    variant: 'Supra',
    nDoors: 4,
    cilindry: 8,
    motor: 'V12',
    year: 0,

    //Sintaxis de un Getter
    get completeName(){
        return this.marca + ' ' + this.variant;
    },

    get getYear(){
        return this.year;
    },

    set setYear(year){
        this.year = year;
    }
}
console.log(car.completeName);
car.setYear = 1986;
console.log(car.getYear);

console.log(Object.values(car));
console.log(JSON.stringify(car));
for(atr in car){
console.log(car[atr]);
}