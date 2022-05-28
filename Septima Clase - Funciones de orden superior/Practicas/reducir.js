/* 
reduce es un metodo de la clase array que recibe una funcion y esta su vez debe tener 
dos parametros obligatorios y dos opcionales
    el primero es el valor anterior que en la primera iteracion sera el indice 0 se toma como un acumulador
    el segundo es el valor actual de la iteraccion en la primera iteracion sera el indice 1
    el tercer es opcional y es el indice sobre el que opera la funcion indice
    el cuarto es opcional y es todo el vector
esto retorna un unico elemento que seria el resultado de la funcion sobre el acumulador 
*/
let contadorInterno = 0
let arrayNumb = [10, 2, 4, 5, 3, 6, 7]
let total = arrayNumb.reduce((valorAnterior, valorActual, indice, array) => {
    console.log(`esta es la vuelta numero ${contadorInterno}\nEl valor anterior o acumulador es: ${valorAnterior}\nEl valor actual es: ${valorActual}\njusto ahora estamos sobre el indice: ${indice} pero recuerda que es la vuelta numero ${contadorInterno}\n y siempre trabajamos sobre el array ${array}`)
    valorAnterior = valorActual + valorAnterior
    contadorInterno += 1
    return valorAnterior
})

console.log(total)

//una forma quizas un poco mas clara
let acum = arrayNumb.reduce((acum, actual) => acum + actual)
console.log(acum)