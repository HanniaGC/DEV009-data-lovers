import {
  filterBySpecies,
  filterByEpisodeCount,
  computeStats,
} from "../src/data.js";

const data = [
  {
    name: "Rick Sanchez",
    species: "Human",
    origin: {
      name: "Earth (C-137)",
    },
    location: {
      name: "Earth (Replacement Dimension)",
    },
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
    ],
  },
  {
    name: "Abadango Cluster Princess",
    species: "Alien",
    origin: {
      name: "Abadango",
    },
    location: {
      name: "Abadango",
    },
    episode: ["https://rickandmortyapi.com/api/episode/27"],
  },
  {
    name: "Aqua Morty",
    species: "Humanoid",
    origin: {
      name: "unknown",
    },
    location: {
      name: "Citadel of Ricks",
      episode: [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/22",
      ],
    },
  },
];

describe("filterBySpecies", () => {
  it("is a function", () => {
    expect(typeof filterBySpecies).toBe("function");
  });
  it('deberia retorna Abadango Cluster Princess "species"', () => {
    expect(filterBySpecies(data, "Alien")[0].name).toEqual(
      "Abadango Cluster Princess"
    );
  });
  it('deberia retorna "Aqua Morty"', () => {
    expect(filterBySpecies(data, "Humanoid")[0].name).toEqual("Aqua Morty");
  });
});
//const filterType = "most";
describe("filterByEpisodeCount", () => {
  it("is a function", () => {
    expect(typeof filterByEpisodeCount).toEqual("function");
  });
  /*it("deberia retorna uno de los personajes que participa más ", () => {
    expect(filterByEpisodeCount(data, filterType)[0].name).toEqual(
      "Rick Sanchez"
    );
  });*/
});

describe("computeStats", () => {
  it("is a function", () => {
    expect(typeof computeStats).toBe("function");
  });
  it('debería retornar Rick Sanchez para "Earth (Replacement Dimension)"', () => {
    expect(computeStats(data)).toEqual(location);
  });
});

/* describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid('4083952015263')).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid('79927398713')).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid('1234567890')).toBe(false);
    });
  });*/
