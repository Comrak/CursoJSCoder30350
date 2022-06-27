let boton1 = document.getElementById('btn1')
let boton2 = document.getElementById('btn2')
let boton3 = document.getElementById('btn3')

let evento = 'click'

boton1.addEventListener(evento,()=>{alert('has clickeado el boton')})
const crearBoton = ()=>{
    let nuevoBoton = document.createElement('div')
    nuevoBoton.innerHTML = '<button>soy un boton creado por otro boton</button>'
    document.getElementById('divBotones').append(nuevoBoton)
} 
boton1.addEventListener('click',()=>{crearBoton()})
const alerta = (x) => {alert(x)}
boton1.addEventListener('click',()=>{alerta('hola')})

boton2.onclick = ()=>{ alerta('Hola Caro como estas ???')}
console.log(boton2)
boton2.onclick = ()=>{console.log('hola a todos')}


