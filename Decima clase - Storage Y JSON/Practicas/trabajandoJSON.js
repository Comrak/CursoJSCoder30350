function reqData(){
    fetch("/pokemon.json/pokedex.json")
    .then(res => res.json())
    .then(data => anadir(data))
    .catch((error)=>{
        console.error(error)
    })
}

reqData()

function anadir(x){
    console.log(x)
    x.forEach((elemento)=>{
        //console.log(elemento)
        let pokeElemento = document.createElement('div')
        pokeElemento.innerHTML = `<h1> el pokemon con id: ${elemento.id}</h1><h2>se llama: ${elemento.name.english}</h2>`
        document.body.append(pokeElemento)
    })
}
