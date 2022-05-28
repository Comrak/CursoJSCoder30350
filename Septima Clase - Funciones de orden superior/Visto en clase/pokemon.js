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

pokemons.sort((a,b)=>a.hp-b.hp)
console.table(pokemons)
let buscar = 'electrico'
console.log(pokemons.find((pokemon)=>pokemon.tipo===buscar))
pokemons.forEach((pokemons)=>pokemons.darCaramelos())