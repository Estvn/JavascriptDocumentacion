/* Se define al principio de una función normal, y convierte la función en una promesa. La función no necesita los parámetros de 
resolved ni rejected, la misma función puede tratarse como resolved o rejected.
Cuando se llame la función, a diferencia de la variable que contiene una promesa, esta debe tener los parentesis de función, ya no es
una promesa pura, luego de definnir los parentesis se puede utilizar then o catch.
*/

async function funcionAsincrona(){
    return ('Esta es la respuesta de la función asíncrona.');
}

funcionAsincrona().then(valor => console.log(valor));