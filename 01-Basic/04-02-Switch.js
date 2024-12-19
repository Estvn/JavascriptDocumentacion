let mes = 24;
let valor = "valor desconocido";

switch(mes){
    case 1: case 2: case 3: case 12:
        valor = "Invierno";
        break;

    case 4: case 5: 
        valor = "Primavera";
        break;

    case 6: case 7: case 8: case 9:
        valor = "Verano";
        break;

    case 10: case 11:
        valor = "Otoño";
        break;
    
    default:
        console.log("El valor ingresado no es un caso");
        break;
}

console.log(valor);