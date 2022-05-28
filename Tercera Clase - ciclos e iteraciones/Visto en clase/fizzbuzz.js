// un programa pide numero
// si num es divisible entre 3 regresamos fizz
// si num es divisible entre 5 regresamos buzz
// si num es divisible entre 5 y 3 regresamos fizzbuzz
let num = prompt('ingrese un numero')

if((num%5==0)&&(num%3==0)){
    alert('fizzbuzz')
}else if((num%3==0)){
    alert('fizz')
}else if((num%5==0)){
    alert('buzz')
}else{
    alert('este numero no es divisible ni entre 3 ni entre 5')
}