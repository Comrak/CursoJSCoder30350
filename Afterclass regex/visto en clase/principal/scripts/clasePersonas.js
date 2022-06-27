export class Persona{
    constructor(nombre,edad,genero,signo){
        this.nombre=nombre
        this.edad=edad
        this.genero=genero
        this.signo=signo
    }

    saludar = () =>{
        return `hola ${this.nombre} veo que tienes ${this.edad} años`
    }
}
