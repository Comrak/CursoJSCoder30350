let primerTitulo = document.createElement('h1')
primerTitulo.innerHTML='<h1>Soy el primer titulo</h1>'
let divDestino = document.getElementById('titulos')
divDestino.append(primerTitulo)
let otroDiv = document.createElement('div')
otroDiv.innerHTML='<p>este parrafo marca el inicio de otro titulo</p><br><h2>SOY UN SUBTITULO </h2>'
divDestino.prepend(otroDiv)
let elementoAEliminar = document.getElementById('holaID')
elementoAEliminar.remove()