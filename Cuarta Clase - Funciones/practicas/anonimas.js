

function saludines(input){
    return function(){
        return input
    }
}

console.log(saludines('Jose')) //regresa una funcion anonima pero no la ejecuta

console.log(saludines('Jose')()) //regresa el retorno de la funcion anonima 