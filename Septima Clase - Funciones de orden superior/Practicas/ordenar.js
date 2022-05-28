/*
sort es un metodo de la clase array que recibo como parametro una funcion comparadora como callback
este callback a su vez recibe dos parametros con los que realizara una comparacion y ordenara el 
array de acuerdo a esta comparacion
*/

let arrayNumb = [102,43,8000,1,24,5,17000,3,102,24,4,27,8000]

//digamos que quiero ordenar de mayor a menor
arrayNumb.sort((primerEle,segundoEle)=>primerEle-segundoEle)
console.log(arrayNumb)
//ahora me gustaria ordenar de menor a mayor
arrayNumb.sort((x,y)=>y-x)
console.log(arrayNumb)
arrayNumb = [102,43,8000,1,24,5,17000,3,102,24,4,27,8000]
//y si probamos con strings
let signos =['tauro','geminis','capricornio','libra']
//de mayor a menor
signos.sort((primero,segundo)=>{
  if(primero > segundo){
    return 1
  }else if(primero < segundo){
    return -1
  }else{
    return 0
  }
})
//de menor a mayor
signos.sort((primero,segundo)=>{
  if(primero < segundo){
    return 1
  }else if(primero > segundo){
    return -1
  }else{
    return 0
  }
})