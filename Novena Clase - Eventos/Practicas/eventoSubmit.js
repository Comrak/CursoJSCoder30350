let form = document.getElementById('formulario')
let nombre = document.getElementById('forin1')
let apellido = document.getElementById('forin2')
let edad = document.getElementById('forin3')

form.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    alert(`bienvenido ${nombre.value} ${apellido.value} con ${edad.value}`)
})