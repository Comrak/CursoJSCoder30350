let peleadoresCallejeros = [
    'Ryu',
    'E. Honda',
    'Ken Masters',
    'Byson',
    'Vega',
    'Saga',
    'Blanca',
    'Dalshin',
    'T. Hawnk',
    'Chun Li'
]

let nuevoDiv = document.createElement('div')
nuevoDiv.innerHTML='<h1>Esto son los peleadores Callejeros</h1><ul id="peleadores"></ul>'
document.body.append(nuevoDiv)
console.log(nuevoDiv)
let cabeceraLista = document.getElementById('peleadores')
console.log(cabeceraLista)
for(const peleador of peleadoresCallejeros){
    let li = document.createElement('li')
    li.innerHTML = '<li>'+peleador+'</li>'
    cabeceraLista.append(li)
}