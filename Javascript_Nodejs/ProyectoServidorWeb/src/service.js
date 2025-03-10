const data = require('./MOCK_DATA.json');

// este archivo será un módulo exportable.
// Este objeto tendrá funciones encargadas de manipular nuestros datos.
module.exports = {
    getUsers: () => data,
    getUser : function(idString){ 
        let id = Number(idString);
        let user = data.find((data) => data.id === id);
        return user ? user : "No encontrado";
    },
    createUser: (dataUser) => {
        let newUser = {
            id: data.length + 1,
            ... dataUser
        }
        data.push(newUser);
        return newUser;
    },
    updateUser: (idString, body) => {
        let id = Number(idString);
        data[id-1] = {id: id, first_name : body.first_name, last_name : body.last_name, email : body.email};
        return data[id-1];
    },
    deleteUser: (idString) => {
        let id = Number(idString);
        data.splice(id-1, 1);
    }
};

