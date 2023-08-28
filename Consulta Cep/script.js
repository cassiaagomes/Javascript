let cep = document.querySelector("#cep");
let rua = document.querySelector("#rua");
let bairro = document.querySelector("#bairro");
let cidade = document.querySelector("#cidade");
let estado = document.querySelector("#estado");

cep.value = "";

cep.addEventListener("blur", async function(e) {
  let cepValue = e.target.value;

  const url = `https://viacep.com.br/ws/${cepValue}/json/`;

  try {
    const response = await fetch(url);
    const resposta = await response.json();

    if ("erro" in resposta) {
      setErrorFor(cep, "CEP Inválido!");
      return;
    }

    setSuccessFor(cep);
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;

  } catch (error) {
    console.log(error.message);
  }
});

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.classList.remove("success");
  formControl.classList.add("error");
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
}
