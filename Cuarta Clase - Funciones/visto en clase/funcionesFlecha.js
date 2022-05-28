const primeraFuncFlecha = () =>{
    console.log('hola mundo')
}

primeraFuncFlecha()

const estaConParams = (paramUno,paramDos) => paramUno + paramDos

let valor = estaConParams(5,5)
console.log(valor)

const unParam = x => 'valor'

let valor2 = unParam()
console.log(valor2)