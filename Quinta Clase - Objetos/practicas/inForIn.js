function Teclado(switched,distribuccion,tipo){
    this.switched=switched
    this.distribuccion=distribuccion
    this.tipo=tipo
}

const havit = new Teclado('cherry','qwerty','mecanico')

console.log('distribuccion' in havit)
console.log('rbg' in havit)

for(atributo in havit){
    console.log(atributo)
    console.log(havit[atributo])
    console.log(`en el objeto havit el valor de ${atributo} es: ${havit[atributo]}`)
}