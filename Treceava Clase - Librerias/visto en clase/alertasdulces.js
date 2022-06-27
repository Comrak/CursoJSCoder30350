document.addEventListener("DOMContentLoaded", () => {

  let saludo = 'hola persona con acceso autorizado'
  let noSaludo = 'por favor retirese silenciosamente y sin ahacer escandalo'
  let boton = document.getElementById("botoncito");
  boton.addEventListener("click", () => {
    Swal.fire({
      title: "ingresa tu contrasena",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "enviar",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        // return fetch(`//api.github.com/users/${login}`)
        //   .then((response) => {
        //     if (!response.ok) {
        //       throw new Error(response.statusText);
        //     }
        //     return response.json();
        //   })
        //   .catch((error) => {
        //     Swal.showValidationMessage(`Request failed: ${error}`);
        //   });
        if(login == 'asdasd'){
            Swal.fire(saludo)
        }else{
            Swal.fire(noSaludo)
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    })
  });

});
