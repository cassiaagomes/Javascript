import solos from './solos.js';

function main() {
  const serviceSection = document.querySelector('.service-description');

  // for (const colaborador of colaboradores) {
  //   serviceSection.insertAdjacentHTML('afterend', criarColaboradores(colaborador));
  // }

  solos.forEach((solo) => {
    serviceSection.insertAdjacentHTML(
      'afterend',
      criarSolos(solo)
    );
  })
}

function criarSolos(solo) {
  return `<div class="imagem-container">
    <img class="imagem" src="${solo.image}" alt="${solo.name}">
    <p>${solo.name}</p>
  </div>`;
}

main();


