/*
forEach es un metodo de orden superior nativa de ES6 que recibe una funcion llamada callback 
y basicamente recorre el array y ejectuta la funcion en cada indice del array
el callback adicionalmente debe recibir un parametro llamado currentValue que es el valor
actual a procesar
*/

let personasASaludar = [
    'Juan',
    'Sofia',
    'Carlos',
    'Augusto',
    'Maria',
    'Crisiana',
    'Veronica'
]

personasASaludar.forEach(function(X){
    console.log('hola como estas ' + X )
})

/*
el callback que debemos recordar es la funcion puede recibir 3 parametros
1 obligatorio el currentValue
2 opcional el index sobre el cual se procesa la iteraccion
3 opcional el array sobre el cual el foreach tiene efecto
*/

personasASaludar.forEach((valorActual,indiceActual,arraySobreLaEjecucion)=>{
    console.log(valorActual,indiceActual,arraySobreLaEjecucion)
})