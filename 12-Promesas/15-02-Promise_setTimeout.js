let promise = new Promise((resolved) => {
    console.log('Promesa iniciada')
    setTimeout(() => resolved('Ejecutando el setTimeout'), 3000);
});

promise.then(valor => console.log(valor));

/*let promise = new Promise((resolved) => {
    setTimeout(() => resolved("se ha resuelto"), 3000)
})

promise.then(valor => console.log(valor));
*/