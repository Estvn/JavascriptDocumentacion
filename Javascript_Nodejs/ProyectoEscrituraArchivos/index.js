// axios se puede trabajar con then-catch y async-await.
// Forma común de importación en los entornos de NodeJs
const axios = require('axios'); 

// Forma común de importación en los entornos modernos de JS.
// import axios from 'axios'; 

const fs = require('fs').promises;
const path = require('path');

const main = async () => {
    let response = await axios.get('https://rickandmortyapi.com/api/character');

    let {
        data: {results : resultados}
    } = response;

    let personajes = "id, nombre, status, especie\n";
    personajes += resultados.map((personaje) => {
        return{
            id : personaje.id,
            nombre : personaje.name,
            status : personaje.status,
            especie : personaje.species
        };
    }).map((personaje) => {
        return Object.values(personaje).join(',');
    }).join("\n");

    // Crea y escribe datos en un archivo.
    try{
        await fs.writeFile(path.join(__dirname, 'data.csv'), personajes); 
        console.log("Inserción de archivo correcta.");
        return;
    }catch{
        console("Error en la creación del archivo.")
        return;
    }

    //console.log(path.join(__dirname, 'data.csv'));
    //console.log(personajes);
}

main();