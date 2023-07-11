export function filterBySpecies(data, species) {
  const filteredData = data.filter((element) => {
    return element.species.toLowerCase() === species.toLowerCase();
  });
  return filteredData;
}

export function filterByEpisodeCount(data, filterType) {
  
  const episodeCounts = data.map((element) => element.episode.length);
  const maxCount = Math.max(...episodeCounts);
  const minCount = Math.min(...episodeCounts);

 
  let filteredData1 = [];
  if (filterType === "most") {
    filteredData1 = data.filter(
      (element) => element.episode.length === maxCount
    );
  } else if (filterType === "least") {
    filteredData1 = data.filter(
      (element) => element.episode.length === minCount
    );
  }

  return filteredData1;
}

export const orderAZ = (a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
};

export const orderZA = (a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return 1;
  } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return -1;
  } else {
    return 0;
  }
};
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
