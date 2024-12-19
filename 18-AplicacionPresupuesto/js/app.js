const ingresos = [

];

const egresos = [

];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = () => {
    let totalIngresos = 0;
    for(let ingreso of ingresos){
        totalIngresos += ingreso.valor;
    }
    return totalIngresos;
}

let totalEgresos = () => {
    let totalEgresos = 0;
    for(let egreso of egresos){
        totalEgresos += egreso.valor;
    }
    return totalEgresos;
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);

    if(totalEgresos() == 0){
        document.getElementById('porcentaje').innerHTML = formatoPorcentaje(0);
    }else{
        document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    }
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor) => {
    return new Intl.NumberFormat(
                                'en-US', {style: 'currency', currency:'USD', minimumFractionDigits:2})
                                .format(valor);
}

const formatoPorcentaje = (valor) => {
    //return valor.toLocateString('en-US', { style: 'percent', minimumFractionDigits: 2 });
    return valor.toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 2 });
    
}

const cargarIngresos = () => {

    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" 
                        onclick='eliminarIngreso(${ingreso.id})'></ion-icon>                            
                    </button>
            </div>
            </div>
        </div>
    `;
    return ingresoHTML;
}

const eliminarIngreso = (id) => {
    //ingresos.findIndex( (ingreso) => {ingreso.id === id});
    let indice = ingresos.findIndex(ingreso => ingreso.id === id);

    ingresos.splice(indice, 1);
    cargarCabecero();
    cargarIngresos();
}

const cargarEgresos = (egreso) => {

    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
} 

const crearEgresoHTML = (egreso) => {

    let egresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" 
                        onclick = 'eliminarEgreso(${egreso.id})'></ion-icon>                            
                    </button>
                </div>
            </div>
        </div>
    `;

    return egresoHTML;
}

const eliminarEgreso = (id) => {
    //ingresos.findIndex( (ingreso) => {ingreso.id === id});
    let indice = egresos.findIndex(egreso => egreso.id === id);

    egresos.splice(indice, 1);
    cargarCabecero();
    cargarEgresos();
}

const agregarDato = () => {
    let form = document.forms['forma'];

    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];

    if((descripcion.value && valor.value) !== '' ){

        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();

        }else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}