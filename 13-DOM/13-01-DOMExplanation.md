# INTRODUCCIÓN AL DOM
- La etiquetas dentro de HTML pueden contener más etiquetas con datos y atributos. Todos estos elementos componen el DOM, 
y cada uno de esos elementos va a formar un documento HTML.

- Cada uno de los elementos del DOM se reconoce como un objeto en JS.
- El elemento principal que va a acceder al DOM es el objeto Document. Este objeto es el que se utilizará para manejar el documento HTML, 
es decir, el DOM de la página HTML.
- A través del elemento principal del DOM, es decir, el objeto Document vamos a interactuar con cada uno de los elementos dentro del HTML.

- En Javascript todos estos elementos del HTML son objetos, por ende, todos estos elementos tienen atributos y métodos, también se pueden
modificar y eliminar.


# ETIQUETAS

## document.getElementById
- Este método del objeto document se usa para tomar una etiqueta con un identificador para hacer modificaciones.
- Para recordar, los identificadores en las etiquetas son únicos, por esta razón el método menciona un Id de forma singular.

- Se considera una buena práctica tomar todo el elemento en una variable, y luego se puede llamar y especificar el atributo de la etiqueta que se desea modificar.

## document.getElementsByTagName
- Este método del objeto document se usa para tomar los elementos del DOM con un nombre de etiqueta, por ejemplo, si deseamos tomar todas las etiquetas de título "<title></title>" se pueden tomar con ested objeto.
- Al existir muchos elementos en el DOM con un mismo tipo de etiqueta, este método toma todos los elementos con la misma etiqueta. La variable almacena una lista de todos estos elementos, por lo tanto, la variable se debe trata como un Array para acceder a un elemento en específico.
- Si se desea modificar todos los elementos que contiene la variable, entonces se crea un for.

## document.getElementsByClassName
- Este método del objeto document se usa para tomar todos los elementos del DOM que comparten una misma clase.
- Al existir la posibilidad que varios elementos compartan una clase, la variable puede almacenar una lista de elementos, y esta se deberá tratar como un arreglo cuando se desee hacer una modificación a un elemento en específico, o a todos los elementos que contiene la variable.

## document.querySelectorAll(label.class)
- Este método del objeto document se usa para obtener todos los elementos que sean de un tipo de etiqueta y que compartan una clase
- Es más estricto que el getElementsByClassName, ya que este toma todas las etiquetas que comparten una clase. En cambio, querySelectorAll toma todo un tipo de etiqueta que comparte una clase

## document.forms['form1','form2']
- Este método de document toma los formularios del HTML que se añadan en el arreglo.
- En el arreglo se deben añadir los identificadores de los formularios.

- Los formularios tienen un arreglo de todos los elementos que lo componen.
- Para acceder a estos elementos se trata el formulario como un arreglo y se define el elemento que se quiere ingresar.
  let form = document.forms['form1'];
  let nombre = form['nombre'];s

- Los formularios tienen un arreglo de elementos, pero cada elemento tiene atributos.
- Para acceder a un atributo de un elemento se hace lo siguiente
  let value = nombre.value;

## Método onclick de button
- Es un método que se puede añadir en la etiqueta de button donde se puede definir dentro de parentesis una función de JS que le agrege un evento al botón al hacer click.
- **Dejé de escribir información en este archivo. Revisar el cuaderno y los archivos de código**.
*/