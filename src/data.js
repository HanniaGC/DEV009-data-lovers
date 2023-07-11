export function filterBySpecies(dataCard, species) {
  const filteredData = dataCard.filter((element) => {
    return element.species.toLowerCase() === species.toLowerCase();
  });
  return filteredData;
}


export function filterByEpisodeCount(dataCard, filterType) {
  // Obtener el número de episodios de cada personaje
  const episodeCounts = dataCard.map((element) => element.episode.length);

  // Obtener el valor máximo y mínimo de episodios
  const maxCount = Math.max(...episodeCounts);
  const minCount = Math.min(...episodeCounts);

  // Filtrar los personajes según el tipo de filtro
  let filteredData1 = [];
  if (filterType === "most") {
    filteredData1 = dataCard.filter((element) => element.episode.length === maxCount);
  } else if (filterType === "least") {
    filteredData1 = dataCard.filter((element) => element.episode.length === minCount);
  }

  return filteredData1;
}

export const orderAZ = (a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  } else {
    return -1;
  }
}

export const orderZA = (a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return -1;
  } else {
    return 1;
  } 
    
}
export function computeStats(data) {
  const locationCount = {};

  data.forEach((item) => {
    const location = item.location.name;

    if (locationCount[location]) {
      locationCount[location]++;
    } else {
      locationCount[location] = 1;
    }
  });

  return locationCount;
}

