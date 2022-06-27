let imagen = document.getElementById('imagenRaton')
let contador = 0
let titulo = document.getElementById('titulito')

imagen.addEventListener('mousemove',()=>{
    if(contador < 5){
        console.log('esto no es un raton')
    }
    // }else{
    //     console.log(`EEEEEH cuantas veces mas vas a pasar por aca ya es la ${contador} vez`)
    // }
    
    contador += 1
})

titulo.addEventListener('mouseenter',()=>{console.log('yo soy on mouse enter')})
