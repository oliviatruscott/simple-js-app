//IIFE wrapping pokemonList array
let pokemonRepository = (function() {
    let pokemonList = [
        { name: 'Bulbasaur', entryNumber: 1, height: 0.7,types: ['Grass','Poison'] },
        { name: 'Ivysaur', entryNumber: 2, height: 1, types: ['Grass','Poison'] },
        { name: 'Venusaur', entryNumber: 3, height: 2, types: ['Grass','Poison'] }
    ];
    function add (pokemon) {
        if (typeof pokemon === 'object' && pokemon.name && pokemon.entryNumber && pokemon.height && pokemon.types) {
            pokemonList.push(pokemon);
        }
    };
    function getAll () {
        return pokemonList
    };
    return {
        add: add,
        getAll: getAll
    };
}) ();

//using add function
pokemonRepository.add({ name: 'Onix', entryNumber: 95, height: 8.8, types: ['Rock','Ground'] });

//forEach loop, prints pokemon info with extra comment on size
//pokemonList is now a local variable and must be 'called' upon by using getAll function inside pokemonRepository
pokemonRepository.getAll().forEach(function(pokemon) {
    if(pokemon.height >= 5){
        document.write(`#${pokemon.entryNumber} ${pokemon.name} (height: ${pokemon.height}m) Wow, thats big!<br>`)
    }
    else if(pokemon.height <= 1){
        document.write(`#${pokemon.entryNumber} ${pokemon.name} (height: ${pokemon.height}m) Wow, thats small!<br>`)
    }
    else {
        document.write(`#${pokemon.entryNumber} ${pokemon.name} (height: ${pokemon.height}m)<br>`)
    }
});

//filter pokemon by name
let pokemonNames = []; //empty array for names
for(let i = 0; i < pokemonRepository.getAll().length; i++) { //adds names into array
    pokemonNames.push(pokemonRepository.getAll()[i].name);
};

function findPokemon (query) { //function for searching pokemon
    return pokemonNames.filter(name => name.toLowerCase().indexOf(query.toLowerCase()) > -1);
};

console.log(findPokemon('On')); //calls upon search function with partial pokemon name