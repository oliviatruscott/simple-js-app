//IIFE wrapping pokemonList array
let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //adds pokemon to array
    function add (pokemon) {
        "name" in pokemon &&
        "detailsUrl" in pokemon &&
        "imageURL" in pokemon
        pokemonList.push(pokemon);
    };

    function getAll () {
        return pokemonList
    };

    //button list of pokemon
    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('pokemon-button');
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        //event listener, console logs when button is clicked
        button.addEventListener('click', function() {
            showDetails(pokemon);
    });
    };

    //api configuration to load list
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

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function(details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function(e){
            console.error(e);
        });
    };

    //displays details on clicking button
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            showModal(pokemon.name, `${pokemon.name}'s height is: ${pokemon.height}`, pokemon.imageUrl);
        });
    };

    //modal setup for showDetails function
    function showModal(title, text, img) {
        //clears all existing modal content
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.innerHTML = '';

        //creates new div with "modal" class
        let modal = document.createElement('div');
        modal.classList.add('modal');

        //close button element
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        //creates h1 title element for modal
        let titleElement = document.createElement('h1');
        titleElement.innerText = title;

        //body text of modal
        let contentElement = document.createElement('p');
        contentElement.innerText = text;

        //image element of modal
        let imageElement = document.createElement('img');
        imageElement.setAttribute('src', img);
        imageElement.setAttribute('alt', 'Pokemon Image');

        //grouping of modal classes
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(imageElement);
        modalContainer.appendChild(modal);

        //adds 'is-visible' class
        modalContainer.classList.add('is-visible');
        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });
    }

    //hide modal function
    function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
    }

    //esc key modal close
    window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
}) ();
//end of IIFE

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});