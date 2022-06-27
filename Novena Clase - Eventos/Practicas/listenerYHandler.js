let boton1 = document.getElementById('btn1')
let boton2 = document.getElementById('btn2')
let boton3 = document.getElementById('btn3')

const alerta = (x) => alert(x)

boton1.addEventListener("click",function(){alerta('hola')})
boton1.addEventListener('click',()=>{console.log('asdasd')})
boton1.addEventListener('click',()=>{console.log('Hola')})
boton1.addEventListener('click',()=>{alert('Hola')})
boton1.addEventListener('click',()=>{
    let nuevoElemento = document.createElement('button')
    nuevoElemento.innerHTML = 'Soy un boton que crea botones'
    document.getElementById('botones').append(nuevoElemento)
})

boton2.onclick = ()=>{alert('este es un atributo del elemento html')}
boton2.onclick = ()=>{console.log('o tengo un valor o tengo otro ')}
console.log(boton1,boton2,boton3)