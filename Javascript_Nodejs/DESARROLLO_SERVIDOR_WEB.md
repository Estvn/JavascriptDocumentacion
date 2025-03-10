
# Desarrollo de un Servidor Web
------------------

## **Dependencias para el desarrollo de un servidor web**

#### Express.js

- Es un Framework que forma parte de NodeJs
- **Express.js**. Sirve para generar servidores web.
- Para podes instalar express, solo necesitamos NodeJs y NPM.

```
npm i express | npm install --save express
```

#### Nodemon

- Es una dependencia que permite actualizar el servidor donde corre la aplicación cada vez que se realizan cambios.
- Es una dependencia únicamente de desarrollo, es decir, no estará implementada en sí en el software.

Comando que indica que la dependencia es únicamente de desarrollo:

```
npm i -D nodemon
```

Para poder ejecutar nodemon se ejecuta el comando:

```
nodemon <nombre del archivo>
```

- Si eso no funciona se siguen los siguientes pasos:
	1. definir un script en **package.json** para ejecutar nodemon.
	2. usar el comando **npm run \<nombre del script>** para ejecutar nodemon

```
"scripts": {
    "dev" : "nodemon index.js"
 },
```

```
npm run <nombre del script>
```

## **Levantar Servidor de NodeJs**

```
node <nombre del archivo>
```















