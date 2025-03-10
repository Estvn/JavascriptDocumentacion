
// Ejemplo de una promesa dentro de una función.
let getData = (error) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!error){
                resolve({
                    nombre: "Estiven",
                    apellido: "Mejia",
                    edad: 23
                });
            }else{
                reject("No hay datos");
            }
        }, 2000);
    });
}

let getData2 = (error) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!error){
                resolve({
                    nombre: "Josue",
                    apellido: "Rodríguez",
                    edad: 23
                });
            }else{
                reject("No hay datos en data 2");
            }
        }, 2000);
    });
}

console.log("Inicio del código");

getData(false)
.then(
    (persona) => {
                console.log(persona.nombre + " " + persona.apellido + " " +  persona.edad)
                return getData2(true);
                }
    )
.then((persona) => {console.log(persona.nombre + " " + persona.apellido + " " +  persona.edad)})
.catch((error) => console.log(error)); // Este catch gestiona los errores de las dos promesas que se han llamado.

console.log("Fin del código");