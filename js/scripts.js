// use camelCase for variables
//used for smaller notes, everything after the slashes is ignored
/* used for longer notes 
spaning multiple lines */

let pokemonList = [
    {
        name: 'Bulbasaur',
        entryNumber: 1,
        height: 0.7,
        types: ['Grass','Poison'],
    },
    {
        name: 'Ivysaur',
        entryNumber: 2,
        height: 1,
        types: ['Grass','Poison'],
    },
    {
        name: 'Venusaur',
        entryNumber: 3,
        height: 2,
        types: ['Grass','Poison'],
    },
    {
        name: 'Onix',
        entryNumber: 95,
        height: 8.8,
        types: ['Rock','Ground'],
    }
];

//forEach loop, prints pokemon info with extra comment on size
pokemonList.forEach(function(pokemon) {
    if(pokemon.height >= 5){
        document.write(`#${pokemon.entryNumber} ${pokemon.name} (height: ${pokemon.height}m) Wow, thats big!<br>`)
    }
    else if(pokemon.height <= 1){
        document.write(`#${pokemon.entryNumber} ${pokemon.name} (height: ${pokemon.height}m) Wow, thats small!<br>`)
    }
    else {
        document.write(`#${pokemon.entryNumber} ${pokemon.name} (height: ${pokemon.height}m)<br>`)
    }
})