'use strict';

let x = '';

try{
    if(isNaN(x)) throw 'No es un número';
    if(x === '') throw 'Esta variable no tiene contenido';

}catch(error){
    console.log(error);
}finally{
    console.log('Ha finalizado la captura de errores');
}

console.log('Continuación del código...');