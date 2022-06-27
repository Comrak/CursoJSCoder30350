class Comida{
    constructor(nombre,cal,temp,imagen){
        this.nombre=nombre
        this.cal=cal
        this.temp=temp
        this.imagen=imagen
    }

    generarHTML = ()=>{
        return `<p> el/la ${this.nombre} tiene ${this.cal} calorias generalmente se come ${this.temp}</p><br> <img src="${this.imagen}" alt="${this.nombre}"height="400 px" width="400 px">`
    }
}

let comidas = [
    new Comida('pizza',3000000,'caliente','https://www.saborusa.com/wp-content/uploads/2019/10/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png'),
    new Comida('choripan',20000,'caliente','https://comidatipica.blog/wp-content/uploads/2020/10/choripan.jpg'),
    new Comida('helado',4500000,'frio','https://recetastips.com/wp-content/uploads/2020/05/helado-de-chocolate-6-1.jpg')
]
console.table(comidas)
let destino = document.getElementById('comida')
let contador = 0
for(comida of comidas){
    let nuevoEle = document.createElement('div')
    nuevoEle.id = `producto${contador}`
    nuevoEle.innerHTML = comida.generarHTML()
    destino.append(nuevoEle)
    contador += 1
}


let prod0 = document.querySelector('#producto0')
let clase1 = document.querySelector('.nombres4')
console.log(prod0)
console.log(clase1)