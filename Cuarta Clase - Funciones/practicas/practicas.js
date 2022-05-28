/* 
    ?sintaxis basica
*/

// function sumar2Numeros() {
//   console.log(5 + 5);
// }

// let funcionsita = sumar2Numeros();

// console.log(funcionsita);

// function segundaFuncion() {
//   return "el valor de regreso es todo este string";
// }

// segundaFuncion();

// let funcionsita2 = segundaFuncion();

// console.log(segundaFuncion());

// let validar = () => {
//     let num = prompt("Bienvenido a mi programa deme un numero");

//     while (isNaN(num) || num == null || num.trim() == "") {
//       //while (isNaN(num) || num == undefined || num == null || num == "") {
//       num = prompt("Por favor solo acepto numeros");
//     }

//     return num;
// }

// let numero = validar();

// alert("el primer numero es: " + numero);

// let numero2 = validar();

// alert(`el segundo numero es ${numero2}`);

// alert(`la suma de los dos numeros es: ${parseInt(numero) + parseInt(numero2)}`);

/*
    !parametros dentro de funcion
*/

// function sumarNumeros(numeroUno, numeroDos = 58, numeroTres = 100) {
//   console.log(numeroUno + numeroDos + numeroTres);
// }

// sumarNumeros(5);

// console.log(calculadora(10, 5, "suma"));

// function calculadora(primerNumero, segundoNumero, operacion) {
//   if (operacion == "suma") {
//     return suma(primerNumero, segundoNumero);
//   }
//   // switch (operacion) {
//   //     case "+":
//   //         return primerNumero + segundoNumero;
//   //         break;
//   //     case "-":
//   //         return primerNumero - segundoNumero;
//   //         break;
//   //     case "*":
//   //         return primerNumero * segundoNumero;
//   //         break;
//   //     case "/":
//   //         return primerNumero / segundoNumero;
//   //         break;
//   //     default:
//   //         return 0;
//   //         break;
//   // }
// }

// function suma(x, y) {
//   return x + y;
// }
// function resta(x, y) {
//   return x - y;
// }
// function mult(x, y) {
//   return x * y;
// }
// function div(x, y) {
//   return x / y;
// }

/*
 *AMBITO o scope
 */

// function sal() {
//   var localVar = "hola soy global";
// }

// console.log(localVar);
/*
TODO:
*/

// let concat = function (x, y) {
//   alert(x + " " + y);
// };

// concat("hola", "a todos");

// let numero = prompt()

// const suma = (num1, num2) => num1 + num2;

// alert(suma(8, 5));

// function suma(x, y) {
//   return x + y;
// }

// let variable = suma(4, 5, 2, 13, 12, 54, 12, 18);

// console.log(suma(4, 5, 2, 13, 12, 54, 12, 18));

// function hola()
// {
//   return 'hola mundo'
// }

// let verda = hola();// let verda

// console.log(verda)
// alert(verda)

// if (verda) {
//   alert("No soy un numero... !VIIIIVA!");
// }

let x = 0

while(x < 10){ //repetir codigo
  let nombre = prompt('dame nombre')
  alert('hola ' + nombre )
}

function saludo(){ //reutilizar
  let nombre = prompt('dame nombre')
  alert('hola ' + nombre )
}