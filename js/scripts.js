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
    function showDetails(pokemon) {
        console.log(pokemon);
    };
    //button list of pokemon
    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('pokemon-button');
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);         //error listed here???
        //event listener, console logs when button is clicked
        button.addEventListener('click', function() {
            showDetails(pokemon);
    });
    };

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
}) ();

//using add function
pokemonRepository.add({ name: 'Onix', entryNumber: 95, height: 8.8, types: ['Rock','Ground'] });

console.log(pokemonRepository.getAll());

//for each loop goes through addListitem function
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});



//filter pokemon by name
//let pokemonNames = []; //empty array for names
//for(let i = 0; i < pokemonRepository.getAll().length; i++) { //adds names into array
//    pokemonNames.push(pokemonRepository.getAll()[i].name);
//};

//function findPokemon (query) { //function for searching pokemon
//    return pokemonNames.filter(name => name.toLowerCase().indexOf(query.toLowerCase()) > -1);
//};

//console.log(findPokemon('On')); //calls upon search function with partial pokemon name