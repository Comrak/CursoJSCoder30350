// pokemon = prompt('ingrese nombre de pokemon:').toLowerCase() 

// fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//     .then((resp)=>resp.json())
//     .then((data)=>{
//         let titulo = document.createElement('h1')
//         titulo.innerHTML=`el nombre de mi pokemon es ${data.name}`
//         document.body.append(titulo)
//         let movimientos = data.moves  
//         let listado = ''
//         movimientos.forEach(element => {
//            listado = listado + `<li>${element.move.name}</li>`
//         });
//         console.log(listado)
//         let lista = document.createElement('ul')
//         lista.innerHTML= listado
//         document.body.append(lista)
//         //console.log(data.moves)
//     })

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     body: JSON.stringify({title:'coderhouse',body:'poketest'}),
//     headers: {'Content-type':'application/json;charset=UTF-8'},
// })
// .then((resp)=>resp.json())
// .then((data)=>{console.log(data)})

fetch('misDatos.json')
 .then((resp)=>resp.json())
 .then((data)=>{console.log(data)})