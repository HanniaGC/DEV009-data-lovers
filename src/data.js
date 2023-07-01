// estas funciones son de ejemplo
//export const filter = () => {
////return "characterData";
//};
//console.log(characterData)

//var newArray = arr.filter(callback(currentValue["url", index["episode", "results"]])
//console.log(newArray)

/*let newArray = CharacterData.filter(item => {
  return item.name.includes("episode")

}*/

export function filterBySpecies(dataCard, species) {
  const filteredData = dataCard.filter((element) => {
    return element.species.toLowerCase() === species.toLowerCase();
  });
  return filteredData;
}
