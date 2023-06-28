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
})

charactersImg.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
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
    <div class="imgen">
      <img src="${data.image}" />
      <p class="nam">Nombre: ${data.name}</p>
      <p class="species">Especie: ${data.species}</p>
      <p class="gender">Genero: ${data.gender}</p>
      <p class="origin">Lugar de origen: ${data.origin}</p>
      <p class="live">Lugar donde vive: ${data.location}</p>
    </div>
  `;
}