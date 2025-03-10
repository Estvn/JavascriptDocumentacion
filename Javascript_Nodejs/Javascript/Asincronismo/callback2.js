const getData = (cb) => {
    cb({id: 1, nombre: "Estiven"});
    console.log("Esta línea se ejecutará primero si el callback tarda en procesarse.");
}

let imprimirValores = function(objeto){
    setTimeout(() => {
        console.log(objeto.nombre + " " + objeto.id)
    }, 3000);
};

getData(imprimirValores);