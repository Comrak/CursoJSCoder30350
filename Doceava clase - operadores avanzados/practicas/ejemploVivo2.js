document.addEventListener('DOMContentLoaded',()=>{
    let formulario = document.getElementById('ejemplillo')
    let valNombre = document.getElementById('nameVal')
    let valApell = document.getElementById('LnameVal')
    let valEdad = document.getElementById('ageVal')
    let valPass = document.getElementById('passVal')
    let validaciones = {nombVal:false,apellVal:false,edadVal:false,passVal:false}
    formulario.addEventListener('submit',(e)=>{
        e.preventDefault()
        //validamos aqui con ternarios

        valNombre.innerHTML=((formulario[0].value||'vacio')==='vacio')?'el nombre no puede ir vacio':''
        valApell.innerHTML=((formulario[1].value||'vacio')==='vacio')?'el apellido no puede ir vacio':''
        valEdad.innerHTML=((formulario[2].value||'vacio')==='vacio')?'la edad no puede ser 0':''
        valPass.innerHTML=((formulario[3].value||'vacio')==='vacio')?'necesitas una contraseña':''

        let validaciones = ((formulario[0].value||'vacio')!=='vacio')&&
         ((formulario[1].value||'vacio')!=='vacio')&&
         ((formulario[2].value||'vacio')!=='vacio')&&
         ((formulario[3].value||'vacio')!=='vacio')

        validaciones && alert('usuario registrado')

    })



})