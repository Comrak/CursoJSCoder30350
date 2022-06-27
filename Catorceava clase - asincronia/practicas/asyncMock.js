const BBDD = [
    {id:1,saborHelado:'Chocolate blanco',stock:'20',Precio: 300},
    {id:2,saborHelado:'Dulce de leche',stock:'5',Precio: 250},
    {id:3,saborHelado:'Crema americana',stock:'17',Precio: 150},
    {id:4,saborHelado:'Menta granizada',stock:'0',Precio: 180}
]


const buscarHelado = () =>{
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            res(BBDD)
        },3000)
    })
}

let prods = []

const render = (prods)=>{
    prods.forEach(element => {
        if (element.stock >0){

            let etiqueta = document.createElement('div')
            etiqueta.innerHTML = `<label>tenemos de: ${element.saborHelado} y cuesta: ${element.Precio} $</label>`
            document.body.append(etiqueta)
        }
    });
}

buscarHelado()
    .then((res)=>{
        render(res)
    })