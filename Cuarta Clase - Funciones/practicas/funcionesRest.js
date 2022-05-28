//solo en EC6

// function sumaInfinita(...parametros) {
//   return parametros.reduce((anterior, actual) => {
//     return anterior + actual;
//   });
// }

// console.log(sumaInfinita(1, 3, 5, 6, 7, 8, 90, 1000, 2000, 300000));

// function union(...palabras) {
//   return palabras.join(" ");
// }

// let variable = union(
//   "hola",
//   "como",
//   "estan",
//   "ustedes",
//   "?",
//   "asdasdasd",
//   "asdasdasdas",
//   "zxczxczxczxczxc"
// );

// console.log(variable);

// //solo en EC5

// function muchosArgs() {
//   console.log(arguments);
// }

// muchosArgs(1, 2, 3, 4, 6, true, "hola mundo", 123);

function saludandoAndo() {
  for (var i = 0; i < arguments.length; ++i) {
    console.log("hola " + arguments[i]);
  }
}

saludandoAndo("jose", "manuel", "eduardo", "gilberto");

