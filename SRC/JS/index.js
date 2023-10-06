const buttons = document.querySelectorAll(".botao");
const characters = document.querySelectorAll(".personagem");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    deselectButton();
    deselectCharacter();

    button.classList.add("selecionado");

    characters[index].classList.add("selecionado");
  });
});
function deselectCharacter() {
  const characterSelected = document.querySelector(
    ".personagem.selecionado"
  );
  characterSelected.classList.remove("selecionado");
}

function deselectButton() {
  const buttonSelected = document.querySelector(".botao.selecionado");
  buttonSelected.classList.remove("selecionado");
}
