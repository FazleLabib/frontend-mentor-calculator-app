const themeSlider = document.getElementById('slider-range');

const input = document.getElementById('input');
const output = document.getElementById('output');

const keys = document.querySelectorAll('.key');

const keyReset = document.getElementById('reset');
const keyResult = document.getElementById('result');

let inputValue = '';

themeSlider.addEventListener('input', function() {
  const theme = parseInt(this.value);

  document.body.classList.remove('theme-two', 'theme-three');

  if (theme === 2) {
    document.body.classList.add('theme-two');
  } else if (theme === 3) {
    document.body.classList.add('theme-three');
  }

});

function displayInput () {
  input.innerHTML = inputValue;
}

function addInput(keyInput) {
  if (keyInput === 'del') {
    inputValue = inputValue.slice(0, -1);
  } else if (keyInput === '=') {
    displayOutput();
  } else {
    inputValue += keyInput;
  }
  displayInput();
}

keys.forEach(key => {
  key.addEventListener('click', function() {
    addInput(this.textContent);
  });
});

keyReset.addEventListener('click', function() {
  inputValue = '';
  displayInput();
});

displayInput();