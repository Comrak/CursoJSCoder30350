let arrayOBJ =[
    {nombre: 'eduardo',profesion:'estudiante'},
    {nombre: 'juan',profesion:'tutor'},
    {nombre: 'Sheila',profesion:'estudiante'},
    {nombre: 'Jose',profesion:'Profe'}
]

for(const estudiante of arrayOBJ){
    console.log(`${estudiante.nombre} es un ${estudiante.profesion} de la comision de js 30350`)
}