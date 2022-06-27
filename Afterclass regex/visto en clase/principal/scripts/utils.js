export function revisarEdad(objetoPersona,elementoLabel){
    console.log(typeof(objetoPersona.edad),typeof(elementoLabel.innerHTML))
    if(objetoPersona.edad > 0){
        if(objetoPersona.edad >= 18){
            elementoLabel.innerText = 'eres mayor de edad'
        }else{
            elementoLabel.innerText = 'no eres mayor de edad'
        }
    }else{
        alert('error')
        return 'Error'
    }
    
}