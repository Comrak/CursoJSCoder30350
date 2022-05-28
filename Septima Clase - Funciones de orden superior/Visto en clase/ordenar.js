let arrayNumb = [1000,23,45,2,3,50000,0.5]

arrayNumb.sort((elex,eley)=>eley - elex)
console.log(arrayNumb)

let animal = ['perro','gato','zarieguya','perezozo','avestruz','burro']
console.log(animal)
animal.sort((x,y)=>{
    if(x>y){
        return 1
    }else if (x<y){
        return -1
    }else{
        return 0
    }
})
console.log(animal)