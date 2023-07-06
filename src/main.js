import data from "./data/rickandmorty/rickandmorty.js";
import { filterBySpecies } from "./data.js";
import { filterByEpisodeCount } from "./data.js";

const charactersImg = document.querySelector(".characters__img");
const charactersDate = document.querySelector(".characters__date");
const section1 = document.getElementById("section1");
const dataCard = data.results.slice(0, 29);

// Función para mostrar los personajes
function displayCharacters() {
  charactersImg.innerHTML = "";
  dataCard.forEach((element) => {
    const characterHTML = `
      <button class="img" style="height: 200px; width: 200px;">
        <img src="${element.image}" data-name="${element.name}" data-species="${element.species}" data-gender="${element.gender}" data-origin="${element.origin.name}" data-location="${element.location.name}" data-episode="${element.episode}" />
        <div class="img--label">${element.name}</div>
      </button>
    `;

    charactersImg.innerHTML += characterHTML;
  });
}

// Mostrar los personajes al cargar la página
displayCharacters();

//charactersImg.insertAdjacentElement("afterend", filterForm);

// Agregar el evento de submit al formulario
filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const speciesSelect = document.getElementById("speciesSelect");
  const selectedSpecies = speciesSelect.value;
  filterBySpeciesAndDisplay(selectedSpecies);
});

charactersImg.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const characterData = {
      image: event.target.src,
      name: event.target.dataset.name,
      species: event.target.dataset.species,
      gender: event.target.dataset.gender,
      origin: event.target.dataset.origin,
      location: event.target.dataset.location,
      episode: event.target.dataset.episode
    };

    showCharacterData(characterData);
    section1.style.display = "none"

  }
});

function showCharacterData(data) {
  charactersDate.innerHTML = `
    <div class="image">
      <img src="${data.image}" />
      <p class="name">Nombre: ${data.name}</p>
      <p class="species">Especie: ${data.species}</p>
      <p class="gender">Género: ${data.gender}</p>
      <p class="origin">Lugar de origen: ${data.origin}</p>
      <p class="location">Lugar donde vive: ${data.location}</p>
      <p class="episode">Episodios: ${data.episode}</p>
    </div>
    <select name="episodes" id="episodes">
            <option value="episode">Capitulos:${data.episode}</option>
            
          </select>
  `;
  const element= document.createElement('div')
  element.innerHTML=html
  const buttonReturn=element.querySelector('#buttonReturn')
  buttonReturn.addEventListener('click',function(){
    section1.style.display = "block"
    charactersDate.innerHTML=''
  })

  charactersDate.appendChild(element)

  const filteredData = filterBySpecies(dataCard, "human"); // Filtrar por especie "human"
console.log(filteredData);
}

