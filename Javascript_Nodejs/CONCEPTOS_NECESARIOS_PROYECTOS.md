
# Conceptos Necesarios Antes de Iniciar con un Proyecto
------------------------------

## **Modelo cliente-servidor**

- Esta arquitectura está conformada por dos componentes muy importantes. 
	1. Servidor. Es una computadora que se va a encargar de prestar ciertos servicios a otros computadores denominados **clientes**.
	2. Cliente. Los clientes realizarán peticiones al servidor, posteriormente, el servidor se encargará de analizar cada una de las peticiones para devolver una respuesta. 

- Toda la comunicación entre el cliente y servidor la vamos a lograr mediante el protocolo **HTTP**.
- El protocolo HTTP (Hypertext Transfer Protocol) nos va a permitir trasmitir los datos entre el cliente y el servidor.

- Cuando realizamos una petición desde el cliente hacia el servidor, esta petición tiene un componente clave, que es el **método de la solicitud HTTP**.
- Los métodos HTTP comunes son: **GET, POST, PUT, DELETE**.
- **Estos métodos le indicarán al servidor como debe responder a nuestro cliente.**

- Junto con las respuestas del servidor al cliente, se envía el **código del estado de las respuesta**
- Este código de estado puede ser **100, 200, 300, 400, 500**.
	100. Son de tipo respuestas informativas. Por ejemplo, algo que se esté procesando en el servidor.
	200. Son de tipo respuestas de éxito
	300. Son de tipo respuestas de redirección.
	400. Son de tipo respuestas de errores de cliente.
	500. Son de tipo respuestas de errores en el servidor.

## **CRUD (Create, Read, Update, Delete)**

- En nuestro proyecto trabajaremos con 4 funciones específicas en nuestro recursos.
- Esto datos que estamos manipulando, van a almacenarse en una base de datos.

## **REST API**

- Los datos que estamos manipulando, también exponerlos a nuestros clientes mediante una API REST.
























