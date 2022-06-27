localStorage.setItem('valor','estoy condenado a desaparecer')

for(let i=0;i<localStorage.length;i++){
    console.log(`la key del local storage es: ${localStorage.key(i)} \n y su valor es: ${localStorage.getItem(localStorage.key(i))}`)

}