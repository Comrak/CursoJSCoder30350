function Persona(nombre,edad,profesion){
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
}

const personaUno = new Persona('Jose',35,'developer')
console.log(personaUno)

function Animal(especie,patas,pelaje){
    this.especie = especie
    this.patas = patas
    this.pelaje = pelaje
}

const skippy = new Animal('perritu',4,'marron')
console.log(skippy)

function Enemigo(objetoEnemigo){
    this.vida = objetoEnemigo.vida
    this.especie = objetoEnemigo.especie
    this.ataqueEspecial = objetoEnemigo.ataqueNormal
}

const chogath = new Enemigo({vida:300,especie:'Ogro mago', ataqueNormal:'garrotazo'})
console.log(chogath)