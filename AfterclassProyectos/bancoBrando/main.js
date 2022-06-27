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
            totalCuenta += ingreso // totalCuenta = totalCuenta + ingreso
            Swal.fire(`ingresaste ${ingreso} el total de tu cuenta es de ${totalCuenta}`)
        }else{
            Swal.fire('no puedes ingresar fondos menores a 0')
        }
    }
    function retirarFondos(egreso){
        if(egreso > 0 && egreso<totalCuenta){
            totalCuenta -= egreso
            Swal.fire(`retiraste ${egreso} te quedan ${totalCuenta} en tu cuenta`)
        }else if(egreso < 0){
            Swal.fire('no puedes retirar fondos menores a 0')
        }else{
            Swal.fire('no tienes fondos para hacer este retiro')
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
            Swal.fire('Bienvenidos a su banco')
            while(variableDeLoop){
                accion = prompt('escriba "Ver" para ver su cuenta,\n"Ingresar" para ingresar fondos a su cuenta, \n"Retirar" para retirar fondos a su cuenta o\n"Salir" para terminar sus operaciones')
                if(accion == 'Ver'){
                    Swal.fire('su saldo total es de: ' + totalCuenta)
                }else if(accion == 'Ingresar'){
                    let ingreso = parseInt(prompt('ingrese el monto que desea agregar a su cuenta: '))
                    ingresarFondos(ingreso)
                }else if(accion == 'Retirar'){
                    let retiro = parseInt(prompt('ingrese el monto que desea retirar de su cuenta: '))
                    retirarFondos(retiro)
                }else if(accion == 'Salir'){
                    Swal.fire('gracias por usar BancoBrando')
                    variableDeLoop = false
                }else{
                    Swal.fire('no entendi la orden quieres intentarlo otra vez')
                }
            }
            break
        }else{
            Swal.fire('contraseña incorrecta le quedan ' + (3-i) + ' intentos')
        }
    }
 }, false);

