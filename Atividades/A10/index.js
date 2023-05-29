function validateForm(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const cpfInput = document.getElementById('cpf');
  const phoneInput = document.getElementById('phone');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const cpf = cpfInput.value.trim();
  const phone = phoneInput.value.trim();

  // Verifica se os campos estão vazios
  if (name === '') {
    showError(nameInput, 'Campo obrigatório');
  } else {
    removeError(nameInput);
  }

  if (email === '') {
    showError(emailInput, 'Campo obrigatório');
  } else if (!isValidEmail(email)) {
    showError(emailInput, 'E-mail inválido');
  } else {
    removeError(emailInput);
  }

  if (cpf === '') {
    showError(cpfInput, 'Campo obrigatório');
  } else if (!isValidCPF(cpf)) {
    showError(cpfInput, 'CPF inválido');
  } else {
    removeError(cpfInput);
  }

  if (phone === '') {
    showError(phoneInput, 'Campo obrigatório');
  } else if (!isValidPhone(phone)) {
    showError(phoneInput, 'Telefone inválido');
  } else {
    removeError(phoneInput);
  }
}

function showError(input, message) {
  input.classList.add('invalid');

  const errorElement = document.createElement('p');
  errorElement.className = 'error-message';
  errorElement.textContent = message;

  const parentElement = input.parentElement;
  parentElement.appendChild(errorElement);
}

function removeError(input) {
  input.classList.remove('invalid');

  const parentElement = input.parentElement;
  const errorElement = parentElement.querySelector('.error-message');
  if (errorElement) {
    parentElement.removeChild(errorElement);
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidCPF(cpf) {
  // Implemente aqui a lógica para validar o CPF
  // Deixei essa parte em branco pois o cálculo do CPF requer um algoritmo específico

  // Exemplo de implementação:
  // return isValidCPFAlgorithm(cpf);

  // Para fins de demonstração, consideramos todos os CPFs válidos
  return true;
}

function isValidPhone(phone) {
  const phoneRegex = /^\d+$/;
  return phoneRegex.test(phone);
}

const cpfInput = document.getElementById('cpf');
VMasker(cpfInput).maskPattern('999.999.999-99');

const phoneInput = document.getElementById('phone');
VMasker(phoneInput).maskPattern('(99) 9999-9999');

const form = document.getElementById('form');
form.addEventListener('submit', validateForm);

