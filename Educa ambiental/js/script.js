function abrirModal() {
  const modal = document.getElementById("janela-modal");
  modal.classList.add("abrir");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "fechar" || e.target.id == "janela-modal") {
      modal.classList.remove("abrir");
    }
  });
}

function openModal() {
  const modal1 = document.getElementById("window-modal1");
  modal1.classList.add("abrir");

  modal1.addEventListener("click", (e) => {
    if (e.target.id == "close" || e.target.id == "window-modal1") {
      modal1.classList.remove("abrir");
    }
  });
}

