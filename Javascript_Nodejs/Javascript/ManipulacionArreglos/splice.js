// splice elimina o reemplaza elementos dentro de un arreglo
let nombres = ['Estiven', 'Josue', 'Mejiia'];
nombres.splice(1); // índice donde empezará a eliminar
console.log(nombres);

nombres = ['Estiven', 'Josue', 'Mejiia'];
nombres.splice(1,1); // índice y cantidad de elementos a eliminar
console.log(nombres);

nombres = ['Estiven', 'Josue', 'Mejiia'];
nombres.splice(1,1, "Jose"); // Reemplaza el elemento de la posición indicada.
console.log(nombres);

