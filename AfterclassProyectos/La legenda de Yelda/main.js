document.addEventListener('DOMContentLoaded', function() {
    //declaro variables
    let hp = 10
    let factorRandom
    let XP = 0
    let nivel = 1
    //defino funciones 
    const encuentro = () =>{
        factorRandom = Math.ceil(Math.random() * 5) + 1;

        if(factorRandom == 1){
            alert('te comiste un hongo venenoso pierdes 5 de vida')
            hp-=5
        }else if(factorRandom == 2){
            osoFurioso()
        }else if(factorRandom == 3){
            alert('estas en un paraje tranquilo no pasa nada')
        }else if(factorRandom == 4){
            alert('tomaste una pocion roja ganas 7 de vida')
            hp+=7
        }else if(factorRandom == 5){
            esqueletoMalo()
        }
    }

    const osoFurioso = () => {
        while(true){
            let accion = prompt('te has encontrado un oso furioso que vas a hacer: \nescribe 1 para pegar o 2 para correr')
            if(accion == 1){
                let random = Math.floor(Math.random() * 7) + 1
                hp -= random 
                if(hp < 0){
                    alert('el oso te ha hecho ' + random + ' daño y te moriste')
                    break
                }else{
                    alert('venciste al oso furioso pero te hizo ' + random + ' de daño te quedan ' + hp + ' de vida y ganaste 80 de xp')
                    XP+=80
                    break
                }
            }else if(accion == 2){
                let random = Math.floor(Math.random() * 2) + 1
                hp -= random 
                alert('huiste del oso terrible pero te hizo ' + random + 'de daño')
                break
            }else{
                alert('solo acepto 1 o 2')
            }
        }
        
    }
    const esqueletoMalo = () => {
        while(true){
            let accion = prompt('te has encontrado un esqueleto malo que vas a hacer: \nescribe 1 para pegar o 2 para correr')
            if(accion == 1){
                let random = Math.floor(Math.random() * 3) + 1
                hp -= random 
                if(hp < 0){
                    alert('el esqueleto malo te ha hecho ' + random + ' daño y te moriste')
                    break
                }else{
                    alert('venciste al esqueleto malo pero te hizo ' + random + ' de daño te quedan ' + hp + ' de vida y ganaste 30 de xp')
                    XP+=30
                    break
                }
            }else if(accion == 2){
                let random = Math.floor(Math.random() * 2) + 1
                hp -= random 
                alert('huiste del esqueleto malo pero te hizo ' + random + 'de daño')
                break
            }else{
                alert('solo acepto 1 o 2')
            }
        }
        
    }
    //inicia el juego
    while(hp > 0){
        if(XP > nivel*100){
            alert('felicidades subiste un nivel')
            hp+=10
            nivel+=1
        }
        encuentro()
        console.log(hp)
        console.log(XP)
    }

 

 }, false);

