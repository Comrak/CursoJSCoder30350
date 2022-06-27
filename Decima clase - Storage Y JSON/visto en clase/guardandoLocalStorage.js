// if(localStorage.getItem('pref') == undefined){
//     localStorage.setItem('pref','modoOscuro,size40')
// }else{
//     console.log(localStorage.getItem('pref'))
// }

// localStorage.setItem('saludoCustom','Hola Como estad usted ???')

// let llave = 'valorNuevo'

// let valor = 'este es un nuevo valor'


// localStorage.setItem(llave,valor)
// localStorage.setItem('numero',60)
// //localStorage.setItem('obj',{nombre:'pepito',id:3})
// console.log(localStorage.getItem('saludoCustom'))

//guardando un objeto

//transformo objeto en string
let valorObj = {id:1,producto:'arroz',precio:120}
console.log(valorObj)
let valorStr = JSON.stringify(valorObj)
console.log(valorStr)
//guardo objeto en storage
localStorage.setItem('obj',valorStr)
//obtengo objeto del storage
let stringStorage= localStorage.getItem('obj')
//transformo string a objeto 
let nuevoObjeto = JSON.parse(stringStorage)
console.log(nuevoObjeto.producto)

console.log(JSON.parse('{hola: "mundo como les va"}'))
