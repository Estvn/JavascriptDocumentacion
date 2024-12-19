class Person{
    static counter = 0;
    email = 'This is an e-mail';

    constructor(name){
        this.name = name;
        Person.counter++;
    }

    get getName(){
        return this.name;
    }
    set setName(name){
        this.name = name;
    }
}

class Student extends Person{
    constructor(nombre){
        super(nombre);
    }
}

let stu = new Student('est');
let per = new Person('mej');

console.log(Person.counter);
console.log(stu.email);

//Como email no es un atributo que pertenece a la clase se está creando un nuevo atributo de la clase.
//Esta es una forma para añadir nuevos atributos a un objeto.
console.log(Student.email);