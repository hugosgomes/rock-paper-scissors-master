const modal = document.getElementById("myModal");
const close = document.getElementsByClassName("close")[0];
const footerButton = document.querySelector(".footer button");

function abrirModal() {
  modal.style.display = "block";
}

close.addEventListener("click", () => {
  modal.style.display = "none";
});

footerButton.addEventListener("click", () => {
  abrirModal();
});

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

console.log("v1");
