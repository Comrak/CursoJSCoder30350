let arrayCarros = ['honda','peugot','fiat','ferrari']

let elemetoEliminar = prompt('que elemento desea eliminar de la lista de coches: ')

if(arrayCarros.includes(elemetoEliminar.toLowerCase())){
    let indiceEliminar = arrayCarros.indexOf(elemetoEliminar.toLowerCase())
    alert ('se ha eliminado a ' + arrayCarros.splice(indiceEliminar,1)+ ' de la lista')
    console.table(arrayCarros)
}else{
    alert('ese carro no esta en la lista')
}