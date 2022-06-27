export const inicioLogin = (e,usuarios,elementoDOM) =>{
    e.preventDefault()
    let user = usuarios.find((usuario)=>{
        return (usuario.login).includes(elementoDOM[0].value)
    })

    if(user == undefined){
        alert('usuario no registrado')
    }else{
        if(user.validar(elementoDOM[0].value,elementoDOM[1].value)){
            alert('bienvenido')
        }else{
            alert('usuario o contrasena incorrecta')
        }
    }
}