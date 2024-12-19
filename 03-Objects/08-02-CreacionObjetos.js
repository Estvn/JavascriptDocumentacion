let persona2 = {
    nombre: 'Josue',
    apellido: 'Rodríguez',
    ciudad: 'Tegucipalpa'
}

let programador = new Object();
programador.nombre = 'Estiven';
programador.apellido = 'Mejía'
programador.id = '0801200117628';
programador.telefono = '22334455';
programador.nombreCompleto = function(){return (this.nombre + ' ' + this.apellido)};
console.log(programador.nombreCompleto());
console.log(programador['nombre']);
console.log(programador.nombre);