import data from "./data/rickandmorty/rickandmorty.js";
//console.log(data);
const charactersImg = document.querySelector(".characters__img");

data.results.forEach((element) => {
  charactersImg.innerHTML += `
  <div class="img">
    <div class="img--label">${element.name}</div>
    <img src="${element.image}" />
  </div>`;
});
