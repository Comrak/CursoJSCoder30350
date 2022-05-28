let arrayNomb= ['Martin','Federico','Carolina']
let arrayOBJ = []
arrayNomb.forEach((x,y,z)=>{
    arrayOBJ.push({nombre:x,indiceOcupa:y,vieneDe:z})
})


console.table(arrayOBJ)