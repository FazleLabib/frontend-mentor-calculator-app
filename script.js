const themeSlider = document.getElementById('slider-range');

const input = document.getElementById('input');

const keySeven = document.getElementById('7');
const keyEight = document.getElementById('8');
const keyNine = document.getElementById('9');
const keyDel = document.getElementById('del');

const keyFour = document.getElementById('4');
const keyFive = document.getElementById('5');
const keySix = document.getElementById('6');
const keyAdd = document.getElementById('+');

const keyOne = document.getElementById('1');
const keyTwo = document.getElementById('2');
const keyThree = document.getElementById('3');
const keySubtract = document.getElementById('-');

const keyDecimalPoint = document.getElementById('.');
const keyZero = document.getElementById('0');
const keyDivide = document.getElementById('/');
const keyMultiply = document.getElementById('x');

const keyReset = document.getElementById('reset');
const keyResult = document.getElementById('result');

themeSlider.addEventListener('input', function() {
    const theme = parseInt(this.value);

    document.body.classList.remove('theme-two', 'theme-three');

    if (theme === 2) {
      document.body.classList.add('theme-two');
    } else if (theme === 3) {
      document.body.classList.add('theme-three');
    }

});
