// Solo es un ejemplo para mostrar que ocurre en caso de un error.
// No se está manejando ningún error.
const getData = (cb, cbError) => {

    if(true){
        cb({id: 1, nombre: "Estiven"});
    }else{
        cbError(new Error("No se pudo obtener los datos"));
    }
}

let imprimirValores = function(objeto){
    setTimeout(() => {
        console.log(objeto.nombre + " " + objeto.id)
    }, 3000);
};
let error = (error) => console.log(error);

getData(imprimirValores, error);
console.log("Si el callback se tarda, esto se ejecutará primero")