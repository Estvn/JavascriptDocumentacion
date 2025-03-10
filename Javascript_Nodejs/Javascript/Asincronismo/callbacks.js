/**
 * callbacks
 * son funciones que se pasan como parámetros a otras funciones
 * para que sean ejecutadas cuando la función padre haya terminado sus procesos.
 */

const suma = (a, b, cb) => {
    cb(a+b);
    console.log("Si el callback es tardado, se ejecutará este mensaje primero");
};
function imprimir(data){console.log(data)};
suma(1,2, imprimir);

//--------------------------------------------------------------------------------------
// El asincronismo no se va a reflejar si el callback es rápido de realizarse
console.log("Otro");

const suma2 = (a, b, cb) => {
    cb(a+b);
    console.log("Si el callback es tardado, se ejecutará este mensaje primero");
}
function imprimir2(data){ setTimeout(() => {console.log(data)}, 3000 )}
suma(1,2, imprimir2);