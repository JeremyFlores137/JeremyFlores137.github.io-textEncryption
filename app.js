const encryptBtn = document.querySelector('.encryption-btn');
const decryptBtn = document.querySelector('.decryption-btn');
const copyBtn = document.querySelectorAll('.copiar-btn');
const textInput = document.getElementById('text-input');
const resText = document.getElementById('res-text');
let text = '';
let aux = [];

textInput.addEventListener('input', function (e) {
  text = e.target.value;
});

encryptBtn.addEventListener('click', function () {
  if (text === '') {
    resText.innerHTML = `<div class = "notification">
                            <h2>NINGÚN MENSAJE FUE ENCONTRADO 😕</h2>
                            <p>Ingresa el texto que deseas encriptar o desencriptar</p>
                            <img class="ops-img" src="./muñeco.png" alt = "Oops... No text found"/>
                          </div>
                        `;
    return;
  }
  textInput.disabled = true;
  decryptBtn.disabled = false;
  text = text.split('');
  text = text.map((char) => {
    switch (char) {
      case 'a':
        return 'enter';
        break;
      case 'e':
        return 'imes';
        break;
      case 'i':
        return 'ai';
        break;
      case 'o':
        return 'ober';
        break;
      case 'u':
        return 'ufat';
        break;
      default:
        return char;
        break;
    }
  });
  aux = text;
  resText.innerHTML = text.join('');
  text = text.join('');
  encryptBtn.disabled = true;
});

decryptBtn.addEventListener('click', function () {
  textInput.disabled = false;
  encryptBtn.disabled = false;
  aux = aux.map((char) => {
    switch (char) {
      case 'enter':
        return 'a';
        break;
      case 'imes':
        return 'e';
        break;
      case 'ai':
        return 'i';
        break;
      case 'ober':
        return 'o';
        break;
      case 'ufat':
        return 'u';
        break;
      default:
        return char;
        break;
    }
  });
  resText.innerHTML = aux.join('');
  text = aux.join('');
  decryptBtn.disabled = true;
});

copyBtn[0].addEventListener('click', () => {
  copy(text);
});
copyBtn[1].addEventListener('click', () => {
  copy(resText.textContent);
});

function copy(e) {
  navigator.clipboard
    .writeText(e)
    .then(() => {
      alert('successfully copied');
    })
    .catch(() => {
      alert('something went wrong');
    });
}
