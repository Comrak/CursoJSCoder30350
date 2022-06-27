//?? sintaxis basica
new Promise((resolve, reject) => {});
//?una promesa siemrpe retorna pending hasta que se resuelva
const promesaPendiente = () => {
  return new Promise((resolve, reject) => {});
};

console.log(promesaPendiente());

//? forzemos un cambio de estado
const promesaForzada = (res) => {
  return new Promise((resolve, reject) => {
    if (res) {
      resolve("se cumplio la promesa");
    } else {
      reject("rechazado");
    }
  });
};

console.log(promesaForzada(true));
console.log(promesaForzada(false));

//?tambien podemos trabajar con un timeout
const promesaForzadaTiempo = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (res) {
        resolve("se cumplio la promesa");
      } else {
        reject("rechazado");
      }
    }, 3000);
  });
};
console.log(promesaForzadaTiempo(true));
console.log(promesaForzadaTiempo(false));
console.log("se habra cumplido la promesa ?");

//?podemos manejar esto mejor usando un them para manejar los resultados o un o un catch para manejar los errores
//?y el finally es un codigo que siempre se ejecutara 
promesaForzadaTiempo(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  }).finally(()=>{
    console.log('siempre me ejecuto')
  });
promesaForzadaTiempo(false)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  }).finally(()=>{
    console.log('siempre me ejecuto')
  });

