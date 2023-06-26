// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

//document.getElementById("info_character").style.display = "none";

//const select = document.getElementById("characters_img");
//const dateCharacter = document.getElementById("info_character");

//select.addEventListener("click", function (){
//if (dateCharacter.style.display === "none") {
  //dateCharacter.style.display = "block";
  //document.getElementById("characters").style.display = "none";
//} else {
  //dateCharacter.style.display = "none";
//}
//})

const charactersImg = document.getElementByClass(".characters_img");
const dateCharacter = document.getElementByClass(".imgen");

charactersImg.addEventListener('click', function (event) {
  const clickedImg = event.target.closest(".img");
  if (clickedImg ) {
    dateCharacter.style.display = "block";
    document.getElementByClass(".characters_img").style.display = "none";
  } 
});

//dateCharacter.addEventListener('click', function () {
  //dateCharacter.style.display = "none";
//});