document.addEventListener('DOMContentLoaded',()=>{
    // Toastify({
    //     text: "This is a toast with offset",
    //     offset: {
    //       x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
    //       y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
    //     },
    //     onClick: function(){alert('clikeaste la tostada')}
    //   }).showToast();
    let boton = document.getElementById('boton')
    boton.addEventListener('click',()=>{
        Toastify({
            text:'que buenas tostadas',
            duration: 3000
        }).showToast();
    })
})