const BASEDEHELADOS = [
    {sabor:'dulce de leche granizado', precio:300,stock:10},
    {sabor:'chocolate blanco', precio:450,stock:5},
    {sabor:'menta granizada', precio:300,stock:0},
    {sabor:'vainilla', precio:200,stock:10},
]

const buscarSabores = () =>{
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            resolved(BASEDEHELADOS)
        },3000)
    })
}

let helados = []

const llenarArray = (heladosPromesa) =>{
    heladosPromesa.forEach(helado => {
        console.log(helado)
        helados.push(helado)
    });
    console.log(helados)
}

buscarSabores()
    .then((res)=>{
        llenarArray(res)
    })

console.log(helados)