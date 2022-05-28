//pedimos un dato numerico para evaluarlo

let num = prompt('ingrese su edad')

num=parseInt(num)

//usamos un if en conjunto con el metodo Number.isNaN para ver si num es realmente es un numero 

if(Number.isNaN(num)){
    console.log('volvamos a intentar con un numero de verdad')
    //tiramos un error parano seguir con el codigo
    throw new Error("no puedo seguir si num no es un numero");
}else{
    console.log('Habemus numero' + num)
}

//evaluamos la edad usando un else if
//si es menor o igual a 17 entramos aca
if(num<= 17){
    console.log('usted es menor de edad')
//si es mayor o igual a 18 y menor o igual a 25 entramos aca
}else if(num>=18 && num<=25){
    console.log('usted es una persona joven')
//si es mayor o igual a 26 y menor o igual a 35 entramos aca
}else if(num>=26 && num<=35){
    console.log('usted es una persona adulta')
//de 36 a 55 entramos aca
}else if(num>=36 && num<=55){
    console.log('usted es un señor')
//si no entra a ninguna de las anteriores lo pasamos por aca
}else{
    console.log('usted es un señor Mayor')
}

//vamos a usar un swicth case para evalua el numero

switch (true){
    case(num<=17):
        alert('usted es menor de edad')
        break
    case(num>=18 && num<=25):
        alert('usted es una persona joven')
        break
    case(num>=26 && num<=35):
        alert('usted es una persona adulta')
        break
    case(num>=36 && num<=55):
        alert('usted es un señor')
        break
    default:
        alert('usted es un señor Mayor')
        break
}

//evaluemos la edad usando un operador ternario
(num<=17)?alert('usted es menor de edad'):alert('usted es mayor de edad')

//usemos un operador ternario anidado con asignacion de variables
let edadEnString
(num<=17)?edadEnString = 'menor':
(num>=18 && num<=2)?edadEnString='joven':
(num>=26 && num<=35)?edadEnString='adulto':
(num>=36 && num<=55)?edadEnString='señor':
edadEnString='mayor'

//evaluamos nuestro nuevo string con un switch
switch(edadEnString){
    case 'menor':
        document.write('usted es menor de edad')
        break
    case 'joven':
        document.write('usted es una persona joven')
        break
    case 'adulto':
        document.write('usted es una persona adulta')
        break
    case 'señor':
        document.write('usted es un señor')
        break
    default:
        document.write('usted es un señor Mayor')
        break

}