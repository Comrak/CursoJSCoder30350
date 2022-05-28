/*
filtro es un metodo de orden superior que de los array que toma una funcion como parametro
recorre cada elemento del array aplica esa funcion, y devuelve el un nuevo array con todos
los elementos que cumplan con esa funcion 
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

let encontrado = personasAEncontrar.filter((x)=> x.includes('o'))
console.log(encontrado)