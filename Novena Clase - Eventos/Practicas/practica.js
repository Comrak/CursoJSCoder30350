let listaComp = []
let barritaBusqueda = document.getElementById('inputB')
let listaCompras = document.getElementById('listaCompras')

class Producto{
    constructor(id,nombre,precio){
        this.id=id
        this.nombre=nombre,
        this.precio=precio
    }

    alHTML = ()=>{
        return `<div id='producto${this.id}'>esto es un ${this.nombre} cuesta ${this.precio} quieres comprarlo <br> <button id="btnPrd${this.id}"  onclick="shopping('${this.nombre}',${this.precio})" >comprar</button></div>`
    }

}
let productos = [
    new Producto(1,'pantalon',3000),
    new Producto(2,'sweater',4000),
    new Producto(3,'camisa',5000),
]

const shopping = (nombre,precio) => {
    listaComp.push({nombreProd:nombre, precioProd:precio}) 
    document.getElementById('cantProd').innerText= `cantidad de productos: ${listaComp.length}`
} 

const sacarTotal = () =>{
    let stringBuilder= ''
    let priceTotal = 0
    for(prod of listaComp){
        stringBuilder = `${stringBuilder} ${prod.nombreProd},`
        priceTotal += prod.precioProd
    }
    console.table(`Ahora tienes en tu lista de compras:${stringBuilder} y debes ${priceTotal} ` )
}

function deleteChild(elemento) {
    var child = elemento.lastElementChild; 
    while (child) {
        elemento.removeChild(child);
        child = elemento.lastElementChild;
    }
}

const funcionBusqueda = (valor) =>{
    deleteChild(listaCompras)
    let barraBusqueda = productos.filter((x)=>(x.nombre).includes(valor))
    console.log(valor)
    console.table(barraBusqueda)
    console.log(barraBusqueda.length)
    if(barraBusqueda.length > 0){
        for(const prod of barraBusqueda){
            let nuevoDiv = document.createElement('div')
            nuevoDiv.innerHTML=prod.alHTML()
            listaCompras.append(nuevoDiv)
        }
    }
}

barritaBusqueda.addEventListener('input',function(){funcionBusqueda(barritaBusqueda.value)})
document.getElementById('comprar').addEventListener('click',function(){sacarTotal()})
//btnBusqueda.addEventListener('keypress',funcionBusqueda(barritaBusqueda.value))

