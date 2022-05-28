//metodo replace 
//es un metodo de la clase string que sirve para reemplazar un caracter con otro 
let unaVocal = 'La azafata Ana bajaba cada mañana a la mar salada para lavar la falda anaranjada'
console.log(unaVocal.replace('a','o'))//solo reemplazara la primera coincidencia
console.log(unaVocal.replaceAll('a','o'))//reemplazara todas las coincidencias
//tambien se puede usar para grupos de caracteres 
console.log('Hola mundo'.replace('Hola', 'Adios'))
//metodo trim quita los espacios al principio y al final de un nombre
let nombreEspacio = '                Jose Nardulli                   '
console.log(nombreEspacio.trim())
console.log(nombreEspacio.trimEnd())
console.log(nombreEspacio.trimStart())
//toString nos permite transformar numero y listas a cadenas 
let numero = 45
console.log(numero + 5)
console.log(numero.toString() + 5)
let array = ['esto','es','una','lista','de','strings']
console.log(array.toString())
//dato curioso 
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase()); // por que esto da banana ???