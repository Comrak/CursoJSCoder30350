let arrayVehiculos =[
    'fiat',
    'toyota',
    'VW',
    'peugot',
    'ferrari',
    'fifi'
]
let encontrar = 'fifi'
let encontrado = arrayVehiculos.find((x)=>x.includes(encontrar))
console.log(encontrado)