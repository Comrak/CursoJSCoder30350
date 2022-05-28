/*
some es un metodo de orden superior que de los array que toma una funcion como parametro
recorre cada elemento del array aplica esa funcion, y devuelve true o false si algun elemento
del array cumple con esta funcion
*/

let personasAEncontrar = [
    'Juan',
    'Sofia',
    'Carlos',
    'Augusto',
    'Maria',
    'Crisiana',
    'Veronica'
]

let encontrado = personasAEncontrar.some((x)=> x.includes('o'))
console.log(encontrado)
let noEncontrado = personasAEncontrar.some((x)=> x.includes('z'))
console.log(noEncontrado)