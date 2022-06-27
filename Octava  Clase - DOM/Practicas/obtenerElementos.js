//obtener elemento por nombre de etiqueta
const h3 = document.getElementsByTagName('h3')
console.log(h3[0].innerText)
let todosListas = document.getElementsByTagName('li')
console.log(todosListas.item1.innerText)
//obtener elemento por id
let subtitulo = document.getElementById('subTitulo')
console.log(subtitulo.innerText)
//obtener elemento por clase 
let titulo = document.getElementsByClassName('titulos')
console.log(titulo[0].innerText)
//recorrer nombres 
const nombres = document.getElementsByClassName('nombres')
console.log(nombres)
for(const nombre of nombres){
    console.log('hola ' + nombre.innerText + ' como estas ?')
}
const contenedores = document.getElementsByTagName('div')
console.log(contenedores)
for(const contenedor of contenedores){
    console.log(contenedor.innerHTML)
}