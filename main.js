//I have decided that when I use something not explained in class I will let you a know
//that I'm not using something I don't at least mostly understand something I learned reading 
//somewhere else, or from a video and, it may help me in getting used to explaining my code

let firstNumber = '';
let secondNumber = '';
let operation = '';

const screen = document.getElementById('screen');
function updateScreen() {
  screen.textContent = firstNumber + operation + secondNumber || '0';
}
function clearAll() {
  firstNumber = '';
  secondNumber = '';
  operation = '';
  updateScreen();
}
function handleNumber(value) {
  if (!operation) {
    firstNumber += value;
  } else {
    secondNumber += value;
  }
  updateScreen();
}
function handleDot() {
  if (!operation && !firstNumber.includes('.')) {
    firstNumber += '.';
//The .includes() method is used to check if  an array or string contains a certain value.
  } else if (operation && !secondNumber.includes('.')) {
    secondNumber += '.';
  }
  updateScreen();
}
function handleOperation(op) {
  switch (true) {
    case !firstNumber:
      return;
    case firstNumber && operation && secondNumber:
      calculate();
      operation = op;
      break;
    default:
      operation = op;
  }
  updateScreen();
}
function calculate() {
  const num1 = parseFloat(firstNumber);//parseFloat() converts a string to a floating-point number.
  //parseFloat() is a built-in JavaScript function that parses a string argument and returns a floating-point number.
  //parseFloat() is useful for converting strings that represent numbers into actual numeric values.
  const num2 = parseFloat(secondNumber);
  if (isNaN(num1) || isNaN(num2)) return;
 let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Error';
      break;
    default:
      return;
  }

  firstNumber = result.toString();
  secondNumber = '';
  operation = '';
  updateScreen();
}
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    switch (true) {
      case !isNaN(value): 
        handleNumber(value);
        break;
      case ['+', '-', '*', '/'].includes(value): 
        handleOperation(value);
        break;
      case value === '.':
        handleDot();
        break;
      case value === '=':
        calculate();
        break;
      case value === 'C':
        clearAll();
        break;
      default:
        console.warn('Unhandled button:', value);
    }
  });
});
document.getElementById('toggle').addEventListener('change', (e) => {
  document.body.classList.toggle('dark-mode', e.target.checked);
});
updateScreen();
