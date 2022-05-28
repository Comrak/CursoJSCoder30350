let saludo = 'hola mundo'

saludo = saludo.replace('hola','adios')

console.log(saludo)

let frase = 'este es el excelente pepe el pelele del retrete'.replaceAll('e','o')
console.log(frase)

let palabraEspaciada = '        Jo       se            '
console.log(palabraEspaciada.trim())
console.log(palabraEspaciada.trimEnd())
console.log(palabraEspaciada.trimStart())


let nombre = 'jose'
letraAcambiar = nombre[0]
console.log(letraAcambiar.toUpperCase())
nombre[0]= letraAcambiar.toUpperCase()
console.log(nombre)