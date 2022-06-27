// console.log('primera linea')
// setTimeout(()=>{
//     console.log('segunda linea')
// },0)
let contadorGlobal = 0
console.log('tercera linea')

const idIntervalo = setInterval(()=>{
    contadorGlobal ++
    console.log(contadorGlobal)
    console.log('hola soy el intervalo ha pasado un segundo')
    if(contadorGlobal === 5){
        clearInterval(idIntervalo)
    }
},1000)


for(let l of 'hola'){
    setTimeout(()=>{
        console.log(l)
    },0000)
}
for(let l of 'mundo'){
    const idTimeout = setTimeout(()=>{
        console.log(l)
    },5000)
    clearTimeout(idTimeout)
}
console.log('tercera linea')
