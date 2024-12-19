# CONSTRUCTORES
- Los constructores de los objetos son funciones a las que se pueden pasar parámetros y estos serán los atributos del objeto.
- Para definir que una función es un constructor de un objeto, se crea su estructura referenciando los atributos con **this**, igual que los constructores de Java.
- Los constructores funcionan como la superclase. Se asigna una instancia del constructor a una variable y se convierte en un objeto que recibe los atributos y métodos del constructor.
- Los nuevos objetos reciben atributos del constructor, y se pueden agregar más atributos y métodos.

- Sintaxis de un constructor:
  
  function Persona(nombre, apellido, edad){
  	
  	this.nombre = nombre;
  	this.apellido = apellido;
  	this.edad = edad;
  }
  
  let Estudiante = new Persona('Estiven','Mejía',22);
  Estudiante.Altura = 1.75;
  
  console.log(Estudiante);
  
# TODOS LOS DATOS SON OBJETOS
- Los objetos, funciones, estruturas de datos y todos los tipos de datos de Javascript se pueden declarar asignando una instancia de sus tipo de objeto a una variable.
- Pero ya existen formas resumidas para crear todos los tipo de datos, esto reduce el trabajo de codificación.
- **Dato extra: Las funciones Self-Invoking pueden ser guardadas en una variable.**

# PROTOYTPE, CALL & APPLY
- Son tres métodos que se usan en objetos
- prototype se usa para agregar atributos al constructor y que puedan ser accedidos por todos los objetos.
- call se usa para usar el método de un objeto en otro objeto. Si el método tiene parámetros se envía por medio de los parentensis de call.
- apply hace lo mismo que call, con la diferencia que usando apply los atributos de los parámetros del método se deben enviar en un arreglo.
