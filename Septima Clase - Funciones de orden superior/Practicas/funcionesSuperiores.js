function sonDiferentes(x){
    return (y)=> x!=y
}

let diffCinco = sonDiferentes(5) // seteo el valor de x en mi funcion el valor de diffCinco sera una funcion

console.log(diffCinco(1))//seteo el valor de y en mi la funcion interna que retorna 'sonDiferentes' y la ejecuto

//otor ejemplo
function reciboUnaFuncion(x,y,func){
    return func(x,y)
}

console.log(reciboUnaFuncion(3,4,function sumar(x,y){return x+ y}))

//recuerda que en JS las funciones son objetos complejos a los que se les da mucha importacia
reciboUnaFuncion.atributoDeOBJ = 'puedo agregarle atributos a una funcion por que en esencia es un objeto'

console.log(reciboUnaFuncion.atributoDeOBJ)