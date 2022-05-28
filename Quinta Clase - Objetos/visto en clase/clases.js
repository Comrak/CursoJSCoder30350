class Animal{
    constructor(raza,nombre,pelo){
        this.raza=raza;
        this.nombre=nombre;
        this.pelo=pelo
    }

    constructor(edad){
        this.edad=edad
    }

    hablar(){
        console.log(this.nombre + "hace guau guau ")
    } 

    comer(){
        console.log(this.nombre + "esta comiendo")
    }
}

const firulais = new Animal('perrito','firulais',true,17)

console.table(firulais)
firulais.hablar()