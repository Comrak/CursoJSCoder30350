const promesa = (res) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(res){
                resolve('promesa cumplida')
            }else{
                reject('promesa rechazada por falta de autorizacion codigo de error 400')
            }
        },2000)
    })
}

promesa(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  }).finally(()=>{
    console.log('siempre me ejecuto')
  });
    


