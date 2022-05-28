class ElectroDomestico{
    constructor(nombre,precio,inventario){
        this.nombre=nombre
        this.precio=precio
        this.inventario=inventario
    }

    presentacion(){
        console.log(`el gran electrodomestico ${this.nombre} es todo lo que necesitara en su cocina por el increible precio de ${this.precio}`)
    }

    compra(){
        if(this.inventario > 0 ){
            alert('producto vendido $$$$')
            this.inventario -=1
        }else{
            alert('ahora no tenemos vuelva pronto')
        }
    }
}

const microOndas = new ElectroDomestico('razer 4500', 5000, 5)

console.log(microOndas)
microOndas.presentacion()
microOndas.compra()

microOndas.inventario = 0

microOndas.compra()