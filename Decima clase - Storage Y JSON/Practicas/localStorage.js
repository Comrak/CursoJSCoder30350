let stringVar = 'Hola LocalStorage'
let boolVar = true
let numbVar = 40

//seteo las variables en el local storage 
localStorage.setItem('saludo',stringVar)
localStorage.setItem('estoy en el localStorage',boolVar)
localStorage.setItem('unNumero',numbVar)

//obtengo las variables
console.log(localStorage.getItem('saludo'))
console.log(localStorage.getItem('estoy en el localStora'))
console.log(localStorage.getItem('unNumero'))

sessionStorage.setItem('asdasd','asdasdasd')