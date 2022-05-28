let arrayNum = [1,3,5,8,'eduardo', 'sofia','juan']
//digamos que quiero limpiar este array y dejaro solo con numeros para esto se puede usar el metodo splice
//como no quiero perder los nombres los podria guardar en una variable
let nombres = arrayNum.splice(4,3)
console.log(arrayNum,nombres)
//splice tambien sirve para agregar elementos en un indice y empujar a los demas hacia indices mayores
arrayNum.splice(1,0,2)
arrayNum.splice(3,0,4)
arrayNum.splice(5,0,6,7)
console.table(arrayNum)
//slice regresa un porcion del array original pero no lo modifica
console.table(nombres)
let dosNombres = nombres.slice(1,3)
console.log(nombres,dosNombres)