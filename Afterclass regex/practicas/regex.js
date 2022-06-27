//expresion regular
let re = new RegExp('^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,3}$');
//string a comparar
let palabra = prompt('ingrese su mail')

if(palabra.match(re)){
    alert('mail registrado')
}else{
    alert('mail invalido')
}
