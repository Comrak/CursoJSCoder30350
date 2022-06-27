let patron = new RegExp('^[a-zA-Z\.-_]{1,25}[@]{1}[a-zA-Z]{1,20}[\.]{1}[a-z.A-Z]{2,6}$')

let email = prompt('ingrese su direcion de correo: ')

if(email.match(patron)){
    alert('mail registrado con exito')
}else{
    alert('esto no es una direccion valida')
}