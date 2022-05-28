function nombre(){
        return function(){
        console.log('asdasd')
    }
}

let nombreUno = nombre()
console.log(nombreUno)
nombreUno = nombre()()
console.log(nombreUno)