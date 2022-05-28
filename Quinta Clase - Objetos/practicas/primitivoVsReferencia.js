//tipos primitivos
let x = 'hola'
let y = x
//si hacemos el primer log ambos son iguales
console.log(x,y)
//si cambiamos x, y no se vera afectado
x='adios'
console.log(x,y)
//si cambiamos y, x no se vera afectado
y='sayonara'
console.log(x,y)

//tipos de referencia
let alpha = {
    descripcion: 'en el inicio',
    numeracion: 1,
    letra: 'Ᾱ'
}

let beta = alpha
//si hacemos el primer log ambos son iguales
console.table(alpha)
console.table(beta)
// si cambio alpha beta tambien cambia
alpha.numeracion=99
console.table(alpha)
console.table(beta)
//si cambio beta alpha tambien cambia
beta.descripcion='un poco despues del inicio'
console.table(alpha)
console.table(beta)

//para copiar un tipo de dato de referencia este debe ser 'clonado'
let omega = {...alpha}
//si hacemos el primer log ambos son iguales
console.table(alpha)
console.table(omega)
// si cambio alpha, omega no se vera afectado
alpha.numeracion=2000
console.table(alpha)
console.table(omega)
//si cambio omega, alpha no se vera afectado
omega.descripcion='casi al final'
console.table(alpha)
console.table(omega)
