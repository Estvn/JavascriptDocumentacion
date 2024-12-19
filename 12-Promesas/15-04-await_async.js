// La palabra await solo se puede declarar dentro de una función declarada con async.
// La palabra await sirve para ejecutar la función sin necesidad de realizar un then o catch.
// Si se usa await, dentro de la función async se debe declarar una promesa y luego tomar el resultado con async.

async function awaitFunction(){
    let promise = new Promise((resolved) =>{
        resolved('Se ha ejecutado la función asíncrona usando await.');
    });

    console.log(await promise);
}
awaitFunction();