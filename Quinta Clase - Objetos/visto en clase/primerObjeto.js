const automovil = {
    motor: 'V8',
    color: 'Rojo',
    cantRuedas: 4,
    tieneRepuesto: true,
    garantia: ''
}

const empresa = {
    nombre: 'asdasd',
    valorEnBolsa: 123123123123,
    nomina: {empleado1: 'juan', empleado2:'francisco', empleado:'eduardo'}
}
console.log(empresa.nomina.empleado2)
// console.log(automovil)
// console.table(automovil)
console.log(automovil.peso)
console.log(automovil['peso'])

automovil.peso = '5 toneladas'
console.log(automovil.peso)
console.log(automovil['peso'])

automovil.color = 'plateado brillante'
console.log(automovil.color)
console.log(automovil.garantia)

alert(automovil.tieneRepuesto)

automovil.garantia = 'no hay garantias'
console.table(automovil)
let valor = 0
automovil.cantRuedas = valor
console.table(automovil)