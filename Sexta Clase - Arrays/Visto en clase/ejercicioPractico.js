class Usuarios{
    constructor(nombre,apellido,edad){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.pass
    }

    setPass(){
        let caracteresEsp = '!@#$%^&*()_-+[]{}'
        let randomCaracter = Math.floor(Math.random()*caracteresEsp.length) 
        let randomNumber = Math.floor(Math.random()*999)+1 
        this.pass = this.nombre.slice(0,3) + randomNumber + caracteresEsp[randomCaracter] + this.apellido.slice(1,4)

    }
}

let arrayUsers = [
    new Usuarios('Jose','Nardulli','35'),
    new Usuarios('Damian','Cabrio','35'),
    new Usuarios('Miguel','Villanueva','35'),
    new Usuarios('Cristian','Atencio','35'),
]
console.table(arrayUsers)

alert('ahora comenzamos a generar las contrasenas')

for(user of arrayUsers){
    user.setPass()
}

console.table(arrayUsers)