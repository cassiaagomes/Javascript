import flags from './model/flags.js';

const main = document.querySelector('main');

for (const flag of flags) {
  main.insertAdjacentHTML('beforeend', criarFlags(flag));
}

function criarFlags(flag) {
  return `<div class="flag col-2 my-2 text-center">
    <img src="${flag.image}" alt="${flag.name}">
    <p>${flag.name}</p>
  </div>`;
}