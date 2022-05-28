let fecha= prompt('ingresa tu fecha de nacimiento asi mes/dia/año ejemplo 12/30/2000')

let fechanac = new Date(fecha)
let fechaAct = new Date()

let diferenciaMiliSecs = fechaAct - fechanac
console.log(diferenciaMiliSecs)
let totalDias = Math.ceil(diferenciaMiliSecs/(1000*60*60*24))
let totalAnios = Math.floor(totalDias/365)
console.log(totalDias)
console.log(totalAnios)