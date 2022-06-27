document.addEventListener('DOMContentLoaded', function() {
    //declaro variables
    let frame = 1
    let primerTiro
    let segundoTiro
    let total = 0
    let chuza = false
    let spare = false

    const pedirTiroUno = () =>{
        do{
            if(primerTiro > 10){
                alert('es imposible tumbar mas de 10 pinos en un frame prueba de nuevo')
            }
            primerTiro = parseInt(prompt('Cuantos pinos tumbaste en tu primer tiro'))
        }while(primerTiro > 10)

        return primerTiro
    }
    const pedirTiroDos = (primerTiro) =>{
        do{
            if(primerTiro + segundoTiro > 10){
                alert('es imposible tumbar mas de 10 pinos en un frame prueba de nuevo')
            }
            segundoTiro = parseInt(prompt('Cuantos pinos tumbaste en tu segundo tiro'))
        }while(primerTiro + segundoTiro > 10)

        return segundoTiro
    }


    const sumarPuntos = ()=>{
        primerTiro = 0
        segundoTiro = 0
        if(chuza){
            chuza = false
            pedirTiros()
            total = total + 10 + primerTiro + segundoTiro
        }else if(spare){
            spare = false
            pedirTiros()
            total = total + 10 + primerTiro
        }else{
            pedirTiros()
        }
        
    }
    const pedirTiros = () => {
        primerTiro = pedirTiroUno()
        if(primerTiro == 10){
            alert('!!!!CHUZZZAAAAA!!!')
            chuza = true
        }else{
            segundoTiro = pedirTiroDos(primerTiro)
            if(primerTiro + segundoTiro == 10){
                spare = true
            }else{
                total = total + primerTiro + segundoTiro
            }   
        }
    }

    while(frame <= 10){
        sumarPuntos()
        console.log(total)
        frame += 1
    }
 }, false);

 document.addEventListener("DOMContentLoaded",function(){let a=1,d,e,b=0,f=!1,g=!1,h=()=>{do d>10&&alert("es imposible tumbar mas de 10 pinos en un frame prueba de nuevo"),d=parseInt(prompt("Cuantos pinos tumbaste en tu primer tiro"));while(d>10)return d},i=a=>{do a+e>10&&alert("es imposible tumbar mas de 10 pinos en un frame prueba de nuevo"),e=parseInt(prompt("Cuantos pinos tumbaste en tu segundo tiro"));while(a+e>10)return e},c=()=>{d=0,e=0,f?(f=!1,j(),b=b+10+d+e):g?(g=!1,j(),b=b+10+d):j()},j=()=>{10==(d=h())?(alert("!!!!CHUZZZAAAAA!!!"),f=!0):(e=i(d),d+e==10?g=!0:b=b+d+e)};for(;a<=10;)c(),console.log(b),a+=1},!1)