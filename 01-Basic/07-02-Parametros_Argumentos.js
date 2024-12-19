let fun = function(a = 2, b = 45){

    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);

    return (a + b + arguments[2]);
}

let a = fun(30, 66, 15);
console.log(a);
//console.log(fun(45,6,9));