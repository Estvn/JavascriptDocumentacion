var semaforo = "rosa";

switch(semaforo){
    case "rojo": case "rosa":
        console.log('No puede pasar');
    break;
    case "amarillo":
        console.log('Detengase');
    break;
    case "verde":
        console.log('Pase');
    break;
    default:
        console.log('No encontrado');
    break;
}