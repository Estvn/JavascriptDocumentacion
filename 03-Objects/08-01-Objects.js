let persona = {
    nombre: 'Estiven',
    apellido: 'Mejia',
    edad: 22,
    correo: 'estiven.mejia@unah.hn',

    nombreCompleto: function(){return ('El nombre completo es ' + this.nombre + ' ' + this.apellido);},
    sumaSimple: function(a,b){ return(a + b)}
}

//Llamando y modificando valores de los atributos de los objetos.
console.log(persona.nombre);
persona.nombre = 'Josue';
console.log(persona.nombre);

//Esta es la forma para llamar los métodos de un objeto.
console.log(persona.nombreCompleto());
console.log(persona.sumaSimple(2,2));
