let edad 

edad = prompt('ingrese su edad')


if(edad >= 18){
    alert('eres menor de edad')
}else if(edad < 40){
    alert('eres un adulto joven')
}else if(edad < 60){
    alert('eres un adulto')
}else if(edad > 60){
    alert('saludos caballero')
}else{
    alert('debes agregar una edad validad')
}