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

let main = async () => {
    try{
        let resultado = await getData(false);
        let resultado2 = await getData2(true);
        console.log(resultado);
        console.log(resultado2);
    }catch(error){
        console.log(error);
    }
}

main();
console.log("Hola que tal");