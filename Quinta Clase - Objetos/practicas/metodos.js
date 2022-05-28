function Automovil(marca,puertas,precio){
    this.marca = marca;
    this.puertas = puertas;
    this.precio = precio;

    this.rumRum = function(){
        alert(this.marca + ' esta arrancando')
    };
}

const audi = new Automovil('audi 3500',4,'4.000.000')
console.log(audi)
audi.rumRum()

