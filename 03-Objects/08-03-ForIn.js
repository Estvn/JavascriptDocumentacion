let person = {
    namep: 'Estiven',
    lastName: 'Mejía',
    phoneNumber: '22334455',
    email: 'estiven.mejia@unah.hn',
    nombreCompleto: function(){console.log(this.namep + ' ' + this.lastName)}
}

//Primera forma de acceder a un atributo
let x = person.lastName;
console.log(x);

//Esta forma para tomar atributos de un objetos sirve para recorrer los atributos con un For In
console.log(person["phoneNumber"]);

//Agregando y eliminando elementos del objeto
person.sex = 'man';
delete person.nombreCompleto;

for(atributo in person){
    //atributos
    console.log(person[atributos])
}
console.log(person)

