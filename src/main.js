import data from "./data/rickandmorty/rickandmorty.js";
//console.log(data);
const charactersImg = document.querySelector(".characters__img");

data.results.slice(0, 29).forEach((element) => {
  charactersImg.innerHTML += `
  <div class="img">
      <img src="${element.image}" />
      <div class="img--label">${element.name}</div>
  </div>`;
})

const charactersDate = document.querySelector(".characters__date")

data.results.slice(0, 29).forEach((descrip) => {
  charactersDate.innerHTML += `
  <div class="imgen">
      <img src="${descrip.image}" />
      <p class="nam">${descrip.name}</p>
      <p class="species">${descrip.species}</p>
      <p class="gender">Origen: ${descrip.gender}</p>
      <p class="origin">${descrip.origin.name}</p>
      <p class="live">${descrip.location.name}</p>
  </div>`;
})