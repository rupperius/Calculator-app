class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case 'x':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }
}


const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const body = document.getElementsByTagName('body');
const header = document.getElementsByTagName('header');
const keypadCircle = document.querySelector(".keypadCircle");
const display = document.querySelector(".display");
const keyboard = document.querySelector('.keyboard');
const buttons = document.querySelectorAll('.keyboard button');
const btn = document.querySelectorAll('.btn');

const data_number = document.querySelectorAll('[data-number]');
const data_operator = document.querySelectorAll('[data-operation]');
const data_delete = document.querySelector('[data-delet]');
const data_reset = document.querySelector('[data-reset]');
const data_equal = document.querySelector('[data-equal]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

console.log(previousOperandTextElement);
console.log(previousOperandTextElement.innerText);
console.log(currentOperandTextElement);
console.log(currentOperandTextElement.innerText);

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement);

data_number.forEach(btn => {
    btn.addEventListener('click', () =>{
        calculator.appendNumber(btn.innerText);
        calculator.updateDisplay();
        console.log(currentOperandTextElement.innerText);
        console.log(previousOperandTextElement.innerText);
    })
});

data_operator.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.chooseOperation(btn.innerText);
        calculator.updateDisplay();
    })
})

data_equal.addEventListener('click', btn => {
    calculator.compute();
    calculator.updateDisplay();   
});

data_delete.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay(); 
});


data_reset.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
})

document.addEventListener('keydown', function (event) {
    let patternForNumbers = /[0-9]/g;
    let patternForOperators = /[+\-*\/]/g;
    if (event.key.match(patternForNumbers)) {
      event.preventDefault();
      calculator.appendNumber(event.key);
      calculator.updateDisplay();
    }
    if (event.key === '.') {
      event.preventDefault();
      calculator.appendNumber(event.key);
      calculator.updateDisplay();
    }
    if (event.key.match(patternForOperators)) {
      event.preventDefault();
      calculator.chooseOperation(event.key);
      calculator.updateDisplay();
    }
    if (event.key === 'Enter' || event.key === '=') {
      event.preventDefault();
      calculator.compute();
      calculator.updateDisplay();
    }
    if (event.key === "Backspace") {
      event.preventDefault();
      calculator.delete();
      calculator.updateDisplay();
    }
    if (event.key == 'Delete') {
      event.preventDefault();
      calculator.clear();
      calculator.updateDisplay();
    }
  
  });