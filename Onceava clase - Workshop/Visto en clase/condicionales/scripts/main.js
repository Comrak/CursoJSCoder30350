import * as datos from './modeloDatos.js'

document.addEventListener('DOMContentLoaded', function(){      
 
    let div = document.getElementById('div1')
    let botoncito = document.getElementById('formsubmit')
    localStorage.setItem('boton',div.innerHTML)
    let nuevoelemento=document.createElement('div')
    nuevoelemento.innerHTML=(localStorage.getItem('boton')).trim()
    document.body.append(nuevoelemento)
    botoncito.addEventListener('click',(e)=>{
        e.preventDefault()
        let usuarioEncontrado = (datos.listaUsers).find((elemento)=>(elemento.user).includes(document.getElementById('formIF')[0].value))
        if(usuarioEncontrado != undefined){
            let validacion = usuarioEncontrado.validar(document.getElementById('formIF')[0].value,document.getElementById('formIF')[1].value)
            if(validacion){
                alert('bienvenido')
                localStorage.setItem('usuariosRegistrados',JSON.stringify(usuarioEncontrado))
            }else{
                alert('usuario y contrasena incorrectos')
            }
        }else{
            alert('no te encontre en mi base de usuarios')
        }
    })
  
})





