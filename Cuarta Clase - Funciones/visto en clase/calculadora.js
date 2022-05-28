function suma(numbUno,numbDos){
    return numbUno + numbDos
}
function resta(numbUno,numbDos){
    return numbUno - numbDos
}
function multiplicar(numbUno,numbDos){
    return numbUno * numbDos
}
function dividir(numbUno,numbDos){
    return numbUno / numbDos
}
function calculadora(numbUno,numbDos,operacion){
    if(operacion == 'suma'){
        return suma(numbUno,numbDos)
    }else if(operacion == 'resta'){
        return  resta(numbUno,numbDos)
    }else if(operacion == 'multiplicacion'){
        return  multiplicar(numbDos,numbUno)
    }else if(operacion == 'division'){
        return  dividir(numbUno,numbDos)
    }else{
        alert('HOLA NO ENTENDI')
    }
}

let valor = calculadora(10,13,'multiplicacion')
console.log(valor)