/* 
 Map es un metodo de la clase array que tiene una funcion similar al metodo forEach con un par de diferencias
1: este metodo tiene un return
2: este return es una nueva lista independiente del array original
*/

let users = [
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: '34'
    },
    {
        nombre: 'Sofia',
        apellido: 'Paez',
        edad: '34'
    },
    {
        nombre: 'Eduardo',
        apellido: 'Queirolo',
        edad: '34'
    },
    {
        nombre: 'Juanita',
        apellido: 'Menganita',
        edad: '34'
    }
]

let usersPass= users.map((x)=>{
    let pass=x.nombre.slice(0,3)+x.edad+x.apellido.slice(1,2)
    return pass
})
console.table(users)
console.table(usersPass)