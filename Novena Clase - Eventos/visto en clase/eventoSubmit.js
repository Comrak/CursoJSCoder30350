document.addEventListener('DOMContentLoaded',()=>{
    let form = document.getElementById('formulario')
    let nombre = document.getElementById('nombre1')
    let apellido = document.getElementById('apellido1')
    let edad = document.getElementById('edad1')
    
    
    form.addEventListener('submit',(x)=>{
        x.preventDefault()
        console.log(x)
        console.log(nombre.value,apellido.value,edad.value)
        if(nombre.value === '' ||nombre.value === null||nombre.value === 'undefined' ){
            alert('el campo nombre no puede estar vacio')
        }else{
            if(apellido.value === '' ||apellido.value === null||apellido.value === 'undefined' ){
                alert('el campo apellido no puede estar vacio')
            }else{
                alert('tus datos fueron enviados correctamente')
            }
        }
    })
    
    nombre.addEventListener('keypress',(evento)=>{
        let tecla = evento.key
        console.log(tecla)
        console.log(evento)
    })
    alert('Ya se cargo el DOM')
})

alert('no se ha cargado el DOM ')