
document.addEventListener('DOMContentLoaded',()=>{

// operador ++ otra forma de sumar 1 a un numero

    let contador = {precio:200, cantidad:1}

    for(let i=0;i<=10;i++){
        console.log(`ahora el contador vale: ${contador}`)
        contador ++
    }

    for(let i=0;i<=10;i++){
        console.log(`ahora el contador vale: ${contador}`)
        contador --
    }

    //operador ternario 
        let queHace = document.getElementById('queHace')
        let queEs = document.getElementById('queEs')
        let queEs2 = document.getElementById('queEs2')
        let queEs3 = document.getElementById('queEs3')
        queHace.addEventListener('change',()=>{
            let queHaceValor = queHace.value
            console.log(queHaceValor)
            //un condicional de siempre
            if(queHaceValor==='maulla'){
                queEs.innerHTML='<h1 style="color:red">soy un gato</h1>'
            }else{
                queEs.innerHTML='<h1 style="color:red">soy un perro</h1>'
            }
            //operador ternario
            (queHaceValor==='maulla')?queEs2.innerHTML='<h1 style="color:red">soy un gato</h1>':queEs2.innerHTML='<h1 style="color:red">soy un perro</h1>'
            //tiene un return implicito
            let animal = (queHaceValor==='maulla')?'gato':'perro'
            queEs3.innerHTML=`<h1 style="color:red">soy un ${animal}</h1>`
        })

    //operador and 
    let check = document.getElementById('check')
    let checkCheck = document.getElementById('seChekeo')
    check.addEventListener('change',()=>{
        // console.log(check.checked)
        // check.checked && alert('he sido chequeado')
        //tambien tiene return implicito
        checkCheck.innerHTML = `el precio de tus camisas es de ${(Number(contador.precio) * Number(contador.cantidad))}`
        contador.cantidad += 1
    })
    //operador or
    let botonInexistente = document.getElementById('noExiste')
    let stringVacio = ''
    let nulidad = null
    let cero = 0
    console.log(botonInexistente||'No hay boton')
    console.log(stringVacio||'No hay string')
    console.log(nulidad||'Me siento nulo')
    console.log(cero||'el numero es 0')
    botonInexistente = document.getElementById('check')
    stringVacio = 'nope no estoy vacio'
    nulidad = {}
    cero = 10
    console.log(botonInexistente||'No hay boton')
    console.log(stringVacio||'No hay string')
    console.log(nulidad||'Me siento nulo')
    console.log(cero||'el numero es 0')

    //acceso condicional a objetos 
    let nullUser = null
    //console.log(nullUser.nombre)
    console.log(nullUser?.nombre||'user name not found')
})
