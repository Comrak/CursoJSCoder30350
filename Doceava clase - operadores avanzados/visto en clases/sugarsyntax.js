document.addEventListener('DOMContentLoaded',()=>{
    // let contador1 = 0
    // let contador2 = 0
    // let contador3 = 0

    // for(let i=0;i<10;i++){
    //     contador1 = contador1 - 1
    //     contador2 -= 1
    //     contador3 --
    //     console.log(contador1)
    //     console.log(contador2)
    //     console.log(contador3)

    // }

   // let queHace = prompt('que hace el animal');



        // condicion              verdad                 falso
    // (queHace ==='ladra')?alert('es un perro'):alert('no es un perro')
    // //tienen retorno implicito 
    // edad = 18
    // let puedeTomar = (edad >= 21)?'si puede':'no no puede'
    // console.log(puedeTomar)

    // let edadEnString

    // (num<=17)?edadEnString = 'menor':
    // (num>=18 && num<=2)?edadEnString='joven':
    // (num>=26 && num<=35)?edadEnString='adulto':
    // (num>=36 && num<=55)?edadEnString='señor':
    // edadEnString='mayor'
    // let queHace = 'ladra';
    
    // let animal = (queHace ==='ladra') && 'perro';

    // (animal != false)?console.log('es un perro'):console.log('no es un perro')
    // let valor1 = 'valor bueno'
    // let valor2 = ''
    // let valor3 = 0
    // let valor4 = null 

    // let variable1 = valor1??'no vale nada'
    // let variable2 = valor2??'no vale nada'
    // let variable3 = valor3??'no vale nada'
    // let variable4 = valor4??'no vale nada'
    // console.log(undefined??'no vale nada')
    // console.log(variable1)
    // console.log(variable2)
    // console.log(variable3)
    // console.log(variable4)


    const personaObj = null
    console.log(personaObj.a||'no hay atributo X trabajar segun corresponde')
       const perritos = {OBJperrito:{nombre:'fido',pelaje:'largo',patas:6,color:'marron'},
                         OBJperrito2:{nombre:'paco',pelaje:'corto',patas:4,color:'blanco'}}
    
       const {OBJperrito,OBJperrito2} = perritos

       const {nombre,pelaje}= OBJperrito
       const {nombre:nombre2,pelaje:pelaje2}= OBJperrito2

       console.log(nombre,nombre2)

    // let arr = ['hola','mundo']
    // let arr2 = [1,2,34,4,5,6,76,78,7,5,2,123,123,123,1,123,123,123,]
    // const objNumbers = {...arr}
    // //    const [,a,b] = arr
    // //    console.log(a)
    // //    console.log(b)
    // console.log(objNumbers[1])

    // let asd = {atribute:'valor'}
    // console.log(asd)


    function multiplesParam(){
    console.log(arguments)

    }

    multiplesParam('x','y','z','w')
})