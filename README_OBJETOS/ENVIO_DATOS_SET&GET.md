# IMPRIMIENDO DATOS EN LOS ATRIBUTOS DE UN OBJETO
- Una forma válida para imprimir los valores de los atributos de un objeto es usando un for in
  **for(atr in car){console.log(car[atr])};**
  
- Se pueden imprimir o enviar los datos de los atributos con el método **Object.values(miObjeto)**
- Esto devuelve un arreglo
  **console.log(Object.values(miObjeto);**
  
- Se pueden imprimir o enviar datos usando un JSON
  let json = JSON.stringify(miObjeto);
  console.log(json);
  
# GET Y SET
- Los Set y Get al ser definidos dentro del Objeto primero deben declararse las palabras "set" y "get" para aclarar que son métodos de ese tipo.
- Su sintaxis es casi identica a la de Java.
- Al invocar los métodos set y get no se definen los parámetros (se definen parámetros solo para funciones).
- Para asignar valores al set se invoca el método y se asigna valor luego del igual "=".

  let car = {
  	nombre: '',
  	get getNombre(){
  		return this.nombre,
  	},
  	set setNombre(nombre){
  		this.nombre = nombre;
  	}
  }
  
  car.setNombre = 'Ferrari';
  console.log(car.getNombre);
  
  
# CREACIÓN Y ELIMINACIÓN DE ATRIBUTOS EN LOS OBJETOS
- Agregar
  persona.sexo = 'masculino';
  
- Eliminar
  delete persona.sexo;
