let MKChar = [
    'Sub-zero',
    'Scorpion',
    'Shao Kahn',
    'Kabal',
    'Jhonny Cage',
    'Sonia',
    'Shevaa',
    'Kitana'
]

let divDestino = document.getElementById('roosterMK')
let nuevoUL = document.createElement('ul')
nuevoUL.id = 'destinofinal'
divDestino.append(nuevoUL)
let destinoFinal = document.getElementById('destinofinal')
for(peleador of MKChar){
    let nuevali = document.createElement('li')
    nuevali.innerHTML = `<p style="color:purple">${peleador}</p>`
    nuevoUL.append(nuevali)
}