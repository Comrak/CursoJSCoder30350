class Pokemon{
    constructor(nombre,tipo,ataques,hp){
        this.nombre=nombre
        typeof(tipo)==='string'?(this.tipo=tipo):(this.tipoUno=tipo[0],this.tipoDos=tipo[1])
        this.ataqueUno=ataques[0]
        this.ataqueDos=ataques[1]
        this.hp=hp
    }
    darCaramelos(){
        alert(`${this.nombre} esta evolucionando`)
    }
} 

let pokemons = [
    new Pokemon('Pikachu','electrico',['impac trueno','ataque rapido'],120),
    new Pokemon('Poliwhirl',['agua','peleador'],['golpe sismico','hidro jet'],400),
    new Pokemon('Clefairy ','hada',['encantar','dormir'],230),
    new Pokemon('Gyarados',['agua','volador'],['furia dragon','intimidar'],700)
]

//ordenemos a los pokemones deacuerdo a hp
pokemons.sort((uno,dos)=>uno.hp-dos.hp)
console.table(pokemons)
let pokemonsDeDosTipos = pokemons.filter((pokemon)=>pokemon.tipo === undefined)
console.table(pokemonsDeDosTipos)
//hay algun pokemon tipo dragon
let tipoABuscar = 'volador'
if(pokemons.some((pokemon)=>pokemon.tipo === tipoABuscar||pokemon.tipoUno===tipoABuscar||pokemon.tipoDos===tipoABuscar)){
    console.log('si hay ' + tipoABuscar)
}else{
    console.log('nope no hay ' + tipoABuscar)
}
pokemons.forEach((pokemon)=>pokemon.darCaramelos())
