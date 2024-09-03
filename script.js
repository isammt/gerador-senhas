// Caso seja selecionado o checkbox
function generatePassword() {
  const length = document.getElementById('length').value; // Obtém o valor do campo de entrada onde o usuário especifica o comprimento desejado para a senha
  const includeLowercase = document.getElementById('lowercase').checked; //Verifica se o checkbox para letras minúsculas está marcado.
  const includeUppercase = document.getElementById('uppercase').checked; //  Verifica se o checkbox para letras maiúsculas está marcado.
  const includeNumbers = document.getElementById('numbers').checked; // Verifica se o checkbox para números está marcado.
  const includeSymbols = document.getElementById('symbols').checked; // Verifica se o checkbox para símbolos está marcado.

  let charset = ''; // Inicializa uma string vazia chamada charset que será preenchida com os caracteres permitidos para a senha.
  // bloco if verifica se a opção correspondente está marcada. Se estiver, adiciona o conjunto de caracteres apropriado ao charset.
  if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeNumbers) charset += '0123456789';
  if (includeSymbols) charset += '!@#$%^&*()_+[]{}|,.?';

  if (!charset) charset = 'abcdefghijklmnopqrstuvwxyz';  // se nada for selecionado, usa letras minúsculas por padrão

  let password = ''; // Inicializa uma string vazia para armazenar a senha gerada
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length); //Gera um índice aleatório entre 0 e o comprimento do charset. 
    password += charset[randomIndex]; //Adiciona o caractere aleatório selecionado do charset à variável password.
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

  //se nada for selecionado
  let strengthText = 'Fraca';
  let strengthColor = 'red';

  //Se for selecionado apenas duas opções 
  // esperar retorno do guarni sobre as 4 opções
  if ((includeLowercase && includeUppercase && (includeNumbers || includeSymbols))) {
    strengthText = 'Média';
    strengthColor = 'yellow';
  }

  //se for selecionado todas as opções 
  if (includeLowercase && includeUppercase && includeNumbers && includeSymbols) {
    strengthText = 'Forte';
    strengthColor = 'green';
  }

  //Esses elementos são usados para mostrar visualmente ao usuário o nível de segurança da senha que ele gerou
  document.getElementById('strengthText').innerText = strengthText;
  document.getElementById('strengthBar').style.backgroundColor = strengthColor;
}

// Botão para copiar o conteúdo do campo de senha para a área de transferência do usuário.
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
