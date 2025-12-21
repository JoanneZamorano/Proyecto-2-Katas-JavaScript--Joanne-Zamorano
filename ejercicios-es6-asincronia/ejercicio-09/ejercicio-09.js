const getRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 151) + 1;
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const pokemonData = await response.json();
        renderPokemon(pokemonData);
    } catch (error) {
        console.error("Error al obtener el Pokémon:", error);
    }
};

const renderPokemon = (pokemon) => {
    const imgElement = document.querySelector(".random-image");
    imgElement.src = pokemon.sprites.other['official-artwork'].front_default;
    imgElement.alt = pokemon.name;
    
    const name = document.createElement("h1");
    name.textContent = pokemon.name.toUpperCase();
    document.body.appendChild(name);
};

getRandomPokemon();