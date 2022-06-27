document.addEventListener('DOMContentLoaded',()=>{
    //! declaracion variables globales
    let URL='https://mipropiaapirest-default-rtdb.firebaseio.com/'
    //! atrapando objetos del DOM 
    //! Variables para ver todos los datos 
    let verDatos = document.getElementById('dataAqui')
    let verDatosForm = document.getElementById('seeData')
    //! Variables para ver un dato por ID
    let verDatosID = document.getElementById('seeDataID')
    let dataIdMsg = document.getElementById('dataAquiID')
    //! Variables para agregar datos nuevos
    let agregarDatosForm = document.getElementById('AgregarDatos')
    let addDataMsg = document.getElementById('datoAdd')
    //! variables para editar datos existentes 
    let editarDatosForm = document.getElementById('editarDatos')
    let editDataMsg = document.getElementById('editarDatosMsg')
    //! variables para eliminar datos existentes
    let delDataForm = document.getElementById('delDatos')
    let delDataMSG = document.getElementById('delDataMsg')
    //! variables para agregar usuarios
    let addUserForm = document.getElementById('addUser')
    let addUserBearerMSG = document.getElementById('bearerAdd')
    //! variables para validar usuarios 
    let valUserForm = document.getElementById('valUser')
    let valuserBearer = document.getElementById('bearer')
    //! variables globales de validacion 
    let bearerToken = '' 
    //! aca van las requests 


    //? aca tenemos la request para ver los datos 
    verDatosForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        fetch(URL+`/Alumnos.json?auth=${bearerToken}`)
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)
            verDatos.innerHTML = `los datos son: ${JSON.stringify(data)}` 
        })
    })


    //? aca tenemos la request para ver un alumno por id
    verDatosID.addEventListener('submit',(e)=>{
        e.preventDefault()
        let id = e.explicitOriginalTarget[0].value
        fetch(URL+`/Alumnos/${id}.json?auth=${bearerToken}`)
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)
            dataIdMsg.innerHTML = `los datos son: ${JSON.stringify(data)}` 
        })
    })


    //? aca tenemos la request para agregar datos a alumnos
    agregarDatosForm.addEventListener('submit',(evento)=>{
        evento.preventDefault()
        console.log(evento.explicitOriginalTarget[0].value,evento.explicitOriginalTarget[1].value,evento.explicitOriginalTarget[2].value)
        fetch(URL+`/Alumnos.json?auth=${bearerToken}`,{
            method: 'POST',
            body: JSON.stringify({nombre:evento.explicitOriginalTarget[0].value,Edad:evento.explicitOriginalTarget[1].value,Calificacion:evento.explicitOriginalTarget[2].value}),
            headers: {'Content-type':'application/json'},
        })
            .then((resp)=>resp.json())
            .then((data)=>{
                console.log(data)
                addDataMsg.innerHTML = `el id de los datos es: ${data.name}` 
            })
    })


    //? aca tenemos la request para editar los datos 
    editarDatosForm.addEventListener('submit',(evento)=>{
        evento.preventDefault()
        console.log(evento.explicitOriginalTarget[0].value,evento.explicitOriginalTarget[1].value,evento.explicitOriginalTarget[2].value)
        let id = evento.explicitOriginalTarget[0].value
        fetch(URL+`/Alumnos/${id}.json?auth=${bearerToken}`,{
            method: 'PATCH',
            body: JSON.stringify({nombre:evento.explicitOriginalTarget[1].value,Edad:evento.explicitOriginalTarget[2].value,Calificacion:evento.explicitOriginalTarget[3].value}),
            headers: {'Content-type':'application/json'},
        })
            .then((resp)=>resp.json())
            .then((data)=>{
                console.log(data)
                editDataMsg.innerHTML = `el id ${id} fue modificado exitosamente` 
            })
    })


    //? aca tenemos la request para eliminar los datos
    delDataForm.addEventListener('submit',(evento)=>{
        evento.preventDefault()
        let id = evento.explicitOriginalTarget[0].value
        fetch(URL+`/Alumnos/${id}.json?auth=${bearerToken}`,{
            method: 'DELETE',
            headers: {'Content-type':'application/json'},
        })
            .then((resp)=>resp.json())
            .then((data)=>{
                console.log(data)
                delDataMSG.innerHTML = `el id ${id} fue eliminado exitosamente` 
            })
    })


    //? aca tenemos la request para anadir nuevos usuarios 
    addUserForm.addEventListener('submit',(evento)=>{
        evento.preventDefault()
        let validationURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFzSDjHzL6LF1lgFMXFrUMM316Deowr4A'
        console.log(evento.explicitOriginalTarget[0].value,evento.explicitOriginalTarget[1].value)
        fetch(validationURL,{
            method: 'POST',
            body: JSON.stringify({email:evento.explicitOriginalTarget[0].value,password:evento.explicitOriginalTarget[1].value,returnSecureToken:true}),
            headers: {'Content-type':'application/json'},
        })
            .then((resp)=>resp.json())
            .then((data)=>{
                console.log(data)
                addUserBearerMSG.innerHTML = `el bearer token del usuario es: ${data.idToken}` 
                bearerToken = data.idToken
            })
    })


    //? aca tenemos request para validar usuarios
    valUserForm.addEventListener('submit',(evento)=>{
        evento.preventDefault()
        let validationURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCFzSDjHzL6LF1lgFMXFrUMM316Deowr4A'
        console.log(evento.explicitOriginalTarget[0].value,evento.explicitOriginalTarget[1].value)
        fetch(validationURL,{
            method: 'POST',
            body: JSON.stringify({email:evento.explicitOriginalTarget[0].value,password:evento.explicitOriginalTarget[1].value,returnSecureToken:true}),
            headers: {'Content-type':'application/json'},
        })
            .then((resp)=>resp.json())
            .then((data)=>{
                console.log(data)
                valuserBearer.innerHTML = `el bearer token del usuario es: ${data.idToken}` 
                bearerToken = data.idToken
            })
    })
})