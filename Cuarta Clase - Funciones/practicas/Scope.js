let globalVar = "Soy Global";

const localScope = () => {
  console.log(globalVar);
};

localScope();

const localAGlobal = () => {
  let localVar = "estoy dentro de una funcion asi que soy local";
};

//esto va a generar un error por que localVar no esta definida
//console.log(localVar);

let localVar;

const localAGlobal2 = () => {
  let localVar = "estoy dentro de una funcion asi que soy local 2";
};

//en este caso no me genera error por que la seteo como una variable global no definida
console.log(localVar);
