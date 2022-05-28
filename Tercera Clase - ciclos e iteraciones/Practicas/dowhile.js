//programa para validar numeros con do while 
let edad
do{
    edad = prompt('ingresa tu edad')
    if(Number.isNaN(parseInt(edad))){
        alert('edad invalida trata otra vez')
    }
}while(Number.isNaN(parseInt(edad)))