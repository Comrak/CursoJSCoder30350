let productos = []
let producto
do{
    producto = prompt('escriba el nombre del producto que\n desea agregar al inventario \n si no desea agregar ningun producto escriba salir ').toLowerCase()
    if(producto != 'salir'){
        productos.push(producto)
    }
}while(producto != 'salir')

console.table(productos)