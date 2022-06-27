document.addEventListener('DOMContentLoaded',()=>{
    let formulario = document.getElementById('ejemplillo')
    let valNombre = document.getElementById('nameVal')
    let valApell = document.getElementById('LnameVal')
    let valEdad = document.getElementById('ageVal')
    let valPass = document.getElementById('passVal')
    let validaciones = {nombVal:false,apellVal:false,edadVal:false,passVal:false}
    formulario.addEventListener('submit',(e)=>{
        e.preventDefault()
        console.log(formulario)
        //validamos aqui con if normal
        if(formulario[0].value===''){
            valNombre.innerHTML='el nombre no puede ir vacio'
            validaciones.nombVal=false
        }else{
            valNombre.innerHTML=''
            validaciones.nombVal=true
        } 
        
        if(formulario[1].value===''){
            valApell.innerHTML='el apellido no puede ir vacio'
            validaciones.apellVal=false
        }else{
            valApell.innerHTML=''
            validaciones.apellVal=true
        }

        if(formulario[2].value<18){
            valEdad.innerHTML='debes ser mayor de edad'
            validaciones.edadVal=false
        }else{
            valEdad.innerHTML=''
            validaciones.edadVal=true
        }

        if(formulario[3].value===''){
            valPass.innerHTML='necesitas una contraseña'
            validaciones.passVal=false
        }else{
            valPass.innerHTML=''
            validaciones.passVal=true
        }

        if(validaciones.nombVal&&validaciones.apellVal&&validaciones.edadVal&&validaciones.passVal){
            alert('usuario registrado')
        }

    })



})