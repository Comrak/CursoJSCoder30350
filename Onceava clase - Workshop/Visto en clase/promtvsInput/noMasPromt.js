// let nombre = prompt('dame nombre')
document.addEventListener('DOMContentLoaded', function(){ 
    let nombre = document.getElementById('nombre')
    nombre.addEventListener('keypress',()=>{
        let nuevoElemento = document.createElement('H1')
        nuevoElemento.innerHTML = nombre.value
        document.body.append(nuevoElemento)
    })
    
})
