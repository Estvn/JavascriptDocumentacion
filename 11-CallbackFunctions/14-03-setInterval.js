//La función setIterval funciona como setTimeout, con la diferencia que se llama la función cada cierto tiempo, y setTimeout solo una vez.

let hora = () =>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(hora, 1000);