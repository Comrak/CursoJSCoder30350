import * as personas from './clasePersonas.js'
import * as funciones from './utils.js'

const alumno = new personas.Persona('Jose',15,'M','Tauro')
let etiqueta = document.getElementById('labelEdad')
const alumno2 = ''

funciones.revisarEdad(alumno,etiqueta)