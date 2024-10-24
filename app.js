/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
// constants reamining the same throughout

/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let operator = '';
let previousInput = '';
// variable placeholders to be used for recal later

/*------------------------ Functions  ---------------------------------------*/
const updateDisplay = () => {
  display.textContent = currentInput || '0';
  // displaying what button is currently pressed || or displaying 0 (helps with knowing clear had worked)
};
const clear = () => {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay();
  // setting up the consttant of clear to be recalled later in button event listener.
  // 
};

const calculate = () => {
  if (currentInput && previousInput && operator) {
    // setting up my connection to the blank variables 
    const prev = parseInt(previousInput);
    const current = parseInt(currentInput);
    // setting up my constants for the a and b of my equation.
    // running into issue with the addition.  a + b = ab instead of c
    // research from stackoverflow shows that without the function parseInt the addition will not work idk the why and thats okay
    let result; 

    switch (operator) {
      case '+':
        result = prev + current;
        break;
        // if i am not breaking the switch then it does not work, found that out the hard way
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
    // they have to display a string 
    previousInput = '';
    operator = '';
    updateDisplay();
  } //no else needed 
};

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...
    const value = button.textContent;
    // connecting the button.textcontent of html to a const on my js 
    // everyones gotta talk to eachother!!! rememeber (:

// lets put this in english 
// if the button that is pressed contains a number
// then display the current value (value being button.textContent reference on HTML)
// if the button contains an operator and if that value of the operator is C (or clear)
//then complete the clear function defined up top^^^
//if the button contains an operator and if that operator is anything other than clear
//then run the calculate function bassed on what button was pressed
//back to the top if the button pressed is the = 
//display the calculate function on the display screen
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








