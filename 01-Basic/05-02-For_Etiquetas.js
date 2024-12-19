for(let i=0; i<=20; i++){
    if(i%2 !== 0){
        break;
    }
    console.log(i);

}
console.log("Terminó.")

//Etiqueta
inicio:
for (let i =0; i<= 10; i++){
    if(i%2 != 0){
        continue inicio;
    }
    console.log(i);
}