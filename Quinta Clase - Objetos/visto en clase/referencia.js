let X = {nombre:'Jose', edad:35}
let Y = X = B = W = Q

// console.log(X,Y)

// Y.edad = 999

// console.table(X)
// console.table(Y)

let C = {...X}
console.table(X)
console.table(C)
X.nombre = 'asdasd'
console.table(X)
console.table(C)
