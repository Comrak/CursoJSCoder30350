let nuevoTitulo = document.createElement('h1')
nuevoTitulo.innerHTML='<p>Soy un titulo agregado desde el HTML</p>'
let divDeTitulos = document.getElementById('otroDiv')
divDeTitulos.prepend(nuevoTitulo)
document.body.append(nuevoTitulo)
divDeTitulos.remove()
