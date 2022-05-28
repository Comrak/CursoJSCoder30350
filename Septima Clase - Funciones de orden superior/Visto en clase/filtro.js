let arrayVehiculos =[
    'fiat',
    'toyota',
    'VW',
    'peugot',
    'ferrari',
    'fifi'
]
let encontrar = 'ferrari'
let encontrado = arrayVehiculos.filter((x)=>x!==encontrar)
console.log(encontrado)