let resultado = sumarTodo(5,4,13,10,9);
console.log(resultado);

/*
let sumarTodo = function(a,b,c,d,e){
    return (a+b+c+d+e);
}*/

//Es posible que se agregen más argumentos que parámetros, así que el código será más dinámico si sumamos todos los argumentos enviados.
function sumarTodo(){
    let suma = 0;
    console.log(typeof suma);
    
    for(let i=0; i<arguments.length; i++){
        suma += arguments[i];
    }

    return suma;
}