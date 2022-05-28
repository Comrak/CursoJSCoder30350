// function diferentes(x){
//     return (y)=>x!=y
// }

// let difiera5 = diferentes(5)

// console.log(difiera5(1))


function loguearArrays(arr,fn){
    for(const el of arr){
        fn(el)
    }
}

let array = [1,2,3,4,5]
const logueo = (x) => console.log(x + 2) 

let valornuevo = loguearArrays(array,logueo)
console.log(valornuevo)