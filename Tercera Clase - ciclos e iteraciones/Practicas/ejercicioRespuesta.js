//escribir todos los numeros pares desde el numero 1 hasta un numero x que sea definido por el usuario
let num = prompt('ingrese un numero')

console.log('los numeros pares son:')

for(let i=0;i<num;i++){
    if(num%2==0){
        console.log(i)
    }
}

//hacer un programa que le pida a un usuario un pin de 4 caracteres y no deje de pedirselo hasta que acierte

let pinCorrecto = 'E32t'

let intentoPin = prompt('ingrese su pin')

while(intentoPin != pinCorrecto){
    intentoPin = prompt('pin incorrecto vuelve a intentarlo por favor')
}

alert('el pin es correcto muchas gracias :) ')

//######################## con do while

let pinCorrecto2 = 'E32t'
let intentoPin2 =''

do{
    intentoPin2 = prompt('ingrese su pin')
}
while(intentoPin2 != pinCorrecto2)

alert('el pin es correcto muchas gracias :) ')

//hacer un programa que calcule pontencias de numeros

let num1 = prompt('ingrese el numero al que desea calcular la potencia')
let exponente = prompt('ingrese el exponente')
let total = 1
for(let i=0;i<exponente;i++){
    total = total * num1
}
console.log(total)

//hacer un programa que calcule la sumatoria de un numero x