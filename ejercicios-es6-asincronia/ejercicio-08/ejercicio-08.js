allChars = [];
function loadCharacters() {
    const select = document.getElementById("character-list");
    fetch("https://thronesapi.com/api/v2/Characters")
        .then(response => response.json())
        .then(data => {
            allChars = data;
            console.log(data);
            data.forEach(character => {
                const characterOption = document.createElement("option");
                characterOption.value = character.id;
                characterOption.text = character.fullName;
                select.appendChild(characterOption);
            });
        })
        .catch(error => console.log(error));
    }

function fillCharData() { 
    const select = document.getElementById("character-list");
    const selectedId = select.value;
    const image = document.getElementById("character-image");
    console.log(selectedId);
    console.log(allChars[selectedId]);
    const selectedChar = allChars[selectedId]
    image.src = selectedChar.imageUrl;
}

loadCharacters();