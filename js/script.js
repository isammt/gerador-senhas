// Caso seja selecionado o checkbox
function generatePassword() {
  const length = document.getElementById('length').value;
  const includeLowercase = document.getElementById('lowercase').checked;
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;

  let charset = '';
  if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeNumbers) charset += '0123456789';
  if (includeSymbols) charset += '!@#$%^&*()_+[]{}|,.?';

  if (!charset) charset = 'abcdefghijklmnopqrstuvwxyz';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  document.getElementById('passwordField').value = password;
  evaluatePasswordStrength();
}

// Função que avalia a força da senha
function evaluatePasswordStrength() {
  const includeLowercase = document.getElementById('lowercase').checked;
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;


  let strengthText = 'Fraca';
  let strengthColor = 'red';


  if ((includeLowercase && includeUppercase && (includeNumbers || includeSymbols))) {
    strengthText = 'Média';
    strengthColor = 'yellow';
  }


  if (includeLowercase && includeUppercase && includeNumbers && includeSymbols) {
    strengthText = 'Forte';
    strengthColor = 'green';
  }

  document.getElementById('strengthText').innerText = strengthText;
  document.getElementById('strengthBar').style.backgroundColor = strengthColor;
}


function copyPassword() {
  const passwordField = document.getElementById('passwordField');
  navigator.clipboard.writeText(passwordField.value)
    .then(() => {
      alert('Senha copiada!');
    })
    .catch(err => {
      console.error('Erro ao copiar a senha: ', err);
    });
}

// Atualiza o texto exibido em um elemento de interface com o comprimento da senha conforme o usuário ajusta esse valor
function updateLengthLabel(value) {
  document.getElementById('lengthLabel').innerText = value;
}

// Garante que uma senha seja gerada automaticamente assim que a página é carregada pelo navegador.
window.onload = generatePassword;
