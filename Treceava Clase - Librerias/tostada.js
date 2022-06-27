let boton = document.getElementById('boton')

boton.addEventListener('click',()=>{

    Toastify({
        text: "soy la tostada primaria",
        position:'right',
        gravity:'top',
        style:{
            background: 'radial-gradient(circle, rgba(63,94,251,1) 12%, rgba(252,70,107,1) 80%)'
        },
        onClick: ()=>{
            Toastify({
                text: "soy la tostada secundaria",
                position: 'center',
                gravity:'bottom',
                style:{
                    background: 'radial-gradient(circle, rgba(63,94,251,1) 12%, rgba(252,70,107,1) 80%)'
                },
                destination:'https://www.google.com'
            }).showToast();
        }
      }).showToast();
})
