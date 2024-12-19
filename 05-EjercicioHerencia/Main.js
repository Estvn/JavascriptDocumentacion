let emp1 = new Empleado('Juan', 'Castillo', 27);
let emp2 = new Empleado('Estiven', 'Rodríguez', 23);

emp1.setSueldo = 20_000;
emp2.setSueldo = 25_000;
console.log(emp1.toString());
console.log(emp2.toString());


let cli1 = new Cliente('Tony', 'Montana', 18);
let cli2 = new Cliente('Tony', 'Mejía', 44);
let cli3 = new Cliente('Luc', 'Querty', 34);
cli1.setFechaRegistro = 20230908;
cli2.setFechaRegistro = 20230930;
cli1.setFechaRegistro = 20231003;

console.log(cli1.toString());
console.log(cli2.toString());
console.log(cli3.toString());

console.log(Persona.contadorPersonas)