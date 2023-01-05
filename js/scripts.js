//IIFE wrapping pokemonList array
let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let pokemonListElement = $('.pokemon-list');

    //adds pokemon to array
    function add (pokemon) {
        pokemonList.push(pokemon);
    };

    function getAll () {
        return pokemonList
    };

    //button list of pokemon
    function addListItem(pokemon){
        //let pokemonList = $('.pokemon-list');
        let listPokemon = $('<li class="list-group-item"></li>');
        let button = $('<button class="pokemon-button btn btn-info" data-target="pokemon-modal" data-toggle="modal">' + pokemon.name + '</button>');
        listPokemon.append(button);
        pokemonListElement.append(listPokemon);
        button.on('click', function() {
            showDetails(pokemon);
        });
    };

    //loads api details using promise
    function loadList() {
        return fetch(apiUrl).then(function (response) {
              return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
            add(pokemon);
        });
        }).catch(function (e) {
            console.error(e);
        })
    };

    //gathers details from api
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function(details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types.map((type) => type.type.name);
        }).catch(function(e){
            console.error(e);
        });
    };

    //displays details on clicking button
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            showDetailsModal(pokemon);
        });
    };

    //new modal code
    function showDetailsModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');
        modalBody.empty();
        modalTitle.text(pokemon.name);

        let height = $('<p>' + 'Height: ' + pokemon.height + '</p>');
        let image = $('<img class="pokemon-img" src="' + pokemon.imageUrl + '" />');
        let types = $('<p>' + 'Types: ' + pokemon.types + '</p>');
        modalBody.append(image);
        modalBody.append(height);
        modalBody.append(types);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showDetailsModal: showDetailsModal
    };

}) ();
//end of IIFE

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});