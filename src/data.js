// estas funciones son de ejemplo
/*export const suma =(primero,segundo)=>{
  return primero+segundo
}
export const filtradoPorEspecie=(data,)=>{
  // procesas y filtras
  // return resultado*/
export function filterBySpecies(dataCard, species) {
  const filteredData = dataCard.filter((element) => {
    return element.species.toLowerCase() === species.toLowerCase();
  });
  return filteredData;
}
