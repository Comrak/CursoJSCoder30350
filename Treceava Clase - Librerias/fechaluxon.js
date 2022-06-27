const DateTime = luxon.DateTime

let fecha3 = '30/05/2020'.split('/') //= ['22','05','2020']
console.log(Number(fecha3[0]))
let fecha = DateTime.now()

let fecha2 = DateTime.fromObject(
    {day:Number(fecha3[0]),month:Number(fecha3[1]),year: Number(fecha3[2])}
)


console.log(fecha2.toString())