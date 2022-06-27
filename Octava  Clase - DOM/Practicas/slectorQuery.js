let titulo = document.querySelector('#subTitulo')
console.log(titulo.innerText)
let titulo2 = document.querySelector('.titulos')
console.log(titulo2.innerText)
let lista = document.querySelector('.nombres')
console.log(lista)
let listas = document.querySelectorAll('.nombres')
console.log(listas)
for(const nombre of listas){
    document.write(nombre.innerText + '<br>') 
}
let checklistSex = document.querySelector('.selector:checked')
console.log(checklistSex)

