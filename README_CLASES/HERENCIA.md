# HERENCIA
- Cuando se creaban objetos a partir de un constructor tipo función no era herencia pura.
- Las clases pueden heredar a otras clases cuando hacemos uso de la palabra **extends**.

- Cuando una clase hereda a otra, todos los atributos y métodos del padre están definidos de forma implícita en la clase de los hijos.

- Los constructores de los hijos deben llamar al constructor del padre para que este epueda ser inniciado al instanciar una clase hija
- Si el contructor del padre tiene parámetros, en el super se definen y se agregan primero los atributos del padre en la clase del hijo, ejemplo:

  class Persona{
  	constructor(nombre){
  		this.nombre = nombre;
  	}
  }
  
  class Empleado extends Persona{
  	constructor(nombre, edad){
  		super(nombre);
  		this.edad = edad;
  	}
  }
  
  let empleado1 = new Empleado('Estiven Mejía', 22);
  
# HEREDANDO MÉTODOS DE CLASES
- En los objetos se creaba un atributo del objeto para guardar una función anónima
- En las clases las funciones no se definen con la palabra function, y cuando se llaman se le agregan parentesis al final, ya que es una función.
- Los métodos del padre pueden ser sobreescritos por las clases hijas, y se puede invocar el método del padre en el hijo usando la palabra **super**.

  class Persona{
  	constructor(nombre, apellido){
  		this.nombre = nombre;
  		this.apellido = apellido;
  	}
  	
  	nombreCompleto(){
  		return this.nombre + ' ' + this.apellido;
  	}
  }
  
  let persona1 = new Persona('estiven','mejia');
  connsole.log(persona1.nombreCompleto());
  
  
