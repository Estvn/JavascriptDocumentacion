"use strict";
//Esta clase crea objetos Monitor que serán agregados en la clase Computadora
class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamano){
        this.marca = marca;
        this.tamano = tamano;
        this.idMonitor = ++Monitor.contadorMonitores;
    }

    get getMarca(){
        return this.marca;
    }

    set setMarca(marca){
        this.marca = marca;
    }

    get getTamano(){
        return this.tamano;
    }

    set setTamano(tamano){
        this.tamano = tamano;
    }

    toString(){
        return `No. Monitor: ${this.idMonitor}| Marca: ${this.marca}| Tamaño: ${this.tamano} pulgs.`;
    }

}

//Esta clase es padre de los objetos tipo Teclado y Raton
class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    get getTipoEntrada(){
        return this.tipoEntrada;
    }

    set setTipoEntrada(tipoEntrada){
        this.tipoEntrada = tipoEntrada;
    }

    get getMarca(){
        return this.marca;
    }

    set setMarca(marca){
        this.marca = marca;
    }

    toString(){
        return `Marca: ${this.marca}| Tipo de entrada: ${this.tipoEntrada}`;
    }
}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    }

    toString(){
        return `No. Ratón: ${this.idRaton}| ${super.toString()}`;
    }
}

class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclados;
    }

    toString(){
        return `No. Teclado: ${this.idTeclado}| ${super.toString()}`;
    }
}

//Esta clase tiene como atributos objetos tipo: Monitor, Teclado y Raton
class Computadora{

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
        this.idComputadora = ++Computadora.contadorComputadoras
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getMonitor(){
        return this.monitor;
    }

    set setMonitor(monitor){
        this.monitor = monitor;
    }

    get getTeclado(){
        return this.teclado;
    }

    set setTeclado(teclado){
        this.teclado = teclado;
    }

    get getRaton(){
        return this.teclado;
    }

    set setRaton(raton){
        this.raton = raton;
    }

    toString(){
        return`No. Computadora: ${this.idComputadora}
        Nombre: ${this.nombre}
        Monitor: ${this.monitor}
        Teclado: ${this.teclado}
        Ratón: ${this.raton}
        `;
    }
}

class Orden{
    static contadorOrdenes = 0;
    listaComputadoras = [];
    constructor(){
        this.idOrden = ++Orden.contadorOrdenes;
    }

    agregarComputadora(computadora){
        this.listaComputadoras.push(computadora);
    }

    mostrarOrden(){
        let compu = '';
        for(let computadora of this.listaComputadoras){
            compu += '\n' + computadora;
        }
        console.log(`Esta es la orden No. ${this.idOrden} \nLista de computadoras compradas: \n${compu}`);
        
    }

}

let monitor1 = new Monitor('Asus', 20);
let monitor2 = new Monitor('Dell', 18);
let teclado1 = new Teclado('Inalámbrico', "Samsung");
let teclado2 = new Teclado('USB', "Dell");
let raton1 = new Raton('Mini USB', 'Apple');
let raton2 = new Raton('Inalámbrico', 'Samsung');

let computadora1 = new Computadora('Computadora Samsung', monitor2, teclado1, raton2);
let computadora2 = new Computadora('Computadora Asus', monitor1, teclado2, raton1);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

orden1.mostrarOrden();

// console.log(computadora1.toString());
// console.log(computadora2.toString());
