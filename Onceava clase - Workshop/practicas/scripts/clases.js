export class User{
    constructor(id,login,pass){
        this.id=id
        this.login=login
        this.pass=pass
    }

    validar = (login,pass) =>{
        return (login===this.login && pass === this.pass)
    }
}

export class Animal{
    constructor(nombre,especie,edad,familia){
        this.nombre = nombre
        this.especie = especie
        this.edad = edad
        this.familia = familia
    }
}