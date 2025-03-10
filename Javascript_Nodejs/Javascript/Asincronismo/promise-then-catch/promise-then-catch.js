// Ejemplo de una promesa guardada en una variable.
// let getData2 = new Promise((resolve, reject) => {});

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

console.log("Inicio del código");

getData(true)
.then((persona) => console.log(persona.nombre + " " + persona.apellido + " " +  persona.edad))
.catch((error) => console.log(error));

console.log("Fin del código");