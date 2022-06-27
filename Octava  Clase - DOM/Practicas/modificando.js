let losNombres = document.getElementsByClassName('nombres')
for(const nombre of losNombres){
    if((nombre.innerText).includes('J')){
        nombre.innerText='Maria'
    }
}
let lista1 = document.getElementById('item1')
console.log(lista1.className)
//lista1.innerHTML = '<b style="color:red">Soy el primer elemento<b/>'
lista1.className='otro__li__especial'