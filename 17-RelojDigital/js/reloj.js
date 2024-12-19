const mostrarReloj = () => {
    
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hr}:${min}:${sec}`;

    const dias = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sa', 'Do'];
    const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];

    let fechaTexto = `${diaSemana} ${dia} de ${mes} del año ${fecha.getFullYear()}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    //Añadiendo y quitando un estilo cada cierto tiempo con toggle
    document.getElementById('contenedor').classList.toggle('animar');

}

const formatoHora = (hora) => {
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
}

setInterval(mostrarReloj, 1000);
