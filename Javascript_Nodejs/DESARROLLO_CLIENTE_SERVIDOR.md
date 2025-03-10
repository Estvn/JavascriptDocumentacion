
# Desarrollo de Cliente-Servidor
------------------

- **Este comando crea un nuevo espacio de trabajo en la carpeta donde estamos ubicados:**

```
npm init
```

- Para instalar dependencias 

```
npm install axios
```

- **Axios** es una herramienta bastante utilizada en el desarrollo, y nos va a ayudar a realizar peticiones a otro servidor.
- Al instalar una dependencia, se va a agregar en el **package.json** una sección de dependencias con las que se instalarán en el proyecto. Y se va a crear una carpeta llamada **nodemodules** que contiene las dependencias a utilizar.

- **package-log.json** es un archivo que mantiene las dependencias de los paquetes utilizadas en el proyecto. Es útil para cuando alguien instala el proyecto, se instalen las versiones correctas de los paquetes.

## **Axios**

Es un paquete asíncrono. Va a ejecutar las peticiones de forma asíncrona.

- Para ejecutar proyectos con nodeJs desde la terminal vamos a usar el siguiente comando:

```
node <nombre del archivo>
```

- Un ejemplo del uso de axios:

```
const axios = require('axios');

const main = async () => {
    let response = await axios.get('https://rickandmortyapi.com/api/character');

    let {
        data: {results : resultados}
    } = response;

    let personajes = resultados.map((personaje) => {
        return{
            id : personaje.id,
            nombre : personaje.name
        }
    });
    console.log(personajes);
}

main();
```

## **Módulos**

- Los módulos de NodeJs ya vienen incorporados o precargados dentro de la herramienta. 
- Son librerías que ya existen desde el momento en el que se instala NodeJs (como el manejador de paquetes **npm**).
- **Los paquetes o módulos siempre se trabajan en la parte superior del archivo.**

**Forma común de importación en los entornos de NodeJs:**

```
const axios = require('axios');
```

**Forma común de importación en los entornos modernos de JS:**

```
import axios from 'axios'
```

- Dos módulos de NodeJs
	1. FS. Ayuda a controlar el sistema de archivos (File System) del computador en el que se encuentra corriendo.
	2. Path. Ayuda a generar las rutas dentro de nuestro computador..









































