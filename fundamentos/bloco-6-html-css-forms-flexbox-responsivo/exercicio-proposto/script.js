// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function nadaAcontece(event) {
  event.preventDefault();
}

function somenteA(event) {
  if (event.key !== "a") {
    event.preventDefault();
  }
}

HREF_LINK.addEventListener("click", nadaAcontece);
INPUT_CHECKBOX.addEventListener("click", nadaAcontece);
INPUT_TEXT.addEventListener("keypress", somenteA);
