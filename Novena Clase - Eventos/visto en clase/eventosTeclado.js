let inputNombre = document.getElementById('nombre')
let inputApellido = document.getElementById('apellido')
let inputEdad = document.getElementById('edad')

inputNombre.addEventListener('keypress',(evento)=>{
    let tecla = evento.key
    console.log(tecla)
    // if(tecla === 'j'){
    //     alert('queria escribir jose o juan ???')
    // }
    console.log(inputNombre.value)
    console.log(evento)
})

inputApellido.addEventListener('change',()=>{
    console.log(`yo solo me registro cuando hay un cambio ${inputApellido.value}`)
})

document.body.addEventListener('change',(e)=>{
    console.log(e.key)
    if(e.key === 'w'){
        alert('caminaste hacia arriba')
    }
})

inputEdad.addEventListener('input',()=>{
    console.log('yo soy el evento input')
})