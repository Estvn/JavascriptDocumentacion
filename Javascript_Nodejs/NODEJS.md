
# Introducción a NodeJs
-----------------

- NodeJs es un entorno de ejecución para Javascript.
- Inicialmente, Javascript fue creado para agregar interacción con el navegador, posteriormente a eso, fue liberado el motor V8, bajo el que se ejecuta Javascript en Google Chrome.
- Gracias a esta liberación del motor V8, se pudo crear NodeJs, el cuál permite la ejecución de Javascript fuera de los navegadores (específicamente, en los servidores).
- **Actualmente, Javascript a parte de ejecutarse en el navegador y los servidores, se ejecuta en dispositivos IoT**.

#### npm

- **npm** es el gestor de paquetes de NodeJs.
- **npm** nos va a ayudar tanto a gestionar los paquetes que nosotros podemos utilizar en nuestro proyectos, así como generar también proyectos con la herramienta de npm.
- Además, puede generar tareas como ejecución de Scripts, y otras tareas avanzadas. 

#### package.json

- Al generar un proyecto utilizando NodeJs, nos va a generar un archivo llamado **package.json**
- **package.json** es un manifesto o declaración pública de las intenciones que tiene nuestro programa. 
- Es decir, en este archivo se van a encontrar todos los datos necesarios acerca de nuestro software (definición del proyecto, versión, dependencias en uso, repositorio en Github, autor del proyecto, etc).

#### JSON

- **package.json** está escrito en formato .json
- **JSON** es un formato ligero de intercambio de datos, que es muy fácil de entender y escribir para los humanos y para las máquinas es más fácil leerlo y generarlo.

> [!.]
> - **JSON (Javascript Object Notation) va a tener la escructura de un objeto Javascript.**
> - Quiere decir que va a estar estructurado por los elementos clave-valor.

- En Javascript, cuando escribes un objeto, las claves no son strings.
- A diferencia de Javascript, **en JSON, las claves siempre serán strings**. Y los valores pueden ser de cualquier tipo de dato.

#### Manejo de Dependencias

- Algo en lo que los desarrolladores trabajamos constantemente, es en la gestión de dependencias. 
- En el **package.json** es donde se escriben todas las dependencias que se usarán en el proyecto.
- La dependencias se encontrarán en este archivo. Pero, para que estas dependencias existan en nuestro proyecto, deben estar definidas dentro de una carpeta llamada **node modules**.

> [!.]
> - **node modules** contendrá el paquete
> - **package.json** contendrá una escritura de que paquetes usaremos en nuestro proyecto.





















