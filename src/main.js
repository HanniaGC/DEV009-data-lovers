import data from "./data/rickandmorty/rickandmorty.js";
//console.log(data);
const charactersImg = document.querySelector(".characters__img");
const charactersDate = document.querySelector(".characters__date");
const section1 = document.getElementById("section1");

data.results.slice(0, 29).forEach((element) => {
  const characterHTML = `
  <button class="img" style="height: 200px; width: 200px;">
    <img src="${element.image}" data-name="${element.name}" data-species="${element.species}" data-gender="${element.gender}" data-origin="${element.origin.name}" data-location="${element.location.name}" />
    <div class="img--label">${element.name}</div>
  </button>
`;
  charactersImg.innerHTML += characterHTML;
});
const episodesList = document.getElementById("episodes");
episodesList.style.display = "none";

charactersImg.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    episodesList.style.display = "block";
    const characterData = {
      image: event.target.src,
      name: event.target.dataset.name,
      species: event.target.dataset.species,
      gender: event.target.dataset.gender,
      origin: event.target.dataset.origin,
      location: event.target.dataset.location,
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
      <p class="gender">Genero: ${data.gender}</p>
      <p class="origin">Lugar de origen: ${data.origin}</p>
      <p class="location">Lugar donde vive: ${data.location}</p>
    </div>
    <select name="episodes" id="episodes">
            <option value="episode_1">Capitulos</option>
            <option value="episode_2">Capitulos 1</option>
            <option value="episode_3">Capitulos 2</option>
            <option value="episode_4">Capitulos 3</option>
          </select>
  `;
}
