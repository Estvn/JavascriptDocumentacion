
# Asincronismo

- Javascript ejecuta todo su código en un solo proceso. 
- Esto implica que si necesitas hacer un proceso demasiado extenso (obtener información de una base de datos), **puedes detener todo el flujo del programa escrito en Javascript**.

- El asincronismo nos va a permitir delegar los procesos demasiado extensos en subprocesos que se van a encargar de resolver una tarea, para después regresar al proceso principal.
- A este modelo de concurrencia se le conoce como **no bloqueante**, puesto que, cualquier tarea pesada que continúe en el flujo de ejecución, va a ser designada, mientras el programa sigue ejecutándose. Una vez que termine, revisa los subprocesos y los ejecuta si han terminado.
- De esta forma, no existe ningún tipo de bloqueo dentro de nuestro software escrito en Javascript.

- El proceso principal es conocido como **Event loop**.
- **Event loop** va a ser el encargado de ejecutar cada una de nuestras tareas de software. 
- Las tareas van a ser apiladas en una pila conocida como **Event queue**.
- **Event queue** será la encargada de enviar cada tarea al **Event loop** para ser ejecutada.

- **Event loop** funciona como un while-true, que se ejecuta constantemente, permitiendo el ingreso de alguna tarea de la cola para realizarla y despacharla inmediatamente.
- **Event loop** en algún momento detectará que una tarea de la **Event queue** es demasiado pesada, como por ejemplo traer registros de la DB, escribir archivos en disco, etc. 

- Cuando **Event loop** detecta tareas muy pesadas, las envía a una nueva pila conocida como **Thread pool**.
- **Thread pool** será el encargado de levantar otro proceso (**otro hilo**) para resolver esa tarea más extensa, mientras que **Event loop** va a seguir ejecutando las demás tareas que se encuentran en la **Event queue**.

- Una vez finalizadas las tareas del **Event queue**, el **Event loop** va a revisar el **Thread pool**, verificando si las tareas ya han sido cumplidas. 
- Si las tareas del **Thread pool** ya han sido cumplidas van a moverse al **Event queue**, para posteriormente ser despachadas por el **Event loop**.

- Cuando ya se han finalizado todos los procesos de nuestro programa, el **Event loop** va a mantenerse en escucha de cualquier otro evento que surja dentro de nuestro software.

```
console.log("Tarea 1");
console.log("Tarea 2");
console.log("Tarea 3");

setTimeout(()=>{
    console.log("Tarea 4");
}, 2000); // Se identifica com asíncrono

console.log("Tarea 5");
```

- Esto es un modelo conocido como **concurrente no bloqueante**.

## **Callbacks**

- Era una forma que proponía JS para manejar las formas asíncronas.
- Los **Callbacks** es una función que se pasa como argumento en otra función. 
- Esta técnica nos permite llamar a una función dentro de otra, una vez que la función padre haya terminado los procesos. 
- Cuando la función padre termine sus procesos, ejecutará la función que se le ha pasado como parámetro.

```
const suma = (a, b, cb) => cb(a+b);
function imprimir(data){console.log(data)};
suma(1,2, imprimir);
```

- **El paso de funciones como parámetro a otras funciones era una manera que tenía Javascript para gestionar el asincronismo**.

```
const getData = (cb) => {
    cb({id: 1, nombre: "Estiven"});
    console.log("Esta línea se ejecutará primero si el callback tarda en procesarse.");
}

let imprimirValores = function(objeto){
    setTimeout(() => {
        console.log(objeto.nombre + " " + objeto.id)
    }, 3000);
};

getData(imprimirValores);
```

> [!WARNING]
> Los callbacks ya no se usan en la actualidad. Para manejar el asincronismo, hoy en día se usan las promesas.

## **Promises**

- ¿Que pasaría si en un callback se detecta un error y no se pueden obtener los datos o resultado que se esperaba obtener?
- **Las promesas ya tienen integrada la gestión de una entrega positiva por parte de la función, o para controlar los errores dentro de la función**.

```
let getData1 = (error) => {
    return new Promise((resolve, reject) => {
        if(!error){
            resolve({
                nombre: "Estiven",
                apellido: "Mejia",
                edad: 23
            });
        }else{
            reject("No hay datos");
        }
    });
}
```

- La promesas tienen dos formas de ser resueltas: 
	- **Utilizando los métodos de la promesa then y catch**.
	- **Utilizando las palabras reservadas async y await**

#### **Uso de then y catch**

- Al tener una función que retorna una promesa, al llamar a la función se pueden habilitar los métodos **then()** y **catch()** para ella.

```
getData().then().catch();
```

- Estos métodos van a recibir callbacks en sus parámetros.

```
getData(true)
.then((persona) => console.log(persona.nombre + " " + persona.apellido + " " +  persona.edad))
.catch((error) => console.log(error));
```

> [!important]
> Las promesas se pueden encadenar.

#### **Uso de async y await**

- Es otra de las formas de resolver promesas.
- Esta solución surgió por los difícil que resultaba leer los códigos escritos con el manejo de las promesas con **then y catch**. Una parte, por su forma de leer, y también por la dificultad que representa al encadenar varias resoluciones de promesas. 

- A diferencia de then y catch, **async y await son palabras resevadas del lenguaje.**
- Para que funciones **await**, debe de existir **async**.

```
let main = async () => {
    try{
        let resultado = await getData(false);
        let resultado2 = await getData2(true);
        console.log(resultado);
        console.log(resultado2);
    }catch(error){
        console.log(error);
    }
}

main();
console.log("Hola que tal");
```



























