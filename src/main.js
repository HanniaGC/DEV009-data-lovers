import data from "./data/rickandmorty/rickandmorty.js";
import {
  filterBySpecies,
  filterByEpisodeCount,
  computeStats,
  orderAZ,
} from "./data.js";

const charactersImg = document.querySelector(".characters__img");
const charactersDate = document.querySelector(".characters__date");
const section1 = document.getElementById("section1");
const dataCard = data.results.slice(0, 30);

// Función para mostrar los personajes en seccion 1
function displayCharacters(info) {
  charactersImg.innerHTML = "";
  info.forEach((element) => {
    const characterHTML = `
    <button class="img" style="height: 250px; width: 200px;">
    <img src="${element.image}" data-name="${element.name}" data-species="${element.species}" data-gender="${element.gender}" data-origin="${element.origin.name}" data-location="${element.location.name}" />
    <div class="img--label">${element.name}</div>
  </button>
    `;
    charactersImg.innerHTML += characterHTML;
  });
}

// Mostrar los personajes al cargar la página
displayCharacters(dataCard);

//charactersImg.insertAdjacentElement("afterend", filterForm);

// Agregar el evento de submit al formulario
const filterForm = document.getElementById("speciesSelect");
filterForm.addEventListener("click", (event) => {
  event.preventDefault();
  const selectedSpecies = event.target.value;
  let ordereset = [...dataCard];
  if (selectedSpecies === "reset") {
    ordereset;
  } else {
    ordereset = filterBySpecies(dataCard, selectedSpecies);
  }

  displayCharacters(ordereset);
});

const botonRegreso = document.getElementById("backButton");
botonRegreso.addEventListener("click", function() {
  hideCharacterData();
  section1.style.display = "block";  
  showFilterForm();
  hideRegresoButton();
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
    };

    showCharacterData(characterData);
    section1.style.display = "none";    
    hideFilterForm();
    showRegresoButton();
  }
});

function showFilterForm() {
  filterForm.style.display = "block";
}

function hideRegresoButton() {
  botonRegreso.style.display = "none";
}

function showRegresoButton() {
  botonRegreso.style.display = "block";
}

function hideCharacterData() {
  charactersDate.innerHTML = "";
}


function hideFilterForm() {
  if (filterForm) {
    filterForm.style.display = "none";
  }
}


function showCharacterData(data) {
  charactersDate.innerHTML = `
    <div class="image">
      <img src="${data.image}" />
      <p class="name">Nombre: ${data.name}</p>
      <p class="species">Especie: ${data.species}</p>
      <p class="gender">Género: ${data.gender}</p>
      <p class="origin">Lugar de origen: ${data.origin}</p>
      <p class="location">Lugar donde vive: ${data.location}</p>
    </div>    
   `;
}


// Agregar el evento de submit al segundo formulario
const filterForm2 = document.getElementById("seasonSelect");
filterForm2.addEventListener("click", (event) => {
  event.preventDefault();
  const filterType = event.target.value;
  let ordercalcul = [...dataCard];
  if (filterType === "participation"){
    ordercalcul = dataCard;
  } else {
    ordercalcul = filterByEpisodeCount(dataCard, filterType);
  }
  
  displayCharacters(ordercalcul);
});

const selectElement = document.getElementById("orderFor");

selectElement.addEventListener("click", (event) => {
  event.preventDefault();
  const selectedValue = event.target.value;
  let order = [...dataCard];
  if (selectedValue === "all") {
    order = dataCard;
  } else {
    order = orderAZ(order, selectedValue);
  }

  displayCharacters(order);
});



//Calcular el recuento de personajes por ubicación utilizando la función computeStats()
const locationStats = computeStats(dataCard);

const graphicData = document.getElementById("graphic");
Chart.defaults.font.size = 15;
const chart = new Chart(graphicData, {
  type: "bar",
  data: {
    labels: Object.keys(locationStats),
    datasets: [
      {
        label: "Personajes",
        data: Object.values(locationStats),

        backgroundColor: [
          "rgb(231, 76, 60)",
          "rgb(41, 128, 185)",
          "rgb(26, 188, 156)",
          "rgb(241, 196, 15)",
        ],
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false, // Ocultar las líneas de la cuadrícula en el eje X
        },
      },
      y: {
        grid: {
          display: false, // Ocultar las líneas de la cuadrícula en el eje Y
        },
      },
    },
  },
});
