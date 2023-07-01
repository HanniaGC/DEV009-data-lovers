import data from "./data/rickandmorty/rickandmorty.js";
import { filterBySpecies } from "./data.js";

const charactersImg = document.querySelector(".characters__img");
const charactersDate = document.querySelector(".characters__date");
const section1 = document.getElementById("section1");
const dataCard = data.results.slice(0, 29);
let tableCap = document.getElementById("table_cap");
console.log(dataCard)

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

// Crear el menú desplegable debajo de los personajes
const filterForm = document.createElement("form");
filterForm.innerHTML = `
  <label for="speciesSelect">Filtrar por especie:</label>
  <select name="species" id="speciesSelect">
    <option value="human">Human</option>
    <option value="humanoid">Humanoid</option>
    <option value="alien">Alien</option>
  </select>
  <button type="submit">Filtrar</button>
`;
charactersImg.insertAdjacentElement("afterend", filterForm);

// Agregar el evento de submit al formulario
filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const speciesSelect = document.getElementById("speciesSelect");
  const selectedSpecies = speciesSelect.value;
  filterBySpeciesAndDisplay(selectedSpecies);
});

// Función para filtrar los personajes por especie y mostrar los resultados
function filterBySpeciesAndDisplay(species) {
  const filteredData = filterBySpecies(dataCard, species);
  displayFilteredData(filteredData);
}

// Función para mostrar los personajes filtrados
function displayFilteredData(filteredData) {
  charactersImg.innerHTML = "";
  filteredData.forEach((element) => {
    const characterHTML = `
      <button class="img" style="height: 200px; width: 200px;">
        <img src="${element.image}" data-name="${element.name}" data-species="${element.species}" data-gender="${element.gender}" data-origin="${element.origin.name}" data-location="${element.location.name}" data-episode="${element.episode}" />
        <div class="img--label">${element.name}</div>
      </button>
    `;

    charactersImg.innerHTML += characterHTML;
  });
}

charactersImg.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const characterData = {
      image: event.target.src,
      name: event.target.dataset.name,
      species: event.target.dataset.species,
      gender: event.target.dataset.gender,
      origin: event.target.dataset.origin,
      location: event.target.dataset.location,
      episode: event.target.dataset.episode,
    };

    showCharacterData(characterData);
    section1.style.display = "none";
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
            <option value="episode_1">Capitulos</option>
            <option value="episode_2">Capitulos 1</option>
            <option value="episode_3">Capitulos 2</option>
            <option value="episode_4">Capitulos 3</option>
          </select>
  `;
}



dataCard.forEach((result) => {
  let tableCap = document.getElementById('table_cap'); // Obtener la referencia al elemento tbody

  let tableContent = ''; // Variable para almacenar el contenido completo de la tabla
  
  tableContent += '<thead>';
  tableContent += '<tr>';
  tableContent += '<th>Capitulos de la temporada</th>';
  tableContent += '</tr>';
  tableContent += '</thead>';
  
  tableContent += '<tbody>';
  
  dataCard.forEach((result) => {
    let episodes = result.episode;
  
    let row = '<tr>';
  
    episodes.forEach((res) => {
      row += '<td>' + res + '</td>';
    })
  
    row += '</tr>';
  
    tableContent += row;

  });
  
  tableContent += '</tbody>';
  
  // Asignar el contenido completo de la tabla a tableCap.innerHTML
  tableCap.innerHTML = tableContent;
  
});
