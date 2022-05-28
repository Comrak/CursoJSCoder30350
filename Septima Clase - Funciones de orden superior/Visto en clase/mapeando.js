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


let passDeUsuarios = users.map((usuario)=>{
    let pass= usuario.nombre+usuario.edad+ usuario.apellido
    return pass
})

console.table(users)
console.log(passDeUsuarios)

users.forEach((usuario,indice,vector)=>{
    usuario.pass = passDeUsuarios[indice]
    console.log(vector)
})

console.table(users)