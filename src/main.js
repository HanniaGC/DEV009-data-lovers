// import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(data.results);

const charactersImg = document.querySelector(".characters_img");

data.results.slice(0, 30).forEach(element => {
    charactersImg.innerHTML += `
        <div class="img">
        <img src="${element.image}" />
            <div class="img--label">${element.name}</div>
        
        </div>`;
        
});

const charactersDate = document.querySelector("#info_character")

data.results.slice(0, 29).forEach((descrip) => {
  charactersDate.innerHTML += `
  <div class="imgen">
      <img src="${descrip.image}" />
      <p class="nam">Nombre: ${descrip.name}</p>
      <p class="species">Especie: ${descrip.species}</p>
      <p class="gender">Genero: ${descrip.gender}</p>
      <p class="origin">Lugar de origen: ${descrip.origin.name}</p>
      <p class="live">Lugar donde vive: ${descrip.location.name}</p>
  </div>`;
})

//const showData = document.querySelector(".imge_character");

//data.results.forEach(Characterinf => {
//    info_character.innerHTML += `
   // < div class="imge_character">
   // <img src="${element.image}" />
   // <div class = 

   //</div> )