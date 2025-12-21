const getCharacters = async () => {
    const res = await fetch("https://thronesapi.com/api/v2/Characters");
    const characters = await res.json();
    
    intertCharacter(characters);
    
    const select = document.querySelector("#character-list");
    select.addEventListener("change", (event) => {
        const selectedId = event.target.value;
        const character = characters.find(char => char.id == selectedId);
        
        if (character) {
            renderCharacter(character);
        }
    });
}

//para rellenar el <select>
const intertCharacter = (list) => {
    const select = document.querySelector("#character-list");
    list.forEach(char => {
        const option = document.createElement("option");
        option.value = char.id; 
        option.textContent = char.fullName;
        select.appendChild(option);
    });
}

//pintar personajes:
const renderCharacter = (char) => {
    const resultsDiv = document.querySelector("#results");
    resultsDiv.innerHTML = `
        <img src="${char.imageUrl}" alt="${char.fullName}" class="character-image" />
        <h1>${char.fullName}</h1>
        <h2>${char.family} | ${char.title}</h2>
    `;
}

getCharacters();