const display = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let previousInput = '';
let operator = '';
buttons.forEach(button => {
  button.addEventListener('click', () => {
const value = button.textContent;
switch (value) {
case 'C':
  currentInput = '';
  previousInput = '';
   operator = '';
   display.textContent = '0';
break;
case '+':
case '-':
case '×':
case '÷':
if (currentInput) {
    operator = value;
    previousInput = currentInput;
    currentInput = '';
break;
case '=':
if (currentInput && previousInput && operator) {
const result = calculate(previousInput, currentInput, operator);
    display.textContent = result;
    currentInput = result.toString();
     previousInput = '';
     operator = '';
        }
break;
default:
   currentInput += value;
    display.textContent = currentInput;
break;
    }
  });
});
function calculate(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);
switch (operator) {
case '+':
return a + b;
case '-':
return a - b;
 case '×':
return a * b;
case '÷':
return b !== 0 ? a / b : 'Error';
default:
return 0;
  }
}
const toggle = document.getElementById('mode-toggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
});
