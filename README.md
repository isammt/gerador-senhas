# Gerador de Senhas

## Descrição

Este projeto é um gerador de senhas interativo que permite aos usuários criar senhas seguras com controle sobre o número de caracteres, características da senha e visualização da força da senha.

## Funcionalidades

- Geração de senhas aleatórias
- Controle do número de caracteres (4-20)
- Seleção de características da senha:
  - Letras maiúsculas
  - Letras minúsculas
  - Números
  - Símbolos
- Indicador de força da senha
- Funcionalidade de copiar a senha gerada

## Regras de Geração de Senhas

- Por padrão, se nenhuma característica for selecionada, serão geradas senhas apenas com letras minúsculas.
- A força da senha é determinada da seguinte forma:
  - **Fraca**: Nenhum campo selecionado, apenas letras maiúsculas, apenas letras minúsculas, ou ambas letras maiúsculas e minúsculas.
  - **Média**: Letras maiúsculas, minúsculas e pelo menos mais um campo selecionado.
  - **Forte**: Todos os campos selecionados.

## Como Usar

1. Abra o arquivo `index.html` em seu navegador.
2. Use o controle deslizante para selecionar o número de caracteres desejado.
3. Selecione as características desejadas para a senha (maiúsculas, minúsculas, números, símbolos).
4. Clique no botão de atualização ao lado do campo de senha para gerar uma nova senha.
5. Use o botão "Copiar senha" para copiar a senha gerada para a área de transferência.

## Estrutura do Projeto

```
gerador-senhas/
│
├── index.html
├── css/
│   ├── reset.css
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── unlock.png
│   ├── copy.png
│   └── refresh-cw.png
└── README.md
```

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Responsividade

O projeto é totalmente responsivo, adaptando-se a diferentes tamanhos de tela, desde dispositivos móveis até desktops.

## Desenvolvimento

### Pré-requisitos

- Navegador web moderno
- Editor de código de sua preferência


### Configuração do Ambiente de Desenvolvimento

1. Clone o repositório:
   ```
   git clone https://github.com/isammt/gerador-senhas.git
   ```
2. Navegue até o diretório do projeto:
   ```
   cd gerador-senhas
   ```
3. Abra o arquivo `index.html` no seu navegador ou use um servidor local.


## Contato

Contato - isabella.mmarquest@gmail.com

Link do Projeto: https://isammt.github.io/gerador-senhas/
