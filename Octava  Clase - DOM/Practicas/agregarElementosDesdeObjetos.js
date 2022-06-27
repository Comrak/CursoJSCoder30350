class Automovil{
    constructor(nombre,marca,precio,imagen){
        this.nombre=nombre
        this.marca=marca
        this.precio=precio
        this.imagen=imagen
    }

    regresarLista = () => `<li>el ${this.nombre} es de la casa ${this.marca} <br> cuesta unos: ${this.precio} <br> <img src="${this.imagen}" alt="${this.nombre}" height="200px" width="200px"></li>`
}

const listaAutos = [
    new Automovil('500','fiat',5000000,'https://cdn.motor1.com/images/mgl/1b64w/s1/lanzamiento-fiat-500-y-500-c.jpg'),
    new Automovil('corolla','toyota',7000000,'http://www.motoresapleno.com.ar/wp-content/uploads/2014/02/Toyota-Corolla-XEi-AT-Pack-1.jpg'),
    new Automovil('Mustang','ford',8000000,'https://cdn.motor1.com/images/mgl/OXBKB/s1/4x3/en-el-garage-de-autoblog-ford-mustang-gt-2020.webp'),
    new Automovil('Mini Cooper','BMW',5000000,'https://www.megautos.com/wp-content/uploads/2019/03/mini-cooper-s-3-puertas-delantera.jpg')
]

listaAutos.push(new Automovil('TestaRossa','Ferrari',500000000,'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Testaross_Festival_of_speed.jpg/1280px-Testaross_Festival_of_speed.jpg'))
let nuevoDiv = document.createElement('div')
nuevoDiv.innerHTML='<div><h1>Estos son los autos que tenemos disponibles</h1><br><ul id="listaAutos"></ul></div>'
document.body.append(nuevoDiv)

for(const auto of listaAutos){
    let nuevoAuto = document.createElement('li')
    nuevoAuto.innerHTML = auto.regresarLista()
    let listaAutos = document.getElementById('listaAutos')
    listaAutos.append(nuevoAuto)
}