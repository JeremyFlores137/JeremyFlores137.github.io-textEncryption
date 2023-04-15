const encryptBtn = document.querySelector('.encryption-btn');
const decryptBtn = document.querySelector('.decryption-btn');
const copyBtn = document.querySelectorAll('.copiar-btn');
const textInput = document.getElementById('text-input');
const resText = document.getElementById('res-text');
let text = '';
let aux = '';

textInput.addEventListener('input', function (e) {
  text = e.target.value;
  aux = text;
});

encryptBtn.addEventListener('click', function () {
  if (text === '') {
    resText.innerHTML = `<div class = "notification">
                            <h2>NINGÚN MENSAJE FUE ENCONTRADO 😕</h2>
                            <p>Ingresa el texto que deseas encriptar o desencriptar</p>
                            <img class="ops-img" src="./img/muñeco.png" alt = "Oops... No text found"/>
                          </div>
                        `;
    return;
  }
  textInput.disabled = true;
  decryptBtn.disabled = false;
  text = text.split('');
  text = text.map((char) => {
    switch (char) {
      case 'e':
        return 'enter';
        break;
      case 'i':
        return 'imes';
        break;
      case 'a':
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
});

decryptBtn.addEventListener('click', function () {
  textInput.disabled = false;
  encryptBtn.disabled = false;
  let aux = text;
  aux = aux
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

  resText.innerHTML = aux;
  text = aux;
  
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
