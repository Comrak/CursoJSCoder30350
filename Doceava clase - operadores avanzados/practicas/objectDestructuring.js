const perro = {
    nombre:'fido',
    edad:8,
    pelaje:'lanudo',
    color:'marron'
}

const {nombre,edad,pelaje,color,patas} = perro

console.log(perro.nombre)
console.log(nombre)

console.log(perro.edad)
console.log(edad)

console.log(perro.pelaje)
console.log(pelaje)

console.log(perro.color)
console.log(color)

console.log(perro.patas)
console.log(patas)

const simpsonsFamilias = {
    simpsons:{papa:'homero',mama:'marge',hijo:'bart',hija:'lisa'},
    flanders:'ned',
    millhouse:'NADIE QUIERE A MILLHOUSE'
}

//const {simpsons:{papa}} = simpsonsFamilias
const {simpsons,flanders,millhouse} = simpsonsFamilias
const {papa,mama,hijo,hija} = simpsons
console.log(papa)
console.log(flanders)
console.log(millhouse)

//alias
const auto = {
    marca:'toyota',
    modelo:'corolla',
    color:'blanco'
}

const{marca:autoMarca,modelo:autoModelo,color:autoColor} = auto
console.log(autoMarca)
console.log(autoModelo)
console.log(autoColor)


const simpsonsFamilias2 = {
    simpsons2:{papa:'homero',mama:'marge',hijo:'bart',hija:'lisa'},
    flanders2:{papa:'ned',mama:'modd',hijo:'todd',hija:'rodd'},
    vanHouten2:{papa:'kirk',mama:'luan',hijo:'NADIE QUIERE A MILHOUSE'}
}

const {simpsons2,flanders2,vanHouten2} = simpsonsFamilias2
const {papa:papaS,mama:mamaS,hijo:hijoS,hija:hijaS}= simpsons2
const {papa:papaF,mama:mamaF,hijo:hijoF,hija:hijaF}= flanders2
const {papa:papaM,mama:mamaM,hijo:hijoM}= vanHouten2
console.log(papaS,mamaS,hijoS,hijaS,papaF,mamaF,hijoF,hijaF,papaM,mamaM,hijoM)

const profe = {
    nombre:'jose',
    edad:35
} 

const desestructurar= (obj)=>{
    const {nombre,edad} = obj
    console.log(nombre,edad)
}

desestructurar(profe)

const desestructurar2 = ({nombre,edad})=>{
    console.log(nombre,edad)
}
desestructurar2(profe)