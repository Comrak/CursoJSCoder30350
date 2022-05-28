function mensaje(msg) {
  console.log(msg);
  console.log(arguments); //metodo interno que regresa parametros
}

mensaje("hi", 10, 3, 4, 5, 6, 7, 78);

function muchosParametros(x1, x2, x3, x5, x4) {
  console.log("tengo muchos parametros");
}

console.log(muchosParametros.length);
