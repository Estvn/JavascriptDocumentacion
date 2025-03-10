// Función self-invoking
let a =3, b=5;

(function(a=0,b=0){
    console.log(`El valor es ${a+b}`);
})(a,b);