document.addEventListener('DOMContentLoaded',()=>{

    let boton = document.getElementById('botoncito')
    boton.addEventListener('click',()=>{
        clearTimeout(idSTO)
    })
    console.log(boton)
    
    const idSTO = setTimeout(()=>{
        boton.disabled = true
    },10000)
})