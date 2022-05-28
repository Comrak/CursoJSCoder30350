const automovil = {
    motor: 'V8',
    color: 'Rojo',
    cantRuedas: 4,
    tieneRepuesto: true,
    garantia: ''
}

// console.log('motor' in automovil)
// console.log('peso' in automovil)

for(let atributo in automovil){
    console.log(`el objeto automovil tiene la propieda ${atributo} y su valor es de : ${automovil[atributo]}`)
}