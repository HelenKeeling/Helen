class Calculator {
constructor(previousOperandTextElement, currentOperandTextElement) {
this.previousOperandTextElement = previousOperandTextElement
this.currentOperandTextElement = currentOperandTextElement
}

clear() {
/*this.previousOperand = " " ?????
this.currentOperand = " "  ????? 
this.operation = " " ????? */
}

delete() {
}

appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperandTextElement.innerText += number.toString();
}

chooseOperation(operation) {
    this.previousOperandTextElement.innerText += (" " + this.currentOperandTextElement);
    this.currentOperandTextElement.innerText = operation.toString();
}

Compute() {
}

updateDisplay() {
    const stringNumber = number.toString()


}
}



const numberButtons = document.querySelectorAll("[data-number")
const operationButtons = document.querySelectorAll("[data-operation")
const equalsButtons = document.querySelector("[data-equals")
const deleteButtons = document.querySelector("[data-delete")
const allClearButton = document.querySelector("[data-all-clear")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
button.addEventListener("click", () => {
calculator.appendNumber(button.innerText)
//calculator.updateDisplay() ?

})



})