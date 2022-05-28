function comer(nombre){
    console.log('yo soy una funcion en el scope global')
}

function Animal1(raza,nombre,pelo,colorPelo){
    this.raza=raza;
    this.nombre=nombre;
    this.pelo=pelo;
    this.colorPelo=colorPelo;

    this.comer = function(){
        console.log(this.nombre + ' esta comiendo yo soy un metodo')
    }
}


function Animal2(animalito,altura){
    this.raza=animalito.raza;
    this.nombre=animalito.nombre;
    this.pelo=animalito.pelo;
    this.colorPelo=animalito.colorPelo;
    this.altura=altura
}

// const firulais = new Animal('perro','firulais',true,'marron')
// const pipa = new Animal('gato','pipa',true,'blanco')

// console.log(firulais.colorPelo)
// console.log(pipa.colorPelo)
// pipa.colorPelo='negro'

// console.log(firulais.colorPelo)
// console.log(pipa.colorPelo)

// let raza = prompt()
// let nombre = prompt()
// let pero = prompt()
// let colorPelo = prompt()

// const elAnimaldeUsuario = new Animal(raza,nombre,pero,colorPelo)
// console.table(elAnimaldeUsuario)

const juanaIguana = {
    raza:'iguana',
    textura:'escamosa',
    dieta:'insectos',
    nombre:'juana'
}

// const iguana20 = new Animal2(juanaIguana,'20cm')
// console.table(iguana20)
const firulais = new Animal1('perro','firulais',true,'marron')
// console.table(firulais.comer())

comer('asdasdasd') // llamada funcion
firulais.comer() //llamada metodo 


