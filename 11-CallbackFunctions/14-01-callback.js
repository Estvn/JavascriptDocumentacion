let mensaje = function(msj){console.log(`El resultado de la operación es ${msj}`)};

let suma = (op1, op2, callback) => {
    let res = op1 + op2; 
    callback(res);
}
suma(2,2, mensaje);
setTimeout(() => console.log('Esto es una función flecha'), 3000);