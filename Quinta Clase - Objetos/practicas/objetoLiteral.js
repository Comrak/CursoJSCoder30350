//creando el objeto literal
const miPrimerObjeto = {
    nombre: 'jose',
    profesion: 'developer',
    edad: 35
}

//formas de acceder al objeto
//todo el objeto como un conjunto
console.log(miPrimerObjeto)

//un atributo especifico
console.log(miPrimerObjeto.nombre)
//otra forma de obtener un atributo de un objeto
console.log(miPrimerObjeto['nombre'])

//cambiando el valor de un atributo
miPrimerObjeto.profesion = 'profesor'
miPrimerObjeto['edad'] =40
console.log(miPrimerObjeto)