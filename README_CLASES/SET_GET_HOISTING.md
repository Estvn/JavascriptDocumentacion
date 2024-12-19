# CLASES
- Las clases contienen atributos y métodos, a partir de ella se pueden crear objetos con sus atributos y métodos predefinidos
- Las clases contienen constructores que se definen con la palabra **constructor** y pueden enviarse parámetros.
- El cuerpo del constructor tiene sintaxis igual al constructor de Java, sus datos llevan la palabra this para referirse a los datos de ese objeto.
- **No es necesario que los métodos y atributos de las clases sean separados por comas, eso solo vale en los objetos. En los constructores de los objetos tampoco hay separaciones por comas.**

  class Persona{
  
  	constructor(nombre, apellido){
  		this.nombre = nombre;
  		this.apellido = apellido;
  	}
  }
  let Persona1 = new Persona('Estiven','Mejía');
  
# SETTERS & GETTERS
- Los Setter y Getter no son funciones, por esto cuando se llaman no se definen parentesis.
- Los set y get tienen la misma estructura que los que se definen en los objetos. En las clases los atributos y métodos no se separan por comas, eso es una caracteristica de los objetos.

# HOISTING FUNCIONA CON FUNCIONES Y VAR, HOISTING NO SE APLICA EN LAS CLASES
