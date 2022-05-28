/*
find es un metodo de orden superior que de los array que toma una funcion como parametro
recorre cada elemento del array aplica esa funcion, y devuelve el primer elemento que cumpla
con esa funcion 
*/
let personaAEncontrar = [
    'Juan',
    'Sofia',
    'Carlos',
    'Augusto',
    'Maria',
    'Crisiana',
    'Veronica'
]

let encontrado = personaAEncontrar.find((x)=> x.includes('J'))
console.log(encontrado)