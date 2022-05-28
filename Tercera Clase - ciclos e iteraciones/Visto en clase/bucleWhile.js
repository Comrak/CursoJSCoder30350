// while(true){
//     console.log('soy el codigo que se repite')
// }

// let num = prompt('dime tu edad: ')
// let contador =0
// while(num <18){
//     num = prompt('dime tu edad: ')
//     contador += 1 // contador = contador + 1
// }

// alert('felicidades eres mayor de edad')
// console.log('el ciclo itero ' + contador + ' veces')

let nombre = prompt('dime tu nombre: ')

while(!((nombre == 'Jose')||(nombre == 'jose')||(nombre == 'Jos"e'))){
    alert(`hola ${nombre} como estas ?`)
    nombre = prompt('dime tu nombre: ')
}

alert('mensaje secreto para el profe')