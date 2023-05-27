const encryptBtn = document.querySelector('.encryption-btn');
const decryptBtn = document.querySelector('.decryption-btn');
const copyBtn = document.querySelectorAll('.copiar-btn');
const textInput = document.getElementById('text-input');
let resText = document.getElementById('res-text') | '';
const resTextOutput = document.getElementById('res-text-output');
let text = '';
let firstSentence = '';
let aux = '';

textInput.addEventListener('input', function (e) {
  text = e.target.value;
  aux = text;
  firstSentence = text;
});

encryptBtn.addEventListener('click', function () {
  if (text === '') {
    resTextOutput.innerHTML = `<div class = "notification">
                                <h2>NINGÚN MENSAJE FUE ENCONTRADO 😕</h2>
                                <p>Ingresa el texto que deseas encriptar o desencriptar</p>
                                <img class="ops-img" src="./img/muñeco.png" alt = "Oops... No text found"/>
                              </div>
                            `;
    return;
  }
  resTextOutput.innerHTML = `<textarea
                              id="res-text"
                              class="text-output-div"
                              name="text-output"
                              readonly
                              >
                            </textarea>`;
  resText = document.getElementById('res-text');
  decryptBtn.disabled = false;
  text = text.split('');
  text = text.map((char) => {
    switch (char) {
      case 'e':
        return 'enter';
      case 'i':
        return 'imes';
      case 'a':
        return 'ai';
      case 'o':
        return 'ober';
      case 'u':
        return 'ufat';
      default:
        return char;
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
  copy(firstSentence);
});
copyBtn[1].addEventListener('click', () => {
  copy(resText.textContent);
});

function customAlert(msg, duration) {
  var styler = document.createElement('div');
  styler.classList.add('alert');
  styler.innerHTML = '<p style="color: #155724; padding: 0 0.8em; font-size: 1.3rem">' + msg + '</p>';
  setTimeout(function () {
    styler.parentNode.removeChild(styler);
  }, duration);
  document.body.insertAdjacentElement('afterbegin', styler);
}

function copy(e) {
  if (e !== undefined) {
    navigator.clipboard
      .writeText(e)
      .then(() => {
        customAlert('successfully copied! 😀', 2000);
      })
      .catch(() => {
        customAlert('something went wrong 😕', 2000);
      });
  }
}
