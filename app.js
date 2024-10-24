/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let operator = '';
let previousInput = '';

/*------------------------ Cached Element References ------------------------*/
const updateDisplay = () => {
  display.textContent = currentInput || '0';
};
const clear = () => {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay();
};

const calculate = () => {
  if (currentInput && previousInput && operator) {
    const prev = (previousInput);
    const current = (currentInput);
    let result;

    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    currentInput = String(result);
    previousInput = '';
    operator = '';
    updateDisplay();
  }
};

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...
    const value = button.textContent;

      if (button.classList.contains('number')) {
        currentInput += value;
        updateDisplay();
      } else if (button.classList.contains('operator')) {
        if (value === 'C') {
          clear();
        } else {
          if (currentInput) {
            if (previousInput) {
              calculate();
            }
            previousInput = currentInput;
            operator = value;
            currentInput = '';
          }
        }
      } else if (button.classList.contains('equals')) {
        calculate();
      }
  });
});

calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains('number')) {
    // Do something with a number
  }

  // Example
  if (event.target.innerText === '*') {
    // Do something with this operator
  }
});

update.display ()

/*-------------------------------- Functions --------------------------------*/


