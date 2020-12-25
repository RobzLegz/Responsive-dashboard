console.log("Starting calculator!");

let numA = 12;
let numB = 9;

function calculatorSum() {
    let result = numA + numB;
    document.querySelector(".calculator").innerHTML = result;
}


/**
 * @contant
 */
const calculatorResultElement = document.querySelector(".calculator .result");
let calculatorOperation;
let calculatorResult;

/**
 *
 * @param {string} operation
 */
function useCalculator(operation) {
    let input = parseInt(calculatorResultElement.value);
    if (operation !== "equals") {
        calculatorOperation = operation;
        calculatorResult = input;
    } else {
        if (calculatorOperation === "add")  {
            calculatorResult += input;
        } else if (calculatorOperation === "subtract") {
            calculatorResult -= input;
        } else if (calculatorOperation === "multiply") {
            calculatorResult *= input;
        } else if (calculatorOperation === "divide") {
            calculatorResult /= input;
        }
    }
    calculatorResultElement.value = calculatorResult;
}
function clearCalculator() {
    calculatorResultElement.value = 0;
    calculatorOperation = undefined;
    calculatorResult = 0;
}
