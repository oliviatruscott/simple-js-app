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

//loop prints list of pokemon, adds statement based on height
for (let i = 0; i < pokemonList.length; i++){
    if(pokemonList[i].height >= 5){
        document.write(`#${pokemonList[i].entryNumber} ${pokemonList[i].name} (height: ${pokemonList[i].height}m) Wow, thats big!<br>`)
    }
    else if(pokemonList[i].height <= 1){
        document.write(`#${pokemonList[i].entryNumber} ${pokemonList[i].name} (height: ${pokemonList[i].height}m) Wow, thats small!<br>`)
    }
    else {
        document.write(`#${pokemonList[i].entryNumber} ${pokemonList[i].name} (height: ${pokemonList[i].height}m)<br>`)
    }
}