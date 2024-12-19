class Producto{

    static contadorProductos = 0;

    constructor(nombre, precio){
        this.idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
    }

    get getNombre(){
        return this.getNombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getPrecio(){
        return this.precio;
    }

    set setPrecio(precio){
        this.precio = precio;
    }

    toString(){
        return `${this.idProducto}. Nombre del producto: ${this.nombre} | Precio del producto: $${this.precio}`;
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        this.contadorProductosAgregados = 0;
    }

    agregarProducto(producto){
        if(this.productos.length < Orden.MAX_PRODUCTOS){
            this.productos.push(producto);
        }else{
            console.log("No se pueden añadir más productos.")
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this.productos){
            totalVenta += producto.getPrecio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this.productos){
            productosOrden += '\n' + producto.toString() + ' ';
        }

        console.log(`Orden No. ${this.idOrden} \nProductos: ${productosOrden} \nTotal: ${this.calcularTotal()}`)
    }
}

let producto1 = new Producto('Zapatos Formales', 2_000);
let producto2 = new Producto('Reloj', 570);
let producto3 = new Producto('Camisa', 890);
let producto4 = new Producto('Pantalón', 1_200);
let producto5 = new Producto('Zpatos Deportivos', 995);
let producto6 = new Producto('Chaqueta de Cuero', 3_000);


let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);
orden1.agregarProducto(producto6);

//For In llama a los atributos de un objeto.
for(atributos in producto1){
    console.log(producto1[atributos]);
}

//For Of llama a un tipo de objeto en una lista.
let arregloProductos = [producto1, producto2, producto3, producto4, producto5, producto6];
for(let producto of arregloProductos){
    console.log(producto.toString());
}

orden1.mostrarOrden();