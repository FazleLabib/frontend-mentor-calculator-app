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
    calculate(inputValue);
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
  output.innerHTML = 0;
  displayInput();
});

function calculate(inputValue) {
  // Tokenize the input string
  const tokens = inputValue.match(/\d+(\.\d+)?|[+\-x\/.]/g);
  
  // Implement operator precedence
  const precedence = (operator) => {
    if (operator === '+' || operator === '-') {
      return 1;
    } else if (operator === 'x' || operator === '/') {
      return 2;
    }
    return 0;
  };

  // Convert infix to postfix using Shunting Yard algorithm
  const result = [];
  const operatorStack = [];
  for (let token of tokens) {
    if (!isNaN(token) || token === '.') {
      result.push(token);
    } else if (['+', '-', 'x', '/'].includes(token)) {
        while (operatorStack.length > 0 && precedence(operatorStack[operatorStack.length - 1]) >= precedence(token)) {
          result.push(operatorStack.pop());
        }
        operatorStack.push(token);
      }
  }

  while (operatorStack.length > 0) {
    result.push(operatorStack.pop());
  }

  // Evaluate postfix input
  const operandStack = [];
  for (let token of result) {
    if (!isNaN(token)) {
      operandStack.push(token);
    } else if (['+', '-', 'x', '/'].includes(token)) {
        const y = parseFloat(operandStack.pop());
        const x = parseFloat(operandStack.pop());
        let result;
        switch (token) {
          case '+':
            result = x + y;
            break;
          case '-':
            result = x - y;
            break;
          case 'x':
            result = x * y;
            break;
          case '/':
            result = x / y;
            break;
        }
        operandStack.push(result);
    }
  }
  output.innerHTML = operandStack[0];
}

displayInput();