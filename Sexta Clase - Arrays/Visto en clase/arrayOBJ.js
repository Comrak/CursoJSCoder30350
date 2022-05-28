// class Hola{
//     constructor(x,y,z){
//         this.x=x
//         this.z=z
//         this.y=y
//     }
// }

// let arrayOBJ =[
//     {x:'asdasd',y:'asdads'},
//     {x:'asdasd2',y:'asdads2'},
//     new Hola('asdasd','asdasdasd','asdasdasd')
// ]

// console.table(arrayOBJ)

// arrayOBJ.push({atributo1:'asdasd3',atributo2:'asdads3'})
// console.table(arrayOBJ)

let integrantes30350=[
    {nombre:'Jose',role:'profe'},
    {nombre:'Agustin',role:'estudiante'},
    {nombre:'Juan',role:'Tutor'},
    {nombre:'Daniel',role:'estudiante'},
    'hola'
]

for(elementos of integrantes30350){
    console.log(`${elementos.nombre} es un ${elementos.role} de la comision de JS 30350`)
    console.log(elementos)
}