async function fetchCharacter(){
    const page = document.getElementById("pageInput").value || 1;
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`
    try {
        const response = await fetch(apiUrl)
        const data = await response.json();
        console.log(data.results)
        displayCharacters(data.results)
    } catch (error) {
        console.error("Erro ao buscar personagens - ", error)
    }
}

function displayCharacters(characters){
    const container = document.getElementById("container");
    container.innerHTML = "";

    characters.forEach(character => {
        const card =  document.createElement("div");
        card.className = "Card"

        const name = document.createElement("h3");
        name.textContent = character.name;

        const species = document.createElement("p");
        species.textContent = `Spiece: ${character.species}`;

        const image = document.createElement("img");
        image.className = "imagem"
        image.src = character.image;
        image.alt = character.name;
        image.style.width = "200px"

        const status = document.createElement("h3");
        status.textContent = character.status;

        card.appendChild(name);
        card.appendChild(species);
        card.appendChild(image);
        card.appendChild(status);


        container.appendChild(card);
    });
}