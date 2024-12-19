'use strict';
async function myFunction(){
    console.log('Inicio de la función.');
    let promise = new Promise((resolved)=>{
        setTimeout(()=> resolved("Se ha ejecutado la función asíncrona son setTimeout"), 3000);
    });
    console.log(await promise);
    console.log('FIn de la función.');
}

myFunction();