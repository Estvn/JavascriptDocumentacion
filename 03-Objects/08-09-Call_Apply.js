let persona1 = {
    nombre: 'Estiven',
    apellido: 'Mejía',
    nombreCompleto: function(titulo, telefono){return titulo + ': ' + this.nombre + ' ' +
                            this.apellido + ' ' + telefono}
}
//Objeto sin el método "nombreCompleto".
let persona2 = {
    nombre: 'Josue',
    apellido: 'Rodríguez'
}

//Uso del método call
console.log(persona1.nombreCompleto.call(persona2));
console.log(persona1.nombreCompleto.call(persona2, 'Ing', '22334455'));
console.log(persona1.nombreCompleto('Lic',  22334455 ));

//Uso del método apply
let arreglo = ['Ingeniero', 99887766];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));
console.log(persona1.nombreCompleto.apply(persona2, ["Lic","98997766"]))