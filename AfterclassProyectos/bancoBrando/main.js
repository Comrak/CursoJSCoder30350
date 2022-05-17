document.addEventListener('DOMContentLoaded', function() {
    //declaro variables
    let usuario = 'Jose'
    let password = 123456789
    let totalCuenta = 0
    let accion 
    let variableDeLoop = true
    //declaracion de funciones
    function ingresarFondos(ingreso){
        if(ingreso > 0){
            totalCuenta += ingreso
            alert(`ingresaste ${ingreso} el total de tu cuenta es de ${totalCuenta}`)
        }else{
            alert('no puedes ingresar fondos menores a 0')
        }
    }
    function retirarFondos(egreso){
        if(egreso > 0 && egreso<totalCuenta){
            totalCuenta -= egreso
            alert(`retiraste ${egreso} te quedan ${totalCuenta} en tu cuenta`)
        }else if(egreso < 0){
            alert('no puedes retirar fondos menores a 0')
        }else{
            alert('no tienes fondos para hacer este retiro')
        }
    }
    function validarUserYPass(user,pass){
        if(user== usuario && pass == password){
            return true
        }else{
            return false
        }
    }

    for(let i=1; i<=3; i++){
        let user = prompt('ingrese su usuario: ')
        let pass = prompt('ingrese su contraseña: ')
        let validacion = validarUserYPass(user,pass)
        if(validacion){
            alert('Bienvenidos a su banco')
            while(variableDeLoop){
                accion = prompt('escriba "Ver" para ver su cuenta,\n"Ingresar" para ingresar fondos a su cuenta, \n"Retirar" para retirar fondos a su cuenta o\n"Salir" para terminar sus operaciones')
                if(accion == 'Ver'){
                    alert('su saldo total es de: ' + totalCuenta)
                }else if(accion == 'Ingresar'){
                    let ingreso = parseInt(prompt('ingrese el monto que desea agregar a su cuenta: '))
                    ingresarFondos(ingreso)
                }else if(accion == 'Retirar'){
                    let retiro = parseInt(prompt('ingrese el monto que desea retirar de su cuenta: '))
                    retirarFondos(retiro)
                }else if(accion == 'Salir'){
                    alert('gracias por usar BancoBrando')
                    variableDeLoop = false
                }else{
                    alert('no entendi la orden quieres intentarlo otra vez')
                }
            }
            break
        }else{
            alert('contraseña incorrecta le quedan ' + (3-i) + ' intentos')
        }
    }
 }, false);

