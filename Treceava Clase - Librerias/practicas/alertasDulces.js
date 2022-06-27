document.addEventListener('DOMContentLoaded',()=>{

    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })

    let boton = document.getElementById('alerta')
    boton.addEventListener('click',()=>{
        Swal.fire({
            title: 'quieres ver al gatito nyan',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si si quiero',
            denyButtonText: `no no quiero`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Submit your Github username',
                    input: 'text',
                    inputAttributes: {
                      autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Look up',
                    showLoaderOnConfirm: true,
                    preConfirm: (login) => {
                       Swal.fire(`hola ${login} como estas`)
                    },
                    allowOutsideClick: () => !Swal.isLoading()
                  })
            } else if (result.isDenied) {
                Swal.fire({
                    title: 'En serio no quieres ?',
                    text: 'Todo bien en casa',
                    icon: 'question',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            }
          })
    })
})