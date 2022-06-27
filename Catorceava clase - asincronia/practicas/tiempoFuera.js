let segundos = 0

const tiempo = ()=>{
    segundos ++
    console.log(segundos)
}

// setTimeout(tiempo,1000)
// setTimeout(tiempo,2000)
// setTimeout(tiempo,3000)
const intervalo = setInterval(()=>{
    segundos ++
    console.log(segundos)
    if(segundos>5){
        clearInterval(intervalo)
    }
},1000)

const tiempoFuera = setTimeout(()=>{
    console.log('nunca me veran')
},5000)
console.log(tiempoFuera)
clearTimeout(tiempoFuera)
setTimeout(()=>{
    alert('pasaron 4 segundos')
   
},4000)

console.log('fin')