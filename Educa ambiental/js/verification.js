const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const telephoneValue = telephone.value.trim();
  const messageValue = message.value.trim();

  const usernameRegex = /^.{3,}$/;
  if (usernameRegex.test(usernameValue)) {
    setSuccessFor(username, 'O nome inserido é válido.');
  } else if (usernameValue.length < 3) {
    setErrorFor(username, 'O nome deve ter pelo menos 3 letras.');
  } else {
    setErrorFor(username, 'O nome de colaborador é obrigatório.');
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (emailValue === '') {
    setErrorFor(email, 'O email é obrigatório.');
  } else if (!emailRegex.test(emailValue)) {
    setErrorFor(email, 'Digite um email válido.');
  } else {
    setSuccessFor(email);
  }

  const telephoneRegex = /^[1-9]{2}9?[6-9][0-9]{3}[0-9]{4}$/;
  if (telephoneValue === '') {
    setErrorFor(telephone, 'O telefone é obrigatório.');
  } else if (!telephoneRegex.test(telephoneValue)) {
    setErrorFor(telephone, 'Digite um telefone válido.');
  } else {
    setSuccessFor(telephone);
  }

  if (messageValue === '') {
    setErrorFor(message, 'A mensagem é obrigatória.');
  } else {
    setSuccessFor(message);
  }

  if (
    usernameRegex.test(usernameValue) &&
    emailRegex.test(emailValue) &&
    telephoneRegex.test(telephoneValue) &&
    messageValue !== ''
  ) {
    window.location.href = 'https://forms.gle/4DmX7obJKjq7xLVL7';
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  //Adicionar a mensagem de erro
  small.innerText = message;

  //Adicionar a classe de erro
  formControl.className = 'form-control error';
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;

  //Adicionar a classe de sucesso
  formControl.className = 'form-control success';
}

const meuBotao = document.getElementById('meuBotao');
meuBotao.addEventListener('click', function() {
  window.location.href = '#';
});
