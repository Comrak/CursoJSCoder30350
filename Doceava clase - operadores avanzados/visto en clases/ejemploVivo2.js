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
        valNombre.innerHTML= ((formulario[0].value||'vacio')==='vacio')?'el nombre no puede estar vacio':''
        valApell.innerHTML= ((formulario[1].value||'vacio')==='vacio')?'el apellido no puede estar vacio':''
        valEdad.innerHTML= ((formulario[2].value||'vacio')==='vacio')?'la edad no puede estar vacio':''
        valPass.innerHTML= ((formulario[3].value||'vacio')==='vacio')?'el password no puede estar vacio':''

        let validar = (((formulario[0].value||'vacio')!=='vacio')&&
        ((formulario[1].value||'vacio')!=='vacio')&&
        ((formulario[2].value||'vacio')!=='vacio')&&
        ((formulario[3].value||'vacio')!=='vacio'))   

        validar && alert('usuario registrado')
    
    })



})