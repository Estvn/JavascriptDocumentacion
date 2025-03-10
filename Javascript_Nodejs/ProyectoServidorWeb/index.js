const express = require('express'); // Importando el módulo de express
const app = express(); // Para ejecutar express
const PORT = 3000;

const Service = require('./src/service'); // Se importa para usar todas las funciones dentro de este controlador
//const {getUsers:obtenerUsuarios} = require('./src/service');

app.use(express.json()); // Le damos al proyecto la capacidad de recibir datos.

// Esto es un endpoint tipo GET
app.get('/users', (request, response) => {

    response.json({
        message: "Lista de usuarios",
        body: Service.getUsers()
    });
    // {nombre: "Estiven"}
});

app.get('/users/:id', (request, response) => {

    //let id = request.params.id;
    let {params : {id}} = request;
    let user = Service.getUser(id);

    response.status(202).json({
        message: `Usuario número ${id}`,
        body: user
    });
});

// Esto es un endpoint tipo POST
app.post('/users', (request, response) => {

    let {body : newUser} = request; 
    let user = Service.createUser(newUser);
    response.status(201).json({
        message: "El usuario ha sido creado",
        body: user
    });
});

app.put('/users/:id', (request, response) => {
    
    let {body} = request;
    let {params : {id}} = request;
    let userUpdated = Service.updateUser(id, body);
    response.status(202).json({
        message : `Usuario ${id} actualizado`,
        body : userUpdated
    });
});

app.delete('/users/:id', (request, response) =>{

    let {params : {id}} = request;
    Service.deleteUser(id);
    response.status(200).json({
        message: `Usuario ${id} eliminado`
    });
});

app.listen(PORT, () => {
    console.log(`Servidor levantado en la ruta http://${PORT}/users`);
})

