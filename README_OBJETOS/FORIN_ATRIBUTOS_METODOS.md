# OBJETOS
- Los objetos tienen atributos y métodos. Estos métodos que se pueden asignar a los objetos son Funciones Anónimas.
- Para llamar a un método del objeto se invoca como un atributo y se agregan parentesis al final, ya que es una función.
- En los métodos, para hacer referencia a los atributos que están dentro del objeto se llaman con la palabra reservada "this".

- La sintaxis de un objeto con atributos y métodos es el siguiente:

  let persona = {
  	
  	nombre: 'Estiven',
  	apellido: 'Mejía',
  	
  	nombreCompleto: function(){ return 'El nombre completo es ' + this.nombre + ' ' + this.apellido},
	suma: function(a,b){return(a + b)}  	
  	
  }
  
  console.log(persona.nombre);
  console.log(persona.nombreCompleto()); --> El nombre completo es Estiven Mejia
  
  console.log(persona.suma(2,2); --> 4
  
# CREACIÓN DE OBJETOS
- Se pueden crear objetos de distintas formas.
- La siguiente forma es para crear objetos vacíos en memoria:

  let car = new Object();
  car.marca = 'Toyota';
  car.variante = 'Supra';
  car.nombreCompleto = function(){return this.marca + ' ' + this.variante};
  
  console.log(car.nombreCompleto());
  
# FOR IN
- Se puede acceder a las propiedades de un objeto usando corchetes e ingresando el nombre del atributo como texto.
  console.log(objeto['atributo']);

- Este tipo de llamado de objetos se comporta como un arreglo.
- Con este tipo de llamado de atributos se puede recorrer todos los atributos del objeto con un for in.

  Usando el objeto persona, tomamos sus datos con un For In:
  
  console.log(persona['nombre']); --> Estiven
  console.log(persona.apellido); --> Mejía
  
  for(atributos in persona){
  	atributos; --> Muestra el nombre de los atributos.
  	console.log(persona[atributos]); --> Muestra el contenido de los atributos.
  }
  
# CREACIÓN Y ELIMINACIÓN DE ATRIBUTOS EN LOS OBJETOS
- Agregar
  persona.sexo = 'masculino';
  
- Eliminar
  delete persona.sexo;
